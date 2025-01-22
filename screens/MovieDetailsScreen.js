import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import { useRoute } from '@react-navigation/native';

const MovieDetailsScreen = () => {
  const route = useRoute();
  const { movie } = route.params; // Retrieve the movie details passed from the previous screen

  return (
    <ScrollView contentContainerStyle={styles.container}>
        <Image source={{ uri: `https://image.tmdb.org/t/p/w500${movie.poster_path}` }} style={styles.poster} />
        <Text style={styles.title}>{movie.title}</Text>
        <Text style={styles.details}>Release Date: {movie.release_date}</Text>
        <Text style={styles.details}>Rating: {movie.vote_average}</Text>
        <Text style={styles.plot}>{movie.overview}</Text>
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
