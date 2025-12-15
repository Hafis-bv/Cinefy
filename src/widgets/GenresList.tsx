"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface GenresListProps {
  genres: {
    id: number;
    name: string;
  }[];
}

export const GenresList = ({ genres }: GenresListProps) => {
  const pathname = usePathname();
  console.log(pathname);
  return (
    <div className="flex flex-col gap-4">
      <h5 className="font-bold text-2xl">Genres</h5>
      <div className="flex flex-col gap-3">
        {genres.map((genre) => {
          const isActive = pathname === `/genre/${genre.id}`;
          return (
            <Link
              className={`text-lg text-gray-300 xl:hover:text-primary ${
                isActive ? "text-primary" : "text-gray-300"
              }`}
              key={genre.id}
              href={`/genre/${genre.id}`}
            >
              {genre.name}
            </Link>
          );
        })}
      </div>
    </div>
  );
};
