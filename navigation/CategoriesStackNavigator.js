import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CategoriesScreen from '../screens/CategoriesScreen';
import MoviesByCategoryScreen from '../screens/MoviesByCategoryScreen';
import MovieDetailsScreen from '../screens/MovieDetailsScreen';

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

export default CategoriesStackNavigator;
