import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

import HomeScreen from '../screens/HomeScreen';
import SearchScreen from '../screens/SearchScreen';
import MovieDetailsScreen from '../screens/MovieDetailsScreen';
import CategoriesScreen from '../screens/CategoriesScreen';
import MoviesByCategoryScreen from '../screens/MoviesByCategoryScreen'; 



const Tab = createBottomTabNavigator();


const SearchStack = createNativeStackNavigator();
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


const HomeStack = createNativeStackNavigator();
const HomeStackNavigator = () => (
  <HomeStack.Navigator>
    <HomeStack.Screen 
      name="Home" 
      component={HomeScreen} 
      options={{ title: 'Home' }} 
    />
    <HomeStack.Screen 
      name="MovieDetails" 
      component={MovieDetailsScreen} 
      options={{ title: 'Movie Details' }} 
    />
  </HomeStack.Navigator>
);


const CategoriesStack = createNativeStackNavigator();
const CategoriesStackNavigator = () => (
  <CategoriesStack.Navigator>
    <CategoriesStack.Screen 
      name="Categories" 
      component={CategoriesScreen} 
      options={{ title: 'Categories' }} 
    />
    <CategoriesStack.Screen 
      name="MoviesByCategory" 
      component={MoviesByCategoryScreen} 
      options={({ route }) => ({ title: route.params.categoryName })} 
    />
    <CategoriesStack.Screen 
      name="MovieDetails" 
      component={MovieDetailsScreen} 
      options={{ title: 'Movie Details' }} 
    />
  </CategoriesStack.Navigator>
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
      <Tab.Screen 
        name="Home" 
        component={HomeStackNavigator} 
        options={{ headerShown: false }} 
      />
      <Tab.Screen 
        name="Search" 
        component={SearchStackNavigator} 
        options={{ headerShown: false }} 
      />
      <Tab.Screen 
        name="Categories" 
        component={CategoriesStackNavigator} 
        options={{ headerShown: false }} 
      />
    </Tab.Navigator>
  </NavigationContainer>
);

export default TabNavigator;
