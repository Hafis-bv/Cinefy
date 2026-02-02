"use client";

import { useIsMobile } from "@/hooks/useIsMobile";
import { useRouter } from "next/navigation";
import {
  ChangeEvent,
  Dispatch,
  FormEvent,
  SetStateAction,
  useState,
} from "react";
import { FaSearchengin } from "react-icons/fa";

interface SearchBarProps {
  setOpen: Dispatch<SetStateAction<boolean>>;
}

export const SearchBar = ({ setOpen = () => null }: SearchBarProps) => {
  const [value, setValue] = useState("");
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();
  const isMobile = useIsMobile();

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setValue(e.target.value);
    setError(null);
  }

  function handleSearch(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!value || value.length <= 3) {
      return setError("Please enter a search query");
    }

    if (isMobile) {
      setOpen(false);
    }

    router.push(`/search/${value}`);
    setValue("");
  }

  return (
    <form className="w-full max-w-[362px] relative" onSubmit={handleSearch}>
      <input
        value={value}
        onChange={handleChange}
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
      {error && (
        <p className="text-red-500 text-sm mt-2 absolute left-1/2 -translate-x-1/2 -bottom-7">
          {error}
        </p>
      )}
    </form>
  );
};
