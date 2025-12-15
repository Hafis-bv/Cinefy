import { Movie } from "@/types/movie";
import getYear from "@/utils/getYear";
import { FaStar } from "react-icons/fa";

interface MovieCardProps {
  movie: Movie;
}

export const MovieCard = ({ movie }: MovieCardProps) => {
  return (
    <div className="flex flex-col gap-3 w-67">
      <img
        className="rounded-xl h-100 object-cover shadow"
        src={`https://www.themoviedb.org/t/p/w300${movie.poster_path}`}
        alt={movie.title}
      />
      <div>
        <h1 className="text-xl tracking-[2px] font-bold w-full whitespace-nowrap text-ellipsis overflow-hidden mb-3">
          {movie.title}
        </h1>
        <div className="flex justify-between">
          <div className="flex justify-center items-center gap-1">
            <p>{movie.vote_average.toFixed(1)}</p>
            <span>
              <FaStar />
            </span>
          </div>
          <p className="font-medium bg-[#363636] py-1 px-3 rounded-xl ">
            {getYear(movie.release_date)}
          </p>
        </div>
      </div>
    </div>
  );
};
