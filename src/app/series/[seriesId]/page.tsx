import { MovieDetails as MovieDetailsType } from "@/types/movie";
import TmdbApi from "@/utils/api";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { SeriesDetails as SeriesDetailsType } from "@/types/series";
import { ActorsList } from "@/widgets/ActorsList";
import { Trailer } from "@/widgets/Trailer";
import { SeriesContent } from "../widgets/SeriesContent";
import { SimilarSeries } from "../widgets/SimilarSeries";

interface SeriesDetailsProps {
  params: Promise<{ seriesId: string }>;
}

export async function generateMetadata({
  params,
}: SeriesDetailsProps): Promise<Metadata> {
  const { seriesId } = await params;
  const series: SeriesDetailsType = await TmdbApi.getSeriesDetails(seriesId);
  if (!series) {
    return { title: "Movie not found" };
  }
  return { title: series.name, description: series.overview };
}

export default async function SeriesDetails({ params }: SeriesDetailsProps) {
  const { seriesId } = await params;
  const series: SeriesDetailsType = await TmdbApi.getSeriesDetails(seriesId);
  const { results: videos } = await TmdbApi.getSeriesVideo(seriesId);
  const { results: similarSeries } = await TmdbApi.getSimilarSeries(seriesId);
  if (!series) {
    return notFound();
  }
  return (
    <>
      <SeriesContent series={series} />
      <ActorsList actors={series.credits.cast} />
      <Trailer videos={videos} />
      <SimilarSeries series={similarSeries} />
    </>
  );
}
