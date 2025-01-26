import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { getMovieCategories } from '../services/api';

const CategoriesScreen = ({ navigation }) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const data = await getMovieCategories(); 
        console.log('Fetched Categories:', data);
        if (data && data.genres) {
          setCategories(data.genres); 
        } else {
          console.error('Error: No genres found in API response.');
        }
      } catch (error) {
        console.error('Error fetching categories:', error); 
      }
    };

    fetchCategories();
  }, []);

  const handleCategoryPress = (category) => {
    navigation.navigate('MoviesByCategory', { categoryId: category.id, categoryName: category.name });
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={categories}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => handleCategoryPress(item)} style={styles.categoryButton}>
            <Text style={styles.categoryText}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10,
  },
  categoryButton: {
    padding: 15,
    marginVertical: 5,
    backgroundColor: '#2a9d8f',
    borderRadius: 8,
  },
  categoryText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default CategoriesScreen;
