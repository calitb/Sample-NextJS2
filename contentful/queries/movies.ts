import { gql } from 'apollo-boost';

export default gql`
  query Movies {
    movies: movieCollection {
      items {
        titulo
        fecha
        imagen {
          url
        }
        actors: actorCollection {
          items {
            name
          }
        }
      }
    }
  }
`;
