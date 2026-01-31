import axios, { AxiosInstance } from "axios";

class TMDBApi {
  private client: AxiosInstance;

  constructor() {
    const apiKey = process.env.NEXT_PUBLIC_TMDB_API_KEY;
    const baseURL = process.env.NEXT_PUBLIC_TMDB_BASE_URL;

    if (!apiKey || !baseURL) {
      console.warn(
        "TMDB API credentials are missing in environment variables.",
      );
    }

    this.client = axios.create({
      baseURL,
      params: {
        api_key: apiKey,
        language: "en-US",
      },
    });
  }

  // --- Жанры и Списки ---

  async getMovieGenres() {
    try {
      const res = await this.client.get("/genre/movie/list");
      return res.data;
    } catch (err) {
      console.error("Error fetching movie genres", err);
    }
  }

  async getMoviesByGenre(id: string) {
    try {
      const res = await this.client.get("/discover/movie", {
        params: { with_genres: id },
      });
      return res.data;
    } catch (err) {
      console.error("Error fetching movies by genre", err);
    }
  }

  // --- Тренды и Новинки ---

  async getTrendingMovies() {
    try {
      const res = await this.client.get("/trending/movie/week");
      return res.data;
    } catch (err) {
      console.error("Error fetching trending movies", err);
    }
  }

  async getTrendingSeries() {
    try {
      const res = await this.client.get("/trending/tv/week");
      return res.data;
    } catch (err) {
      console.error("Error fetching trending series", err);
    }
  }

  async getUpcomingMovies() {
    try {
      const res = await this.client.get("/movie/upcoming");
      return res.data;
    } catch (err) {
      console.error("Error fetching upcoming movies", err);
    }
  }

  // --- Детали Фильмов ---

  async getMovieDetails(id: string) {
    try {
      const res = await this.client.get(`/movie/${id}`, {
        params: { append_to_response: "credits" },
      });
      return res.data;
    } catch (err) {
      console.error("Error fetching movie details", err);
    }
  }

  async getMovieVideo(id: string) {
    try {
      const res = await this.client.get(`/movie/${id}/videos`);
      return res.data;
    } catch (err) {
      console.error("Error fetching movie video", err);
    }
  }

  async getSimilarMovies(id: string) {
    try {
      const res = await this.client.get(`/movie/${id}/recommendations`);
      return res.data;
    } catch (err) {
      console.error("Error fetching similar movies", err);
    }
  }

  // --- Детали Сериалов ---

  async getSeriesDetails(id: string) {
    try {
      const res = await this.client.get(`/tv/${id}`, {
        params: { append_to_response: "credits" },
      });
      return res.data;
    } catch (err) {
      console.error("Error fetching series details", err);
    }
  }

  async getSeriesVideo(id: string) {
    try {
      const res = await this.client.get(`/tv/${id}/videos`);
      return res.data;
    } catch (err) {
      console.error("Error fetching series video", err);
    }
  }

  async getSimilarSeries(id: string) {
    try {
      const res = await this.client.get(`/tv/${id}/recommendations`);
      return res.data;
    } catch (err) {
      console.error("Error fetching similar series", err);
    }
  }

  // --- Актеры и Персоны ---

  async getPersonDetails(id: string) {
    try {
      const res = await this.client.get(`/person/${id}`);
      return res.data;
    } catch (err) {
      console.error("Error fetching person details", err);
    }
  }

  async getPersonMovieCredits(id: string) {
    try {
      const res = await this.client.get(`/person/${id}/movie_credits`);
      return res.data;
    } catch (err) {
      console.error("Error fetching person movie credits", err);
    }
  }
}

const TmdbApi = new TMDBApi();
export default TmdbApi;
