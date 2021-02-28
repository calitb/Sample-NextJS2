import { GetServerSideProps } from 'next';
import styles from '../styles/Home.module.css';

interface Props {
  msg: string;
}

export default function Movie(props: Props) {
  return (
    <div className={styles.container}>
      <span className="title">{props.msg} </span>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps<Props> = async (context) => {
  const msg = 'Hello movies';

  return { props: { msg } };
};
