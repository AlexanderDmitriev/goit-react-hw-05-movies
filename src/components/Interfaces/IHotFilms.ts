export interface IHotFilms {
  results: Array<{
    id: string;
    title: string;
    name?: string;
  }>;
}
