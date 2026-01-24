import { Movie } from "@/types/movie";
import { MovieCard } from "@/widgets/MovieCard";

interface SimilarMoviesProps {
  movies: Movie[];
}

export const SimilarMovies = ({ movies }: SimilarMoviesProps) => {
  console.log(movies);
  return (
    <div className="py-20">
      {movies.length ? (
        <div>
          <h1 className="text-center font-bold mb-8 text-5xl">
            Similar Movies
          </h1>
          <div className="flex flex-wrap gap-8 justify-center items-center">
            {movies.map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
          </div>
        </div>
      ) : (
        <div>
          <h1 className="text-center text-gray-400 text-4xl">
            No Similar Movies
          </h1>
        </div>
      )}
    </div>
  );
};
