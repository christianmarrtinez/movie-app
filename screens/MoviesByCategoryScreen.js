import React, { useEffect, useState } from 'react';
import { View, FlatList, Image, Text, TouchableOpacity, ActivityIndicator } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import { fetchMoviesByCategory } from '../services/api';
import styles from '../styles/styles';

const MoviesByCategoryScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const { categoryId, categoryName } = route.params;

  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [usedMovieIds, setUsedMovieIds] = useState(new Set());

  useEffect(() => {
    const loadMovies = async () => {
      setLoading(true);
      const data = await fetchMoviesByCategory(categoryId);

      if (data && data.results) {
        const filteredMovies = data.results.filter((movie) => !usedMovieIds.has(movie.id));

        setUsedMovieIds((prev) => new Set([...prev, ...filteredMovies.map((movie) => movie.id)]));
        setMovies(filteredMovies);
      }
      setLoading(false);
    };

    loadMovies();
  }, [categoryId]);

  const renderMovie = ({ item }) => (
    <TouchableOpacity
      style={styles.movieContainer}  
      onPress={() => navigation.navigate('MovieDetails', { movie: item })}
    >
      <Image
        source={{
          uri: item.poster_path
            ? `https://image.tmdb.org/t/p/w500${item.poster_path}`
            : 'https://via.placeholder.com/150x225?text=No+Image',
        }}
        style={styles.poster}
      />
      <Text style={styles.title}>{item.title}</Text>
    </TouchableOpacity>
  );

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>{categoryName} Movies</Text>
      <FlatList
        data={movies}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderMovie}
        contentContainerStyle={styles.list}
        ListEmptyComponent={<Text style={styles.emptyText}>No movies found</Text>}
      />
    </View>
  );
};

export default MoviesByCategoryScreen;
