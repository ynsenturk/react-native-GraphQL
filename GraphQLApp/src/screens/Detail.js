import React from 'react';
import {View, Text, StyleSheet, FlatList, Image} from 'react-native';
import {useCharacter} from '../hooks/useCharacter';

export const Detail = ({route}) => {
  const id = route.params.id;
  const {error, loading, data} = useCharacter(id);

  if (loading)
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );

  if (error)
    return (
      <View>
        <Text>Something went wrong</Text>
      </View>
    );

  console.log(error, loading, data);

  return (
    <View style={styles.container}>
      <Image
        style={styles.characterImage}
        source={{uri: data.character.image}}
      />
      <Text style={styles.name}>{data.character.name}</Text>
      <Text style={styles.gender}>{data.character.gender}</Text>
      <Text style={styles.species}>{data.character.species}</Text>
      <FlatList
        data={data.character.episode}
        renderItem={({item}) => {
          return (
            <Text style={styles.episode}>
              {item.name} - {item.episode}
            </Text>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 200,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  gender: {
    fontSize: 14,
  },
  species: {
    fontSize: 14,
  },
  episode: {
    marginVertical: 5,
    fontStyle: 'italic',
  },
  characterImage: {
    width: 300,
    height: 300,
    borderWidth: 0.2,
    borderColor: 'gray',
    borderRadius: 10,
    marginVertical: 10,
  },
});
