import MoviesMapper, { MoviesView } from './mappers/MoviesMapper';

import { Movies } from './types/Movies';
import { contentfulGraphQlClient as client } from './client';
import moviesQuery from './queries/movies';

export const getMovies = async (): Promise<MoviesView[]> => {
  const { data } = await client.query<Movies>({
    query: moviesQuery,
  });

  return new MoviesMapper().map(data);
};
