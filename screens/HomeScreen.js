import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
  const navigation = useNavigation();
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    // Fetch movies from API (You can replace this with actual API calls)
    setMovies([
      { id: '1', title: 'Movie 1', year: '2025', poster: 'https://example.com/poster1.jpg' },
      { id: '2', title: 'Movie 2', year: '2024', poster: 'https://example.com/poster2.jpg' },
      // Add more mock data here
    ]);
  }, []);

  const navigateToDetails = (movie) => {
    navigation.navigate('MovieDetails', { movie });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Most Recent Movies</Text>
      <FlatList
        data={movies}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigateToDetails(item)}>
            <View style={styles.movieContainer}>
              <Text style={styles.movieTitle}>{item.title}</Text>
              <Text style={styles.movieYear}>{item.year}</Text>
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
    padding: 10,
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  movieContainer: {
    marginVertical: 10,
  },
  movieTitle: {
    fontSize: 18,
  },
  movieYear: {
    fontSize: 14,
    color: 'gray',
  },
});

export default HomeScreen;
