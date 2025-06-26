import {
  FlatList,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
} from 'react-native';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CartItem from '../common/CartItem';
import {
  removeFromWishlist,
  addItemToCart,
} from '../redux/actions/Actions';

const Wishlist = () => {
  const wishlistData = useSelector(state => state.ReducerWishlist);
  const dispatch = useDispatch();

  return (
    <SafeAreaView style={styles.container}>
      {/* Wishlist Header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>💖 My Wishlist</Text>
      </View>

      {/* Wishlist List */}
      <FlatList
        data={wishlistData}
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle={
          wishlistData.length === 0
            ? styles.emptyContainer
            : styles.listContainer
        }
        renderItem={({ item, index }) => (
          <CartItem
            item={item}
            onRemoveFromWishlist={() => dispatch(removeFromWishlist(index))}
            onAddToCart={(x) => dispatch(addItemToCart(x))}
            isWishlist="true"
          />
        )}
        ListEmptyComponent={() => (
          <View style={styles.emptyWishlist}>
            <Text style={styles.emoji}>😔</Text>
            <Text style={styles.emptyWishlistText}>Your Wishlist is empty</Text>
            <Text style={styles.subText}>
              Start exploring and add items you love!
            </Text>
          </View>
        )}
      />
    </SafeAreaView>
  );
};

export default Wishlist;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fefefe',
  },
  header: {
    height: 60,
    backgroundColor: '#ff5a19',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 3,
  },
  headerText: {
    fontSize: 22,
    color: '#fff',
    fontWeight: 'bold',
  },
  listContainer: {
    paddingHorizontal: 16,
    paddingTop: 10,
    paddingBottom: 80,
  },
  emptyContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyWishlist: {
    alignItems: 'center',
    marginTop: 100,
  },
  emoji: {
    fontSize: 60,
    marginBottom: 12,
  },
  emptyWishlistText: {
    fontSize: 20,
    fontWeight: '600',
    color: '#333',
  },
  subText: {
    fontSize: 14,
    color: '#777',
    marginTop: 4,
  },
});
