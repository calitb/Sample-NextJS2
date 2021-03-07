import MapperBase from './base';
import { Movies } from '../types/Movies';

export interface MoviesView {
  titulo: string;
  fecha: string;
  imagen: string;
  actores: Array<{
    nombre: string;
  }>;
}

export default class MoviesMapper extends MapperBase<Movies, MoviesView[]> {
  public map(source: Movies): MoviesView[] {
    const items = source.movies.items;

    const moviesView: MoviesView[] = items.map((item) => {
      return {
        titulo: item.titulo,
        fecha: item.fecha,
        imagen: item.imagen.url,
        actores: item.actors.items.map((actor) => {
          return { nombre: actor.name };
        }),
      };
    });

    return moviesView;
  }
}
