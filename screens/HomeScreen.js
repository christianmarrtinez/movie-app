import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Image, ActivityIndicator, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { fetchPopularMovies } from '../services/api';
import styles from '../styles/styles'; 

const HomeScreen = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigation = useNavigation(); 

  useEffect(() => {
    const loadPopularMovies = async () => {
      setLoading(true);
      const data = await fetchPopularMovies();
      if (data && data.results) {
        setMovies(data.results.slice(0, 10)); 
      }
      setLoading(false);
    };

    loadPopularMovies();
  }, []);

  const renderMovie = ({ item }) => (
    <TouchableOpacity
      style={styles.movieContainer} 
      onPress={() => navigation.navigate('MovieDetails', { movie: item })}
    >
      <Image
        source={{ uri: `https://image.tmdb.org/t/p/w500${item.poster_path}` }}
        style={styles.image} 
      />
      <Text style={styles.title}>{item.title}</Text> 
    </TouchableOpacity>
  );

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#60d3e1" />
      </View>
    );
  }

  return (
    <FlatList
      data={movies}
      keyExtractor={(item) => item.id.toString()}
      renderItem={renderMovie}
      contentContainerStyle={[styles.list, { backgroundColor: '#28353d' }]}
      ListEmptyComponent={<Text style={styles.emptyText}>No movies found</Text>}
    />
  );
  
};

export default HomeScreen;
