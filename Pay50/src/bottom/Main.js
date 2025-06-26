import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { Image } from 'react-native-animatable';
import { products } from '../Screens/Products';
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import MyProductItem from '../common/MyProductItem';
import { useDispatch } from 'react-redux';
import { addItemToCart, addToWishlist } from '../redux/actions/Actions';

const Main = () => {
  const [categoryList, setCategoryList] = useState([]);
  const [indianThaliList, setIndianThaliList] = useState([]);
  const [southIndianList, setSouthIndianList] = useState([]);
  const [italianList, setItalianList] = useState([]);
  const [dessertsList, setDessertsList] = useState([]);
  const [beveragesList, setBeveragesList] = useState([]);
  const [streetfoodList, setStreetFoodList] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    const categories = products.category;

    setCategoryList(categories);
    setIndianThaliList(categories[0].data);    // Authentic Indian Thali
    setSouthIndianList(categories[1].data);    // Traditional South Indian
    setItalianList(categories[2].data);        // Italian
    setDessertsList(categories[3].data);       // Desserts
    setBeveragesList(categories[4].data);      // Beverages
    setStreetFoodList(categories[5].data);     // Street Food
  }, []);

  return (
    <ScrollView style={{ flex: 1 }} contentContainerStyle={{ paddingBottom: 100 }}>
      <View style={{ flex: 1 }}>
        <Image source={require('../images/banner1.jpg')} style={styles.img} />

        <View>
          <FlatList
            data={categoryList}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => (
              <TouchableOpacity style={styles.itemCategory}>
                <Text>{item.category}</Text>
              </TouchableOpacity>
            )}
          />
        </View>

        <Text style={styles.txt}>Authentic Indian Thali</Text>
        <FlatList
          data={indianThaliList}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
            <MyProductItem
              item={item}
              onAddToCart={() => dispatch(addItemToCart(item))}
              onAddWishlist={(itemClicked) => dispatch(addToWishlist(itemClicked))}
            />
          )}
        />

        <Text style={styles.txt}>Traditional South Indian</Text>
        <FlatList
          data={southIndianList}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
            <MyProductItem
              item={item}
              onAddToCart={() => dispatch(addItemToCart(item))}
              onAddWishlist={(itemClicked) => dispatch(addToWishlist(itemClicked))}
            />
          )}
        />

        <Text style={styles.txt}>Italian Dish</Text>
        <FlatList
          data={italianList}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
            <MyProductItem
              item={item}
              onAddToCart={() => dispatch(addItemToCart(item))}
              onAddWishlist={(itemClicked) => dispatch(addToWishlist(itemClicked))}
            />
          )}
        />

        <Text style={styles.txt}>Deserts</Text>
        <FlatList
          data={dessertsList}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
            <MyProductItem
              item={item}
              onAddToCart={() => dispatch(addItemToCart(item))}
              onAddWishlist={(itemClicked) => dispatch(addToWishlist(itemClicked))}
            />
          )}
        />

        <Text style={styles.txt}>Fresh Beverages</Text>
        <FlatList
          data={beveragesList}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
            <MyProductItem
              item={item}
              onAddToCart={() => dispatch(addItemToCart(item))}
              onAddWishlist={(itemClicked) => dispatch(addToWishlist(itemClicked))}
            />
          )}
        />

        <Text style={styles.txt}>Snacks</Text>
        <FlatList
          data={streetfoodList}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
            <MyProductItem
              item={item}
              onAddToCart={() => dispatch(addItemToCart(item))}
              onAddWishlist={(itemClicked) => dispatch(addToWishlist(itemClicked))}
            />
          )}
        />
      </View>
    </ScrollView>
  );
};

export default Main;

const styles = StyleSheet.create({
  txt: {
    marginTop: 20,
    marginLeft: 20,
    color: "#000",
    fontSize: 16,
    fontWeight: '600'
  },
  itemCategory: {
    padding: 10,
    borderWidth: 1,
    marginLeft: 20,
    borderRadius: 20
  },
  img: {
    height: 200,
    width: '90%',
    borderRadius: 18,
    alignSelf: 'center',
    margin: 16,
  },
});
