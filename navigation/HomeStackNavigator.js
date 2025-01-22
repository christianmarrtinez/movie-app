import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import MovieDetailsScreen from '../screens/MovieDetailsScreen';

const HomeStack = createNativeStackNavigator();

const HomeStackNavigator = () => (
  <HomeStack.Navigator>
    <HomeStack.Screen name="Home" component={HomeScreen} />
    <HomeStack.Screen 
      name="MovieDetails" 
      component={MovieDetailsScreen} 
      options={{ title: 'Movie Details' }} 
    />
  </HomeStack.Navigator>
);

export default HomeStackNavigator;
