import { Movie } from "@/types/movie";
import { getMoviesByGenre } from "@/utils/api";
import { MovieCard } from "@/widgets/MovieCard";
import { notFound } from "next/navigation";

interface GenreDetailsProps {
  params: Promise<{ genreId: string }>;
}

export default async function GenreDetails({ params }: GenreDetailsProps) {
  const { genreId } = await params;
  const { results: movies } = await getMoviesByGenre(genreId);
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
