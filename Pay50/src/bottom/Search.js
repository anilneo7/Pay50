import { StyleSheet, Text, View, TextInput, FlatList, Image } from 'react-native';
import React, { useState, useEffect } from 'react';
import { products } from '../Screens/Products';

const Search = () => {
  const [search, setSearch] = useState('');
  const [allProducts, setAllProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  // Flatten all food items from all categories into a single array
  useEffect(() => {
    const flattened = products.category.flatMap(item => item.data);
    setAllProducts(flattened);
    setFilteredProducts(flattened); // Initially show all
  }, []);

  // Filter food items based on search query
  useEffect(() => {
    const filtered = allProducts.filter(item =>
      item.name.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredProducts(filtered);
  }, [search]);

  return (
    <View style={styles.container}>
      <TextInput
        placeholder='Search your food.. 🔍'
        style={styles.searchTxtInput}
        value={search}
        onChangeText={(txt) => setSearch(txt)}
      />
      {filteredProducts.length === 0 ? (
        <Text style={styles.noResults}>No items found!</Text>
      ) : (
        <FlatList
          data={filteredProducts}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <View style={styles.card}>
              <Image source={item.image} style={styles.image} />
              <View style={styles.info}>
                <Text style={styles.name}>{item.name}</Text>
                <Text style={styles.meta}>Type: {item.type}</Text>
                <Text style={styles.price}>₹{item.price}</Text>
              </View>
            </View>
          )}
        />
      )}
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  searchTxtInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 14,
    padding: 12,
    marginBottom: 16,
    fontSize: 16,
  },
  noResults: {
    fontSize: 16,
    color: '#555',
    textAlign: 'center',
    marginTop: 20,
  },
  card: {
    flexDirection: 'row',
    backgroundColor: '#fafafa',
    padding: 12,
    marginBottom: 10,
    borderRadius: 10,
    elevation: 2,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 8,
    marginRight: 12,
  },
  info: {
    flex: 1,
    justifyContent: 'center',
  },
  name: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#222',
  },
  meta: {
    fontSize: 13,
    color: '#777',
    marginTop: 2,
  },
  price: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#ff5a19',
    marginTop: 4,
  },
});
