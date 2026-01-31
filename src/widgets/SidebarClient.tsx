"use client";

import Link from "next/link";
import { GenresList } from "./GenresList";
import { SidebarSocial } from "./SidebarSocial";
import { SearchBar } from "./SearchBar";
import { Genre } from "@/types/movie";
import { useState } from "react";

interface SidebarClientProps {
  genres: Genre[];
}

export const SidebarClient = ({ genres }: SidebarClientProps) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="flex flex-col gap-10 justify-between h-screen border-r border-gray-700 py-12 px-8 w-[22%]">
      <Link className="font-bold text-5xl" href="/">
        Cin<span className="text-primary">efy</span>
      </Link>
      <SearchBar />
      <GenresList genres={genres} />
      <SidebarSocial />
      <p className="text-center">&copy; Copyright 2025</p>
    </div>
  );
};
