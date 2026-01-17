"use client";

import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import { Cast } from "@/types/movie";
import Link from "next/link";
import { useState } from "react";
import { BiSolidImageAlt } from "react-icons/bi";

interface ActorsListProps {
  actors: Cast[];
}

export const ActorsList = ({ actors }: ActorsListProps) => {
  const [showMore, setShowMore] = useState(12);

  function handleShowMore() {
    setShowMore(showMore + 6);
  }
  return (
    <div>
      <h1 className="text-center font-bold mb-8 text-5xl">Actors</h1>
      <Container className="flex flex-wrap gap-4 items-center justify-center">
        {actors.slice(0, showMore).map((actor) => (
          <Link href={`/person/${actor.id}`} key={actor.id} className="w-25">
            {actor.profile_path ? (
              <img
                className="rounded-lg"
                src={`https://www.themoviedb.org/t/p/w300${actor.profile_path}`}
                alt={actor.name}
              />
            ) : (
              <div className="bg-primary flex items-center justify-center w-25 h-37.5 rounded-lg">
                <BiSolidImageAlt size={50} />
              </div>
            )}
            <h1 className="font-semibold text-md w-full whitespace-nowrap text-ellipsis overflow-hidden mt-2">
              {actor.name}
            </h1>
          </Link>
        ))}
      </Container>

      {actors.length > 6 && (
        <div className="flex justify-center my-10">
          {showMore < actors.length ? (
            <Button onClick={() => setShowMore(showMore + 6)}>Show More</Button>
          ) : (
            <div>
              {actors.length > 6 && actors.length < 12 ? (
                <div></div>
              ) : (
                <Button onClick={() => setShowMore(12)}>Show Less</Button>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
};
