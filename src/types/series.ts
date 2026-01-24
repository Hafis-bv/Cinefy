import { Cast, Genre } from "./movie";

export interface Series {
  adult: boolean;
  backdrop_path: string;
  first_air_date: string;
  genre_ids: number[];
  id: number;
  media_type: string;
  name: string;
  origin_country: string[];
  original_language: string;
  originale_name: string;
  overview: string;
  popularity: number;
  poster_path: string;
  vote_average: number;
  vote_count: number;
}

export interface CreatedBy {
  id: number;
  credit_id: string;
  name: string;
  original_name: string;
  gender: number;
  profile_path: string | null;
}

export interface Episode {
  id: number;
  name: string;
  overview: string;
  air_date: string;
  episode_number: number;
  season_number: number;
  runtime: number;
  still_path: string | null;
  vote_average: number;
  vote_count: number;
  episode_type: string;
  production_code: string;
  show_id: number;
}

export interface ProductionCompany {
  id: number;
  name: string;
  logo_path: string | null;
  origin_country: string;
}

export interface ProductionCountry {
  iso_3166_1: string;
  name: string;
}

export interface Season {
  id: number;
  name: string;
  overview: string;
  air_date: string;
  episode_count: number;
  poster_path: string | null;
  season_number: number;
}

export interface SpokenLanguage {
  english_name: string;
  iso_639_1: string;
  name: string;
}

export interface SeriesDetails {
  adult: boolean;
  backdrop_path: string | null;
  created_by: CreatedBy[];

  credits: { cast: Cast[] };

  episode_run_time: number[];
  first_air_date: string;
  genres: Genre[];

  homepage: string | null;
  id: number;
  in_production: boolean;

  languages: string[];
  last_air_date: string;

  last_episode_to_air: Episode;
  next_episode_to_air: Episode | null;

  name: string;
  number_of_episodes: number;
  number_of_seasons: number;

  origin_country: string[];
  original_language: string;
  original_name: string;

  overview: string;
  popularity: number;

  poster_path: string | null;

  production_companies: ProductionCompany[];
  production_countries: ProductionCountry[];

  seasons: Season[];
  spoken_languages: SpokenLanguage[];

  status: string;
  tagline: string;
  type: string;

  vote_average: number;
  vote_count: number;
}
