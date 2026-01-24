import { Series } from "@/types/series";
import getYear from "@/utils/getYear";
import Link from "next/link";
import { BiSolidImageAlt } from "react-icons/bi";
import { FaStar } from "react-icons/fa";
import { FaCirclePlay } from "react-icons/fa6";

interface SeriesCardProps {
  series: Series;
}

export const SeriesCard = ({ series }: SeriesCardProps) => {
  return (
    <Link href={`/series/${series.id}`} className="flex flex-col gap-3 w-67">
      <div className="relative group">
        {series.poster_path ? (
          <img
            className="h-100 object-cover rounded-xl shadow"
            src={"https://www.themoviedb.org/t/p/w300" + series.poster_path}
            alt={series.name}
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
      <h1 className="text-xl tracking-[2px] font-bold w-full whitespace-nowrap text-ellipsis overflow-hidden">
        {series.name}
      </h1>
      <div className="flex items-center justify-between">
        <span className="flex items-center gap-1">
          {series.vote_average.toFixed(1)}
          <FaStar size={15} />
        </span>
        <span className="font-medium bg-[#363636] py-1 px-3 rounded-xl">
          {series.first_air_date ? getYear(series.first_air_date) : "No info"}
        </span>
      </div>
    </Link>
  );
};
