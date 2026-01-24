import { Movie } from "@/types/movie";
import { MovieCard } from "@/widgets/MovieCard";

interface OtherMoviesProps {
  gender: number;
  actorCast: Movie[];
}

export const OtherMovies = ({ gender, actorCast }: OtherMoviesProps) => {
  return (
    <div className="py-20">
      <h1 className="text-5xl mb-12 font-bold text-center">
        You can see {gender == 1 ? "her" : "him"} in:
      </h1>
      <div className="flex flex-wrap justify-center items-center gap-8">
        {actorCast.slice(0, 12).map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};
