import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import Card from '../components/Card';
import {useCharacters} from '../hooks/useCharacters';

export const Characters = ({navigation}) => {
  const {error, loading, data} = useCharacters();

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

  return (
    <View style={styles.container}>
      <FlatList
        numColumns={2}
        data={data.characters.results}
        renderItem={({item}) => <Card navigation={navigation} item={item} />}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
