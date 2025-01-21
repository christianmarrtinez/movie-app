// navigation/TabNavigator.js

import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

import HomeScreen from '../screens/HomeScreen';
import SearchScreen from '../screens/SearchScreen';
import MovieDetailsScreen from '../screens/MovieDetailsScreen';
import CategoriesScreen from '../screens/CategoriesScreen';
import FavoritesScreen from '../screens/FavoritesScreen';

const Tab = createBottomTabNavigator();
const SearchStack = createNativeStackNavigator();

// Stack Navigator for Search and Movie Details
const SearchStackNavigator = () => (
  <SearchStack.Navigator>
    <SearchStack.Screen 
      name="Search" 
      component={SearchScreen} 
      options={{ title: 'Search Movies' }} 
    />
    <SearchStack.Screen 
      name="MovieDetails" 
      component={MovieDetailsScreen} 
      options={{ title: 'Movie Details' }} 
    />
  </SearchStack.Navigator>
);

const TabNavigator = () => (
  <NavigationContainer>
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = 'home';
          } else if (route.name === 'Search') {
            iconName = 'search';
          } else if (route.name === 'Categories') {
            iconName = 'list';
          } else if (route.name === 'Favorites') {
            iconName = 'heart';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#2a9d8f',
        tabBarInactiveTintColor: 'gray',
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Search" component={SearchStackNavigator} options={{ headerShown: false }} />
      <Tab.Screen name="Categories" component={CategoriesScreen} />
      <Tab.Screen name="Favorites" component={FavoritesScreen} />
    </Tab.Navigator>
  </NavigationContainer>
);

export default TabNavigator;
