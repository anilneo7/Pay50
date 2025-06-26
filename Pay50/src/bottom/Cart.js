import { StyleSheet, Text, View, FlatList, SafeAreaView } from 'react-native';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CartItem from '../common/CartItem';
import { removeFromCart, addToWishlist } from '../redux/actions/Actions';
import CommonButton from '../common/CommonButton';
import { useNavigation } from '@react-navigation/native';
import RazorpayCheckout from 'react-native-razorpay';


const Cart = () => {
  const Navigation = useNavigation();
  const cartData = useSelector(state => state.ReducerCart);
  const dispatch = useDispatch();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>🛒 Your Cart</Text>
      </View>

      <FlatList
        data={cartData}
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle={
          cartData.length === 0 ? styles.emptyContainer : styles.cartList
        }
        renderItem={({ item, index }) => (
          <CartItem
            item={item}
            onRemoveItem={() => dispatch(removeFromCart(index))}
            onAddWishlist={(selectedItem) => dispatch(addToWishlist(selectedItem))}
          />
        )}
        ListEmptyComponent={() => (
          <View style={styles.emptyCart}>
            <Text style={styles.emptyCartEmoji}>😔</Text>
            <Text style={styles.emptyCartText}>Your Cart is Empty</Text>
            <Text style={styles.suggestionText}>Browse products and add them to your cart.</Text>
          </View>
        )}
      />
      {cartData.length > 0 ? (<View style={{ marginBottom: 100 }}>
        <CommonButton title={'Checkout'} bgColor={"#ff5a19"}
          onPress={() => {
            Navigation.navigate("Checkout")
          }} />
      </View>) : null}
    </SafeAreaView>
  );
};

export default Cart;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fdfdfd',
  },
  header: {
    height: 60,
    backgroundColor: '#ff5a19',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 4,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
  },
  headerText: {
    fontSize: 22,
    color: '#fff',
    fontWeight: 'bold',
  },
  cartList: {
    paddingHorizontal: 16,
    paddingTop: 10,
    paddingBottom: 80,
  },
  emptyContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyCart: {
    alignItems: 'center',
    paddingTop: 100,
  },
  emptyCartEmoji: {
    fontSize: 60,
  },
  emptyCartText: {
    fontSize: 20,
    fontWeight: '600',
    color: '#333',
    marginTop: 12,
  },
  suggestionText: {
    fontSize: 14,
    color: '#888',
    marginTop: 4,
  },
});
