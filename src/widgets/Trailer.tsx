import { Container } from "@/components/Container";
import { Video } from "@/types/movie";
import ReactPlayer from "react-player";

interface TrailerProps {
  videos: Video[];
}

export const Trailer = ({ videos }: TrailerProps) => {
  const trailers = videos.filter((video) => video.type == "Trailer") || [];
  return (
    <div className="my-20 mx-3 relative z-20">
      <Container className="flex flex-col px-2">
        {!trailers.length ? (
          <h1 className="text-center text-gray-400 text-4xl">
            No trailers available
          </h1>
        ) : (
          <div className="flex flex-col gap-6">
            {trailers.map((trailer) => (
              <ReactPlayer
                controls
                width={"100%"}
                height={"400px"}
                key={trailer.id}
                src={`https://www.youtube.com/watch?v=${trailer.key}`}
              />
            ))}
          </div>
        )}
      </Container>
    </div>
  );
};
