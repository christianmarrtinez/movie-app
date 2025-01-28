import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';
import { getMovieCategories, fetchMoviesByCategory } from '../services/api';

const CategoriesScreen = ({ navigation }) => {
  const [categories, setCategories] = useState([]);
  const [categoryImages, setCategoryImages] = useState({});
  const [usedMovieIds, setUsedMovieIds] = useState(new Set());

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const data = await getMovieCategories();
        if (data && data.genres) {
          setCategories(data.genres);

 
          const images = {};
          for (const category of data.genres) {
            const moviesData = await fetchMoviesByCategory(category.id);

            if (moviesData && moviesData.results) {
              const filteredMovies = moviesData.results.filter(
                (movie) => !usedMovieIds.has(movie.id)
              );

              if (filteredMovies.length > 0) {
                const randomMovie = filteredMovies[Math.floor(Math.random() * filteredMovies.length)];
                images[category.id] = randomMovie.poster_path
                  ? `https://image.tmdb.org/t/p/w500${randomMovie.poster_path}`
                  : 'https://via.placeholder.com/150x225?text=No+Image';


                setUsedMovieIds((prev) => new Set([...prev, randomMovie.id]));
              }
            }
          }
          setCategoryImages(images);
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
            <View style={styles.row}>
              <Image
                source={{
                  uri: categoryImages[item.id] || 'https://via.placeholder.com/150x225?text=No+Image',
                }}
                style={styles.image}
              />
              <Text style={styles.categoryText}>{item.name}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#28353d',
    padding: 10,
  },
  categoryButton: {
    padding: 15,
    marginVertical: 5,
    backgroundColor: '#60d3e1',
    borderRadius: 8,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: 50,
    height: 75,
    marginRight: 15,
    borderRadius: 4,
  },
  categoryText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default CategoriesScreen;
