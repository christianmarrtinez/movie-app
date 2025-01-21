// screens/MovieDetailsScreen.js

import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import { useRoute } from '@react-navigation/native';

const MovieDetailsScreen = () => {
  const route = useRoute();
  const { movie } = route.params; // Retrieve the movie details passed from the previous screen

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={{ uri: movie.Poster }} style={styles.poster} />
      <Text style={styles.title}>{movie.Title}</Text>
      <Text style={styles.details}>Year: {movie.Year}</Text>
      <Text style={styles.details}>Rated: {movie.Rated}</Text>
      <Text style={styles.details}>Released: {movie.Released}</Text>
      <Text style={styles.details}>Runtime: {movie.Runtime}</Text>
      <Text style={styles.details}>Genre: {movie.Genre}</Text>
      <Text style={styles.details}>Director: {movie.Director}</Text>
      <Text style={styles.details}>Writer: {movie.Writer}</Text>
      <Text style={styles.details}>Actors: {movie.Actors}</Text>
      <Text style={styles.plot}>{movie.Plot}</Text>
      <Text style={styles.details}>Language: {movie.Language}</Text>
      <Text style={styles.details}>Country: {movie.Country}</Text>
      <Text style={styles.details}>Awards: {movie.Awards}</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 15,
    alignItems: 'center',
  },
  poster: {
    width: 200,
    height: 300,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  details: {
    fontSize: 16,
    marginVertical: 5,
  },
  plot: {
    fontSize: 16,
    fontStyle: 'italic',
    marginVertical: 10,
    textAlign: 'center',
  },
});

export default MovieDetailsScreen;
