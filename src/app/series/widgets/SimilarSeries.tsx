import { Series } from "@/types/series";
import { MovieCard } from "@/widgets/MovieCard";
import { SeriesCard } from "@/widgets/SeriresCard";

interface SimilarSeriesProps {
  series: Series[];
}

export const SimilarSeries = ({ series }: SimilarSeriesProps) => {
  return (
    <div className="py-20">
      {series.length ? (
        <div>
          <h1 className="text-center font-bold mb-8 text-5xl">
            Similar Series
          </h1>
          <div className="flex flex-wrap gap-8 justify-center items-center">
            {series.map((serie) => (
              <SeriesCard key={serie.id} series={serie} />
            ))}
          </div>
        </div>
      ) : (
        <div>
          <h1 className="text-center text-gray-400 text-4xl">
            No Similar Series
          </h1>
        </div>
      )}
    </div>
  );
};
