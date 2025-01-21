import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import SearchScreen from '../screens/SearchScreen';
import CategoriesScreen from '../screens/CategoriesScreen';
import MovieDetailsScreen from '../screens/MovieDetailsScreen';

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Search" component={SearchScreen} />
      <Stack.Screen name="Category" component={CategoriesScreen} />
      <Stack.Screen name="MovieDetails" component={MovieDetailsScreen} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
