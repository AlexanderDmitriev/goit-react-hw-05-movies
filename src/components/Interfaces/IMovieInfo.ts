export interface IMovieInfo {
    poster_path: string;
    title: string;
    release_date: string;
    vote_average: string;
    overview: string;
    genres: Array<{ id: string; name: string }>;
  }