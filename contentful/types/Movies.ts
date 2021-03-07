/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: Movies
// ====================================================

export interface Movies_movies_items_imagen {
  url: string | null;
}

export interface Movies_movies_items_actors_items {
  name: string | null;
}

export interface Movies_movies_items_actors {
  items: (Movies_movies_items_actors_items | null)[];
}

export interface Movies_movies_items {
  titulo: string | null;
  fecha: any | null;
  imagen: Movies_movies_items_imagen | null;
  actors: Movies_movies_items_actors | null;
}

export interface Movies_movies {
  items: (Movies_movies_items | null)[];
}

export interface Movies {
  movies: Movies_movies | null;
}
