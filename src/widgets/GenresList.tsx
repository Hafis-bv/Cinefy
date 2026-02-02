"use client";
import { Genre } from "@/types/movie";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Dispatch, SetStateAction } from "react";

interface GenresListProps {
  genres: Genre[];
  setOpen?: Dispatch<SetStateAction<boolean>>;
}

export const GenresList = ({
  genres,
  setOpen = () => null,
}: GenresListProps) => {
  const pathname = usePathname();
  return (
    <div className="flex flex-col gap-4">
      <h5 className="font-bold text-2xl">Genres</h5>
      <div className="flex xl:flex-col flex-wrap justify-center mx-4 xl:mx-0 gap-5 xl:gap-3 max-w-3xl">
        {genres.map((genre) => {
          const isActive = pathname === `/genre/${genre.id}`;
          return (
            <Link
              className={`text-lg  xl:hover:text-primary border border-primary rounded-3xl py-2 px-4 text-primary xl:border-none xl:text-gray-300 xl:p-0 xl:rounded-none ${
                isActive ? "!text-primary" : "text-gray-300"
              }`}
              key={genre.id}
              href={`/genre/${genre.id}`}
              onClick={() => setOpen(false)}
            >
              {genre.name}
            </Link>
          );
        })}
      </div>
    </div>
  );
};
