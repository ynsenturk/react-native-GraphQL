import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';

const Card = ({navigation, item}) => {
  console.log(item);
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => navigation.navigate('Detail', {id: item.id})}>
        <Image style={styles.image} source={{uri: item.image}}></Image>
        <Text style={styles.name}>{item.name}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 15,
  },
  name: {
    fontSize: 14,
    fontWeight: '500',
  },
  image: {
    width: 150,
    height: 150,
    borderWidth: 0.2,
    borderColor: 'gray',
    borderRadius: 100,
    marginBottom: 10,
  },
});

export default Card;
