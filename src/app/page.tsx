import {
  getTrendingMovies,
  getTrendingSeries,
  getUpcomingMovies,
} from "@/utils/api";
import { Hero } from "@/widgets/Hero";
import { MovieSection } from "@/widgets/MovieSection";
import { error } from "console";

export default async function Home() {
  const trendingMoviesData = getTrendingMovies();
  const trendingSeriesData = getTrendingSeries();
  const upcomingMoviesData = getUpcomingMovies();

  const [trendingMovies, trendingSeries, upcomingMovies] = await Promise.all([
    trendingMoviesData,
    trendingSeriesData,
    upcomingMoviesData,
  ]);
  return (
    <>
      <Hero />
      <MovieSection
        title={"Trending Movies"}
        movies={trendingMovies.results ?? []}
      />
      <MovieSection
        title={"Trending Series"}
        movies={trendingSeries.results ?? []}
      />
      <MovieSection
        title={"Upcoming Movies"}
        movies={upcomingMovies.results ?? []}
      />
    </>
  );
}
