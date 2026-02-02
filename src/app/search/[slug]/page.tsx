import { Movie } from "@/types/movie";
import { Series } from "@/types/series";
import { multiSearch } from "@/utils/multi-search";
import { MovieCard } from "@/widgets/MovieCard";
import { SeriesCard } from "@/widgets/SeriresCard";

interface SearchPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: SearchPageProps) {
  const { slug } = await params;
  return { title: slug };
}

export default async function SearchPage({ params }: SearchPageProps) {
  const { slug } = await params;
  const results = await multiSearch(slug);

  return (
    <div className="mx-3">
      <h1 className="text-center text-3xl md:text-5xl mt-10 font-semibold tracking-[1px]">
        Search results for{" "}
        <span className="text-primary">{decodeURIComponent(slug)}</span>
      </h1>
      {results.length ? (
        <div className="flex flex-wrap gap-5 mt-20 justify-center items-center">
          {results.map((result: Movie | Series) =>
            result.media_type === "movie" ? (
              <MovieCard key={result.id} movie={result as Movie} />
            ) : (
              <SeriesCard key={result.id} series={result as Series} />
            ),
          )}
        </div>
      ) : (
        <h1 className="text-3xl md:text-5xl font-medium text-center mt-20 md:mt-40">
          No results <span className="text-primary">found</span>
        </h1>
      )}
    </div>
  );
}
