import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import { useRoute } from '@react-navigation/native';

const MovieDetailsScreen = () => {
  const route = useRoute();
  const { movie } = route.params; 

  return (
    <View style={styles.screen}>
      <ScrollView contentContainerStyle={styles.container}>
          <Image source={{ uri: `https://image.tmdb.org/t/p/w500${movie.poster_path}` }} style={styles.poster} />
          <Text style={styles.title}>{movie.title}</Text>
          <Text style={styles.details}>Release Date: {movie.release_date}</Text>
          <Text style={styles.details}>Rating: {movie.vote_average}</Text>
          <Text style={styles.plot}>{movie.overview}</Text>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#28353d',
  },
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
    color: 'white',
  },
  details: {
    fontSize: 16,
    marginVertical: 5,
    color: '#60d3e1',
  },
  plot: {
    fontSize: 16,
    fontStyle: 'italic',
    marginVertical: 10,
    textAlign: 'center',
    color: 'white',
  },
});

export default MovieDetailsScreen;
