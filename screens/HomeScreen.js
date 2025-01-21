import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Image, StyleSheet, ActivityIndicator } from 'react-native';
import { fetchPopularMovies } from '../services/api';

const HomeScreen = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovies = async () => {
      const data = await fetchPopularMovies();
      if (data && data.results) {
        setMovies(data.results.slice(0, 10)); // Limit to 10 movies
      }
      setLoading(false);
    };

    fetchMovies();
  }, []);

  const renderMovie = ({ item }) => (
    <View style={styles.movieContainer}>
      <Image
        source={{ uri: `https://image.tmdb.org/t/p/w500${item.poster_path}` }}
        style={styles.poster}
      />
      <Text style={styles.title}>{item.title}</Text>
    </View>
  );

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <FlatList
      data={movies}
      keyExtractor={(item) => item.id.toString()}
      renderItem={renderMovie}
      contentContainerStyle={styles.list}
      ListEmptyComponent={<Text style={styles.emptyText}>No movies found</Text>}
    />
  );
};

const styles = StyleSheet.create({
  list: {
    padding: 10,
  },
  movieContainer: {
    flexDirection: 'row',
    marginBottom: 15,
    alignItems: 'center',
  },
  poster: {
    width: 50,
    height: 75,
    marginRight: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyText: {
    textAlign: 'center',
    marginTop: 20,
    fontSize: 16,
    color: '#555',
  },
});

export default HomeScreen;
