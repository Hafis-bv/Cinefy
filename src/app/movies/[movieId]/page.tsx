import { MovieDetails as MovieDetailsType } from "@/types/movie";
import { getMovieDetails } from "@/utils/api";
import { notFound } from "next/navigation";
import { MovieContent } from "../widgets/MovieContent";

interface MovieDetailsProps {
  params: Promise<{ movieId: string }>;
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
    </>
  );
}
