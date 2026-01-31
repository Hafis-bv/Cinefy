import TmdbApi from "@/utils/api";
import { PersonDetails } from "../widgets/PersonDetails";
import { Actor, MovieDetails as MovieDetailsType } from "@/types/movie";
import { OtherMovies } from "../widgets/OtherMovies";
import { notFound } from "next/navigation";
import { Metadata } from "next";

interface PersonDetailsProps {
  params: Promise<{ personId: string }>;
}

export async function generateMetadata({
  params,
}: PersonDetailsProps): Promise<Metadata> {
  const { personId } = await params;
  const person: Actor = await TmdbApi.getPersonDetails(personId);

  if (!person) {
    return { title: "Actor not found" };
  }

  return { title: person.name, description: person.biography };
}

export default async function Person({ params }: PersonDetailsProps) {
  const { personId } = await params;
  const person: Actor = await TmdbApi.getPersonDetails(personId);
  if (!person) {
    return notFound();
  }
  const movieCredits = await TmdbApi.getPersonMovieCredits(personId);
  return (
    <>
      <PersonDetails person={person} />
      <OtherMovies gender={person.gender} actorCast={movieCredits.cast ?? []} />
    </>
  );
}
