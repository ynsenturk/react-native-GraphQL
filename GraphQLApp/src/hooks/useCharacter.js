import {useQuery, gql} from '@apollo/client';

const GET_CHARACTER = gql`
  query getCharacter($id: ID!) {
    character(id: $id) {
      name
      id
      image
      gender
      species
      # status
      episode {
        name
        episode
      }
    }
  }
`;

export const useCharacter = id => {
  const {data, error, loading} = useQuery(GET_CHARACTER, {
    variables: {id},
  });
  console.log('data: ', data);
  return {
    data,
    error,
    loading,
  };
};
