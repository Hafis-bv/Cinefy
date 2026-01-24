import { MovieDetails as MovieDetailsType } from "@/types/movie";
import { getMovieDetails, getMovieVideo, getSimilarMovies } from "@/utils/api";
import { notFound } from "next/navigation";
import { MovieContent } from "../widgets/MovieContent";
import { Metadata } from "next";
import { SimilarMovies } from "../widgets/SimilarMovies";
import { ActorsList } from "@/widgets/ActorsList";
import { Trailer } from "@/widgets/Trailer";

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
  const video = await getMovieVideo(movieId);
  const similarMovies = await getSimilarMovies(movieId);
  if (!movie) {
    return notFound();
  }

  return (
    <>
      <MovieContent movie={movie} />
      <ActorsList actors={movie.credits.cast} />
      <Trailer videos={video.results} />
      <SimilarMovies movies={similarMovies.results} />
    </>
  );
}
