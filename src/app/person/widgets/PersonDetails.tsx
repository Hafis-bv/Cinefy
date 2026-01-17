import { Container } from "@/components/Container";
import { Actor } from "@/types/movie";
import getAge from "@/utils/getAge";
import getAgeOfDeath from "@/utils/getAgeOfDeath";
import { BiSolidImageAlt } from "react-icons/bi";

interface ActorsListProps {
  person: Actor;
}

export const PersonDetails = ({ person }: ActorsListProps) => {
  const isAlive = person?.birthday && !person?.deathday;
  return (
    <Container className="flex flex-col justify-center items-center gap-10 mb-20 text-center">
      <div className="flex flex-col lg:flex-row gap-12 items-center">
        {person.profile_path ? (
          <img
            className="rounded-xl h-100 object-cover"
            src={`https://www.themoviedb.org/t/p/w300${person.profile_path}`}
            alt={person.name}
          />
        ) : (
          <div className="bg-primary flex items-center justify-center w-65 h-100 rounded-lg">
            <BiSolidImageAlt size={50} />
          </div>
        )}

        <div className="flex flex-col justify-center xl:items-start xl:text-left items-center gap-5">
          <h1 className="text-4xl font-bold">{person.name}</h1>
          <div className="flex flex-col gap-2 ">
            <span className="text-text">Known for:</span>
            {person.known_for_department ? (
              <span className="text-lg font-medium">
                {person.known_for_department}
              </span>
            ) : (
              <span className="text-lg font-medium">Unknown</span>
            )}
          </div>
          <div className="flex flex-col gap-2 ">
            <span className="text-text">Date of birth:</span>
            {person.birthday ? (
              <span className="text-lg font-medium">
                {person.birthday} {isAlive && `(${getAge(person.birthday)})`}
              </span>
            ) : (
              <span className="text-lg font-medium">Unknown</span>
            )}
          </div>
          {person.deathday && (
            <div className="flex flex-col gap-2 ">
              <span className="text-text">Date of death:</span>
              <span className="text-lg font-medium">
                {person.deathday}{" "}
                {`(${getAgeOfDeath(person.birthday, person.deathday)})`}{" "}
              </span>
            </div>
          )}
          <div className="flex flex-col gap-2 ">
            <span className="text-text">Place of born:</span>
            {person.place_of_birth ? (
              <span className="text-lg font-medium">
                {person.place_of_birth}
              </span>
            ) : (
              <span className="text-lg font-medium">Unknown</span>
            )}
          </div>
        </div>
      </div>
      <p className="text-xl font-medium">{person.biography}</p>
    </Container>
  );
};
