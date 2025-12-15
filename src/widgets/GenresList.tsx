import Link from "next/link";

interface GenresListProps {
  genres: {
    id: number;
    name: string;
  }[];
}

export const GenresList = ({ genres }: GenresListProps) => {
  return (
    <div className="flex flex-col gap-4">
      <h5 className="font-bold text-2xl">Genres</h5>
      <div className="flex flex-col gap-3">
        {genres.map((genre) => (
          <Link
            className="text-lg text-gray-300 xl:hover:text-primary"
            key={genre.id}
            href={`/genre/${genre.id}`}
          >
            {genre.name}
          </Link>
        ))}
      </div>
    </div>
  );
};
