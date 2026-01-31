"use client";

import Link from "next/link";
import { GenresList } from "./GenresList";
import { SidebarSocial } from "./SidebarSocial";
import { SearchBar } from "./SearchBar";
import { Genre } from "@/types/movie";
import { useIsMobile } from "@/hooks/useIsMobile";
import { useSidebar } from "@/hooks/useSidebar";
import { IoClose, IoMenu } from "react-icons/io5";
import clsx from "clsx";
import { useEffect } from "react";

interface SidebarClientProps {
  genres: Genre[];
}

export const SidebarClient = ({ genres }: SidebarClientProps) => {
  const isMobile = useIsMobile();
  const { open, toggle, close } = useSidebar();

  useEffect(() => {
    if (open && isMobile) {
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open, isMobile]);

  return (
    <>
      {/* TOP BAR*/}
      <div className="sticky top-0 z-50 w-full flex items-center bg-black border-b border-gray-700 p-4 justify-between xl:hidden">
        <Link className="font-bold text-3xl" href="/">
          Cin<span className="text-primary">efy</span>
        </Link>

        <button onClick={toggle} className="cursor-pointer">
          {open ? <IoClose size={35} /> : <IoMenu size={35} />}
        </button>
      </div>

      {/*MOBILE SIDEBAR*/}
      <div
        className={clsx(
          "fixed top-0 bottom-0 right-0 bg-black/90 z-49 w-full transition-all duration-300",
          open ? "left-0" : "-left-full",
        )}
      ></div>

      {/*DESKTOP SIDEBAR*/}
      <div className="hidden xl:flex flex-col gap-10 justify-between h-screen border-r border-gray-700 py-12 px-8 w-[22%]">
        <Link className="font-bold text-5xl" href="/">
          Cin<span className="text-primary">efy</span>
        </Link>
        <SearchBar />
        <GenresList genres={genres} />
        <SidebarSocial />
        <p className="text-center">&copy; Copyright 2025</p>
      </div>
    </>
  );
};
