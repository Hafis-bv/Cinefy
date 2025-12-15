import Link from "next/link";
import { GenresList } from "./GenresList";
import { getMovieGenres } from "@/utils/api";
import { SidebarSocial } from "./SidebarSocial";

export const Sidebar = async () => {
  const { genres } = await getMovieGenres();
  return (
    <div className="flex flex-col gap-10 justify-between h-screen border-r border-gray-700 py-12 px-16 w-1/5">
      <Link className="font-bold text-5xl" href="/">
        Cin<span className="text-primary">efy</span>
      </Link>
      <form className="w-full">
        <input
          className="p-3 pr-12 w-full rounded-2xl outline-none bg-[#363636]"
          placeholder="Search..."
          type="text"
        />
      </form>
      <GenresList genres={genres} />
      <SidebarSocial />
      <p className="text-center">&copy; Copyright 2025</p>
    </div>
  );
};
