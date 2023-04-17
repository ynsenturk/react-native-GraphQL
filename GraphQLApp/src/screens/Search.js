import React, {useState} from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  Text,
  FlatList,
} from 'react-native';
import {gql, useLazyQuery} from '@apollo/client';

const GET_CHARACTER_LOCATIONS = gql`
  query getCharacterLocations($name: String!) {
    characters(filter: {name: $name}) {
      results {
        location {
          name
        }
        image
      }
    }
  }
`;

export const Search = () => {
  const [name, setName] = useState('');
  const [getLocations, {loading, error, data, called}] = useLazyQuery(
    GET_CHARACTER_LOCATIONS,
    {
      variables: {
        name,
      },
    },
  );

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <TextInput
          placeholder="Character Name"
          style={styles.searchInput}
          value={name}
          onChangeText={value => setName(value)}
        />
        <TouchableOpacity
          style={styles.searchButton}
          onPress={() => getLocations()}>
          <Text style={styles.searchText}>Search</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.resultContainer}>
        {loading && <Text>Loading...</Text>}
        {error && <Text>Something when wrong</Text>}
        {data && (
          <FlatList
            data={data.characters.results}
            renderItem={({item}) => {
              return (
                <View style={styles.data}>
                  <Image
                    style={styles.characterImage}
                    source={{uri: item.image}}
                  />
                  <Text style={styles.locationName}>{item.location.name}</Text>
                </View>
              );
            }}
          />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchContainer: {
    flexDirection: 'row',
    marginTop: 10,
  },
  resultContainer: {
    marginTop: 20,
    flexDirection: 'row',
    paddingHorizontal: 20,
  },
  searchInput: {
    flexDirection: 'row',
    marginTop: 10,
    borderWidth: 0.5,
    borderColor: 'gray',
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    borderRadius: 30,
    width: 280,
    height: 35,
    marginHorizontal: 5,
  },
  searchButton: {
    marginTop: 10,
    backgroundColor: '#24a0ed',
    borderRadius: 30,
    width: 100,
    height: 35,
    paddingVertical: 8,
    alignItems: 'center',
  },
  searchText: {
    color: '#fff',
  },
  characterImage: {
    width: 300,
    height: 300,
    borderWidth: 0.2,
    borderColor: 'gray',
    borderRadius: 10,
    marginVertical: 10,
  },
  locationName: {
    fontSize: 14,
    marginVertical: 5,
    fontStyle: 'italic',
  },
});
