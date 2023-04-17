import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
} from '@apollo/client';
import {Route} from './src/navigation/Route';

// //Declare your endpoints
// const endpoint1 = new HttpLink({
//   uri: 'https://rickandmortyapi.com/graphql',
//   cache: new InMemoryCache(),
// });
// const endpoint2 = new HttpLink({
//   uri: 'https://graphql-compose.herokuapp.com/northwind/',
//   cache: new InMemoryCache(),
// });

// //pass them to apollo-client config
// const client = new ApolloClient({
//   link: ApolloLink.split(
//     operation => operation.getContext().clientName === 'endpoint2',
//     endpoint2, //if above
//     endpoint1,
//   ),
// });

// Initialize Apollo Client
const client = new ApolloClient({
  uri: 'https://rickandmortyapi.com/graphql',
  cache: new InMemoryCache(),
});

const App = () => (
  <NavigationContainer>
    <ApolloProvider client={client}>
      <Route />
    </ApolloProvider>
  </NavigationContainer>
);

export default App;
