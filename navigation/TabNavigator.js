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
  <SearchStack.Navigator
    screenOptions={{
      headerStyle: { backgroundColor: '#60d3e1' },
      headerTintColor: '#28353d',
      headerTitleStyle: { color: '#fff' },
      headerBackTitleVisible: true,
      headerBackTitleStyle: { color: '#28353d' },
      headerBackImage: () => (
        <Ionicons name="arrow-back" size={24} color="#60d3e1" style={{ marginLeft: 10 }} />
      ),
    }}
  >
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
  <HomeStack.Navigator
    screenOptions={{
      headerStyle: { backgroundColor: '#60d3e1' },
      headerTintColor: '#28353d',
      headerTitleStyle: { color: '#fff' },
      headerBackTitleVisible: true,
      headerBackTitleStyle: { color: '#28353d' },
      headerBackImage: () => (
        <Ionicons name="arrow-back" size={24} color="#60d3e1" style={{ marginLeft: 10 }} />
      ),
    }}
  >
    <HomeStack.Screen 
      name="Home" 
      component={HomeScreen} 
      options={{ title: 'Popular Movies This Month' }} 
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
  <CategoriesStack.Navigator
    screenOptions={{
      headerStyle: { backgroundColor: '#60d3e1' },
      headerTintColor: '#28353d',
      headerTitleStyle: { color: '#fff' },
      headerBackTitleVisible: true,
      headerBackTitleStyle: { color: '#28353d' },
      headerBackImage: () => (
        <Ionicons name="arrow-back" size={24} color="#60d3e1" style={{ marginLeft: 10 }} />
      ),
    }}
  >
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
          tabBarActiveTintColor: '#28353d',
          tabBarInactiveTintColor: 'white',
          tabBarStyle: {
            backgroundColor: '#60d3e1',
            borderTopWidth: 1, 
            borderTopColor: '#28353d',
          },
          tabBarItemStyle: {
            borderRightWidth: route.name !== 'Categories' ? 1 : 0, 
            borderRightColor: '#28353d',
          },
          tabBarLabelStyle: {
            fontSize: 12,
            fontWeight: 'bold',
            color: 'white',
          },
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
