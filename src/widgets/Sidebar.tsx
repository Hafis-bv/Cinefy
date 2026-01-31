import TmdbApi from "@/utils/api";
import { SidebarClient } from "./SidebarClient";

export const Sidebar = async () => {
  const { genres } = await TmdbApi.getMovieGenres();
  return <SidebarClient genres={genres} />;
};
