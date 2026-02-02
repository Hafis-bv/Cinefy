import { Container } from "@/components/Container";
import { SeriesDetails } from "@/types/series";
import Link from "next/link";
import { BiSolidImageAlt } from "react-icons/bi";
import { FaStar } from "react-icons/fa";

interface SeriesContentProps {
  series: SeriesDetails;
}

export const SeriesContent = ({ series }: SeriesContentProps) => {
  return (
    <Container className="flex flex-col justify-center items-center gap-10 mb-20 text-center">
      <div className="flex flex-col lg:flex-row gap-12 items-center">
        {series.poster_path ? (
          <img
            className="rounded-xl h-100 object-cover"
            src={`https://www.themoviedb.org/t/p/w300${series.poster_path}`}
            alt={series.name}
          />
        ) : (
          <div className="bg-primary flex items-center justify-center w-66.5 h-100 rounded-lg">
            <BiSolidImageAlt size={50} />
          </div>
        )}
        <div className="flex flex-col justify-center xl:items-start xl:text-left items-center gap-5">
          <h1 className="text-4xl font-bold">{series.name}</h1>
          <div className="flex gap-5">
            <div className="flex text-text items-center gap-1">
              <FaStar />
              <span>{series.vote_average.toFixed(1)} </span>
            </div>
            <span className="text-text">
              {series.number_of_seasons}{" "}
              {series.number_of_seasons == 1 ? "season" : "seasons"}
            </span>
            <span className="text-text">{series.first_air_date}</span>
          </div>
          <div className="flex gap-5 text-text items-center">
            {series.genres.map((genre) => (
              <Link
                className="xl:hover:text-primary"
                href={`/genre/${genre.id}`}
                key={genre.id}
              >
                {genre.name}
              </Link>
            ))}
          </div>
          {series.tagline && (
            <div className="flex flex-col gap-2 ">
              <span className="text-text">Tagline:</span>
              <span className="text-lg font-medium">{series.tagline}</span>
            </div>
          )}
          {series.status && (
            <div className="flex gap-1">
              <span className="text-text">Status:</span>
              <span>{series.status}</span>
            </div>
          )}
        </div>
      </div>
      {series.overview && (
        <p className="text-xl font-medium">{series.overview}</p>
      )}
    </Container>
  );
};
