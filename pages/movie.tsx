import { GetServerSideProps } from 'next';
import { MoviesView } from '../contentful/mappers/MoviesMapper';
import { getMovies } from '../contentful/api';
import styles from '../styles/Home.module.css';

interface Props {
  movies: MoviesView[];
}

export default function Movie(props: Props) {
  return (
    <div className={styles.container}>
      <span className="title">{JSON.stringify(props.movies)} </span>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps<Props> = async (context) => {
  const movies = await getMovies();

  return { props: { movies } };
};
