import TmdbApi from "@/utils/api";
import { Hero } from "@/widgets/Hero";
import { MovieSection } from "@/widgets/MovieSection";

export default async function Home() {
  const trendingMoviesData = TmdbApi.getTrendingMovies();
  const trendingSeriesData = TmdbApi.getTrendingSeries();
  const upcomingMoviesData = TmdbApi.getUpcomingMovies();

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
