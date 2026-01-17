import { MovieDetails as MovieDetailsType } from "@/types/movie";
import { getMovieDetails } from "@/utils/api";
import { notFound } from "next/navigation";
import { MovieContent } from "../widgets/MovieContent";
import { ActorsList } from "../widgets/ActorsList";
import { Metadata } from "next";

interface MovieDetailsProps {
  params: Promise<{ movieId: string }>;
}

export async function generateMetadata({
  params,
}: MovieDetailsProps): Promise<Metadata> {
  const { movieId } = await params;
  const movie: MovieDetailsType = await getMovieDetails(movieId);
  if (!movie) {
    return { title: "Movie not found" };
  }
  return { title: movie.title, description: movie.overview };
}

export default async function MovieDetails({ params }: MovieDetailsProps) {
  const { movieId } = await params;
  const movie: MovieDetailsType = await getMovieDetails(movieId);
  if (!movie) {
    return notFound();
  }
  return (
    <>
      <MovieContent movie={movie} />
      <ActorsList actors={movie.credits.cast} />
    </>
  );
}
