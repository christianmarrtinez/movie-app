import React, { useState } from 'react';
import { View, TextInput, FlatList, Text, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { fetchMoviesBySearch } from '../services/api';
import styles from '../styles/styles'; 

const SearchScreen = () => {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);
  const navigation = useNavigation();

  const handleSearch = async () => {
    if (!query.trim()) {
      return;
    }

    setLoading(true);
    const data = await fetchMoviesBySearch(query);
    if (data && data.results) {
      setMovies(data.results);
    }
    setLoading(false);
    setHasSearched(true); 
  };

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

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Search for movies..."
        value={query}
        onChangeText={setQuery}
        placeholderTextColor="white"
      />
      <TouchableOpacity style={styles.searchButton} onPress={handleSearch}>
        <Text style={styles.searchButtonText}>Search</Text>
      </TouchableOpacity>

      {loading ? (
        <Text style={styles.loadingText}>Searching...</Text>
      ) : (
        <FlatList
          data={movies}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderMovie}
          contentContainerStyle={styles.list}
          ListEmptyComponent={
            hasSearched ? (
              <Text style={styles.emptyText}>No movies found</Text>
            ) : null 
          }
        />
      )}
    </View>
  );
};

export default SearchScreen;
