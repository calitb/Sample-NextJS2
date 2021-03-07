import { GetServerSideProps } from 'next';
import { MoviesView } from '../contentful/mappers/MoviesMapper';
import { getMovies } from '../contentful/api';

interface Props {
  movies: MoviesView[];
}

export default function Movie({ movies }: Props) {
  return (
    <div className="flex flex-col justify-center">
      {movies.map((movie) => (
        <div>
          <h2 className="text-xl font-semibold">{movie.titulo}</h2>
          <p>{movie.fecha}</p>
          <img src={movie.imagen} />
        </div>
      ))}
    </div>
  );
}

export const getServerSideProps: GetServerSideProps<Props> = async (context) => {
  const movies = await getMovies();

  return { props: { movies } };
};
