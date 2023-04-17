import React from 'react';
import {TouchableOpacity} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {Characters, Detail, Search, Mutation} from '../screens';

const Stack = createStackNavigator();

export const Route = () => {
  const navigation = useNavigation();
  const LogoTitle = ({name, color, size, onPress}) => {
    return (
      <TouchableOpacity onPress={onPress}>
        <Icon
          style={{marginHorizontal: 20}}
          name={name}
          size={size}
          color={color}
        />
      </TouchableOpacity>
    );
  };

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Characters"
        component={Characters}
        options={{
          headerLeft: () => {
            return (
              <LogoTitle
                name="plus"
                color="gray"
                size={22}
                onPress={() => navigation.navigate('Mutation')}
              />
            );
          },
          headerRight: () => {
            return (
              <LogoTitle
                name="search"
                color="gray"
                size={22}
                onPress={() => navigation.navigate('Search')}
              />
            );
          },
        }}
      />
      <Stack.Screen name="Detail" component={Detail} />
      <Stack.Screen name="Search" component={Search} />
      <Stack.Screen name="Mutation" component={Mutation} />
    </Stack.Navigator>
  );
};
