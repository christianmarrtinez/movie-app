import React, { useState } from 'react';
import { View, TextInput, FlatList, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { fetchMoviesBySearch } from '../services/api';

const SearchScreen = () => {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation(); // Get navigation object

  const handleSearch = async () => {
    if (!query.trim()) {
      return; // Don't make the API call if the query is empty
    }

    setLoading(true);
    const data = await fetchMoviesBySearch(query);
    if (data && data.results) {
      setMovies(data.results);
    }
    setLoading(false);
  };

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

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Search for movies..."
        value={query}
        onChangeText={setQuery}
      />
      <TouchableOpacity style={styles.button} onPress={handleSearch}>
        <Text style={styles.buttonText}>Search</Text>
      </TouchableOpacity>

      {loading ? (
        <Text style={styles.loadingText}>Searching...</Text>
      ) : (
        <FlatList
          data={movies}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderMovie}
          contentContainerStyle={styles.list}
          ListEmptyComponent={<Text style={styles.emptyText}>No movies found</Text>}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: '#007BFF',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 10,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
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
  loadingText: {
    textAlign: 'center',
    marginVertical: 10,
    fontSize: 16,
  },
  emptyText: {
    textAlign: 'center',
    marginTop: 20,
    fontSize: 16,
    color: '#555',
  },
});

export default SearchScreen;
