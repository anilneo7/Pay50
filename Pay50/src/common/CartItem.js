import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import React from 'react';

//Ques1- Are item, onAddToCart, onAddWishlist props or what? //Ans- Yes

//here  item, onRemoveItem, onAddWishlist are the props we are receiving
//Todo: Remove 'onAddWishlist' from CartItem.js
const CartItem = ({ item, onRemoveItem, onAddWishlist, onRemoveFromWishlist, isWishlist, onAddToCart }) => {
    return (
        <View style={styles.card}>
            <Image source={item.image} style={styles.image} />

            {/* <TouchableOpacity style={styles.wishlist}
                onPress={() => { onAddWishlist(item) }}>
                <Image
                    source={require('../images/heart.png')}
                    style={styles.heartIcon}
                />
            </TouchableOpacity> */}

            {isWishlist ? (<TouchableOpacity style={styles.wishlist}
                onPress={() => { onRemoveFromWishlist() }}>
                <Image
                    source={require('../images/heart_fill.png')}
                    style={styles.heartIcon}
                />
            </TouchableOpacity>) : (<TouchableOpacity style={styles.wishlist}
                onPress={() => { onAddWishlist(item) }}>
                <Image
                    source={require('../images/heart.png')}
                    style={styles.heartIcon}
                />
            </TouchableOpacity>)}

            <View style={styles.details}>
                <Text style={styles.name} numberOfLines={2}>
                    {item.name}
                </Text>

                <View style={styles.footer}>
                    <Text style={styles.price}>₹{item.price}</Text>
                    {isWishlist ?
                        (<TouchableOpacity style={styles.cartButton} activeOpacity={0.8} onPress={() => { onAddToCart(item) }}>
                            <Text style={styles.cartText}>Add To cart</Text>
                        </TouchableOpacity>) :
                        (
                            <TouchableOpacity style={styles.cartButton} activeOpacity={0.8} onPress={() => { onRemoveItem() }}>
                                <Text style={styles.cartText}>Remove from cart</Text>
                            </TouchableOpacity>
                        )}


                </View>
            </View>
        </View>
    );
};

export default CartItem;

const styles = StyleSheet.create({
    card: {
        width: '90%',
        backgroundColor: '#fff',
        borderRadius: 16,
        overflow: 'hidden',
        margin: 12,
        elevation: 4,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.1,
        shadowRadius: 6,
        minHeight: 260,
    },
    image: {
        width: '100%',
        height: 160,
        resizeMode: 'cover',
    },
    wishlist: {
        position: 'absolute',
        top: 10,
        right: 10,
        backgroundColor: '#fff',
        padding: 6,
        borderRadius: 20,
        elevation: 5,
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowRadius: 4,
    },
    heartIcon: {
        width: 22,
        height: 22,
        tintColor: '#ff4d4d',
    },
    details: {
        padding: 12,
        flex: 1,
        justifyContent: 'space-between',
    },
    name: {
        fontSize: 15,
        fontWeight: '600',
        color: '#333',
        marginBottom: 8,
    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    price: {
        fontSize: 16,
        fontWeight: '700',
        color: '#222',
    },
    cartButton: {
        backgroundColor: '#ff6f61',
        paddingVertical: 6,
        paddingHorizontal: 14,
        borderRadius: 20,
    },
    cartText: {
        fontSize: 12,
        color: '#fff',
        fontWeight: '600',
    },
});
