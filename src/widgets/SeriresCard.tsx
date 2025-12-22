import { Series } from "@/types/series";
import getYear from "@/utils/getYear";
import { FaStar } from "react-icons/fa";

interface SeriesCardProps {
  series: Series;
}

export const SeriesCard = ({ series }: SeriesCardProps) => {
  return (
    <div className="flex flex-col gap-3 w-67">
      <img
        className="rounded-xl h-100 object-cover shadow"
        src={`https://www.themoviedb.org/t/p/w300${series.poster_path}`}
        alt={series.name}
      />
      <div>
        <h1 className="text-xl tracking-[2px] font-bold w-full whitespace-nowrap text-ellipsis overflow-hidden mb-3">
          {series.name}
        </h1>
        <div className="flex justify-between">
          <div className="flex justify-center items-center gap-1">
            <p>{series.vote_average.toFixed(1)}</p>
            <span>
              <FaStar />
            </span>
          </div>
          <p className="font-medium bg-[#363636] py-1 px-3 rounded-xl ">
            {getYear(series.first_air_date)}
          </p>
        </div>
      </div>
    </div>
  );
};
