import { Movie } from "@/types/movie";
import getYear from "@/utils/getYear";
import Link from "next/link";
import { BiSolidImageAlt } from "react-icons/bi";
import { FaStar } from "react-icons/fa";
import { FaCirclePlay } from "react-icons/fa6";

interface MovieCardProps {
  movie: Movie;
}

export const MovieCard = ({ movie }: MovieCardProps) => {
  return (
    <Link
      href={`/movies/${movie.id}`}
      className="group flex flex-col gap-3 w-67"
    >
      <div className="relative group">
        {movie.poster_path ? (
          <img
            className="h-100 object-cover rounded-xl shadow"
            src={"https://www.themoviedb.org/t/p/w300" + movie.poster_path}
            alt={movie.title}
          />
        ) : (
          <div className="flex justify-center items-center w-full h-100 bg-primary rounded-lg">
            <BiSolidImageAlt size={100} />
          </div>
        )}

        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 flex items-center justify-center transition-all duration-300">
          <div className="opacity-0 group-hover:opacity-100 flex items-center justify-center text-center p-4 rounded-full transition-all duration-300">
            <FaCirclePlay size={80} color="#f6be00" />
          </div>
        </div>
      </div>

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
    </Link>
  );
};
