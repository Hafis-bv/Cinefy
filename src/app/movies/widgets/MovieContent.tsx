import { Container } from "@/components/Container";
import { MovieDetails } from "@/types/movie";
import Link from "next/link";
import { FaStar } from "react-icons/fa";

interface MovieContentProps {
  movie: MovieDetails;
}

export const MovieContent = ({ movie }: MovieContentProps) => {
  return (
    <Container className="flex flex-col justify-center items-center gap-10 mb-20 text-center">
      <div className="flex flex-col lg:flex-row gap-12 items-center">
        <img
          className="rounded-xl h-100 object-cover"
          src={`https://www.themoviedb.org/t/p/w300${movie.poster_path}`}
          alt={movie.title}
        />
        <div className="flex flex-col justify-center items-center gap-5">
          <h1 className="text-4xl font-bold">{movie.title}</h1>
          <div className="flex gap-5">
            <div className="flex text-text items-center">
              <FaStar />
              <span>{movie.vote_average} </span>
            </div>
            <span className="text-text">{movie.runtime}m</span>
            <span className="text-text">{movie.release_date}</span>
          </div>
          <div className="flex gap-5 text-text items-center">
            {movie.genres.map((genre) => (
              <Link
                className="xl:hover:text-primary"
                href={`/genre/${genre.id}`}
                key={genre.id}
              >
                {genre.name}
              </Link>
            ))}
          </div>
          {movie.tagline && (
            <div className="flex flex-col gap-2 ">
              <span className="text-text">Tagline:</span>
              <span className="text-lg font-medium">{movie.tagline}</span>
            </div>
          )}
          {movie.status && (
            <div className="flex gap-1">
              <span className="text-text">Status:</span>
              <span>{movie.status}</span>
            </div>
          )}
        </div>
      </div>
      {movie.overview && (
        <p className="text-xl font-medium">{movie.overview}</p>
      )}
    </Container>
  );
};
