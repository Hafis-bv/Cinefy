import axios from "axios";

const API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY;
const BASE_URL = process.env.NEXT_PUBLIC_TMDB_BASE_URL;

export async function getMovieGenres() {
  try {
    const res = await axios.get(
      `${BASE_URL}/genre/movie/list?language=en&api_key=${API_KEY}`
    );
    return res.data;
  } catch (err) {
    console.log("Error fetching movie genres", err);
  }
}

export async function getMoviesByGenre(genreId: string) {
  try {
    const res = await axios.get(
      `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=${genreId}`
    );
    return res.data;
  } catch (err) {
    console.log("Error fetching movies by genre", err);
  }
}

export async function getTrendingMovies() {
  try {
    const res = await axios.get(
      `${BASE_URL}/trending/movie/week?language=en&api_key=${API_KEY}`
    );
    return res.data;
  } catch (err) {
    console.log("Error fetching trending movies", err);
  }
}

export async function getTrendingSeries() {
  try {
    const res = await axios.get(
      `${BASE_URL}/trending/tv/week?language=en&api_key=${API_KEY}`
    );
    return res.data;
  } catch (err) {
    console.log("Error fetching trending movies", err);
  }
}

export async function getUpcomingMovies() {
  try {
    const res = await axios.get(
      `${BASE_URL}/movie/upcoming?language=en-US&api_key=${API_KEY}`
    );
    return res.data;
  } catch (err) {
    console.log("Error fetching trending movies", err);
  }
}
