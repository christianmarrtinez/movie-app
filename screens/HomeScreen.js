import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Image, StyleSheet, ActivityIndicator, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { fetchPopularMovies } from '../services/api';
import globalStyles from '../styles/styles'; // Import global styles

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
        style={styles.poster}
      />
      <Text style={styles.title}>{item.title}</Text>
    </TouchableOpacity>
  );

  if (loading) {
    return (
      <View style={globalStyles.container}>
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
    backgroundColor: '#28353d',
    padding: 10, 
    borderRadius: 5, 
  },
  poster: {
    width: 50,
    height: 75,
    marginRight: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white', 
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
    color: '#28353d',
  },
});

export default HomeScreen;
