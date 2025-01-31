import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#28353d',
    padding: 10,
  },
  button: {
    padding: 15,
    marginVertical: 5,
    backgroundColor: '#28353d', 
    borderRadius: 8,
    alignItems: 'center',
    borderWidth: 1, 
    borderColor: '#60d3e1', 
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: 50,
    height: 75,
    marginRight: 15,
    borderRadius: 4,
  },
  text: {
    color: '#fff',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
  list: {
    padding: 10,
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
    color: '#60d3e1',
  },
  movieContainer: {
    flexDirection: 'row',
    marginBottom: 15,
    alignItems: 'center',
    backgroundColor: '#28353d',
    padding: 10,
    borderRadius: 5,
    borderWidth: 1,  
    borderColor: '#60d3e1', 
  },
  categoryButton: {
    padding: 15,
    marginVertical: 5,
    backgroundColor: '#28353d', 
    borderRadius: 8,
    borderWidth: 1, 
    borderColor: '#60d3e1', 
  },
  categoryText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  input: {
    height: 40,
    borderColor: '#60d3e1',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
    color: 'white',  
    backgroundColor: 'transparent',
  },
  searchButton: {
    backgroundColor: '#60d3e1',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 10,
  },
  searchButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  poster: {
    width: 50,
    height: 75,
    marginRight: 10,
  },
  loadingText: {
    textAlign: 'center',
    marginVertical: 10,
    fontSize: 16,
    color: 'white',
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
    color: 'white', 
  },
  
});

export default styles;
