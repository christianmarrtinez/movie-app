import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, SectionList } from 'react-native';
import { getMoviesByCategory } from '../services/api'; // Ensure this function is implemented in your API file

const MoviesByCategoryScreen = ({ route, navigation }) => {
  const { categoryId, categoryName } = route.params;
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const data = await getMoviesByCategory(categoryId); // Fetch movies for the selected category
      const sortedMovies = data.results.sort((a, b) => a.title.localeCompare(b.title));
      setMovies(sortedMovies);
    };

    fetchMovies();
  }, [categoryId]);

  const handleMoviePress = (movie) => {
    navigation.navigate('MovieDetails', { movieId: movie.id });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{categoryName}</Text>
      <FlatList
        data={movies}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => handleMoviePress(item)} style={styles.movieButton}>
            <Text style={styles.movieText}>{item.title}</Text>
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
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  movieButton: {
    padding: 15,
    marginVertical: 5,
    backgroundColor: '#f4a261',
    borderRadius: 8,
  },
  movieText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default MoviesByCategoryScreen;
