import { Genre, Movie } from "@/types/movie";
import TmdbApi from "@/utils/api";
import { MovieCard } from "@/widgets/MovieCard";
import { Metadata } from "next";
import { notFound } from "next/navigation";

interface GenreDetailsProps {
  params: Promise<{ genreId: string }>;
}

export async function generateMetadata({
  params,
}: GenreDetailsProps): Promise<Metadata> {
  const { genreId } = await params;
  const { genres } = await TmdbApi.getMovieGenres();

  const currentGenre = genres.find(
    (genre: Genre) => genre.id == Number(genreId),
  );
  if (!currentGenre) {
    return { title: "Genre not found" };
  }
  return { title: currentGenre.name };
}

export default async function GenreDetails({ params }: GenreDetailsProps) {
  const { genreId } = await params;
  const { results: movies } = await TmdbApi.getMoviesByGenre(genreId);
  if (!movies.length) {
    return notFound();
  }
  return (
    <div>
      <h1 className="text-center text-4xl lg:text-5xl font-semibold tracking-[3px] mb-10">
        Genre <span className="text-primary">results</span>
      </h1>
      <div className="flex flex-wrap justify-center gap-6">
        {movies.map((movie: Movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}
