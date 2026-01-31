"use client";

import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import { FaSearchengin } from "react-icons/fa";

export const SearchBar = () => {
  const [value, setValue] = useState("");
  const router = useRouter();

  function handleSearch(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!value || value.length <= 3) {
      return alert("Please enter a search query");
    }
    router.push(`/search/${value}`);
    setValue("");
  }

  return (
    <form className="w-full relative" onSubmit={handleSearch}>
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="p-3 pr-12 w-full rounded-2xl outline-none bg-[#363636]"
        placeholder="Search..."
        type="text"
      />
      <button className="absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer">
        <FaSearchengin
          className="hover:text-primary transition duration-300"
          size={22}
        />
      </button>
    </form>
  );
};
