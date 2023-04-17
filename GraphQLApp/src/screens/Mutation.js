import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {gql, useMutation} from '@apollo/client';

const CREATE_PRODUCT = gql`
  mutation CreateProduct($name: String!, $quantityPerUnit: int!) {
    createProduct(record: {name: $name, quantityPerUnit: $quantityPerUnit}) {
      record {
        name
      }
    }
  }
`;

export const Mutation = () => {
  const [createProduct, {data, error, loading}] = useMutation(CREATE_PRODUCT, {
    variables: {
      name: 'Hotdog',
      quantityPerUnit: 4,
    },
  });

  console.log({data, loading, error});

  return (
    <View>
      <TouchableOpacity
        style={styles.searchButton}
        onPress={() => createProduct()}>
        <Text style={styles.searchText}>Create</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  searchButton: {
    marginTop: 10,
    backgroundColor: '#24a0ed',
    borderRadius: 30,
    width: 100,
    height: 35,
    paddingVertical: 8,
    alignItems: 'center',
  },
});
