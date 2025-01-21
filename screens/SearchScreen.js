// screens/SearchScreen.js

import React, { useState } from 'react';
import { View, TextInput, FlatList, TouchableOpacity, Text, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { search } from '../mockData'; // Import the mock data

const SearchScreen = () => {
  const navigation = useNavigation();
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = () => {
    // Filter the movies based on the search query
    const filteredMovies = search.Search.filter((movie) =>
      movie.Title.toLowerCase().includes(query.toLowerCase())
    );
    setResults(filteredMovies);
  };

  const navigateToDetails = (movie) => {
    navigation.navigate('MovieDetails', { movie });
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchBar}
        placeholder="Search for a movie..."
        value={query}
        onChangeText={setQuery}
      />
      <TouchableOpacity style={styles.searchButton} onPress={handleSearch}>
        <Text style={styles.searchButtonText}>Search</Text>
      </TouchableOpacity>

      <FlatList
        data={results}
        keyExtractor={(item) => item.imdbID}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigateToDetails(item)}>
            <View style={styles.movieContainer}>
              <Image source={{ uri: item.Poster }} style={styles.poster} />
              <View>
                <Text style={styles.movieTitle}>{item.Title}</Text>
                <Text style={styles.movieYear}>{item.Year}</Text>
              </View>
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
  searchBar: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  searchButton: {
    backgroundColor: '#2a9d8f',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 20,
  },
  searchButtonText: {
    color: 'white',
    fontSize: 16,
  },
  movieContainer: {
    flexDirection: 'row',
    marginVertical: 10,
    alignItems: 'center',
  },
  poster: {
    width: 50,
    height: 75,
    marginRight: 10,
  },
  movieTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  movieYear: {
    fontSize: 14,
    color: 'gray',
  },
});

export default SearchScreen;
