import axios from "axios";

const API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY;
const BASE_URL = process.env.NEXT_PUBLIC_TMDB_BASE_URL;

export async function multiSearch(query: string) {
  try {
    const res = await axios.get(
      `${BASE_URL}/search/multi?api_key=${API_KEY}&language=en-US&query=${query}`,
    );
    const filtered = res.data.results.filter(
      (item: any) => item.media_type !== "person",
    );
    return filtered;
  } catch (err) {
    console.log("Error in multi search", err);
  }
}
