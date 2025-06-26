import { FlatList, SafeAreaView, StyleSheet, Text, View, TouchableOpacity, Alert, Pressable } from 'react-native';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Image } from 'react-native-animatable';
import { ScrollView } from 'react-native-gesture-handler';
import CommonButton from './common/CommonButton';
import { useNavigation } from '@react-navigation/native';

const Checkout = () => {
    const Navigation = useNavigation();
    const [selectedAddress, setSelectedAddress] = useState('');
    const CartData = useSelector(state => state.ReducerCart);
    const addressList = useSelector(state => state.AddressReducer);

    const totalPrice = () => {
        let totalAmount = 0;
        CartData.map(item => {
            totalAmount += item.price;
        });
        return totalAmount + 50; // 50 as delivery charge
    };

    return (
        <ScrollView>
            <SafeAreaView style={styles.container}>
                <Text style={styles.sectionTitle}>🛒 Your Cart</Text>

                <FlatList
                    data={CartData}
                    keyExtractor={(item, index) => index.toString()}
                    contentContainerStyle={styles.cartList}
                    renderItem={({ item }) => (
                        <View style={styles.cartItem}>
                            <Image source={item.image} style={styles.cartImage} resizeMode="contain" />
                            <View style={styles.cartDetails}>
                                <Text style={styles.itemName}>{item.name}</Text>
                                <Text style={styles.itemMeta}>Type: {item.type}</Text>
                                <Text style={styles.itemPrice}>₹{item.price}</Text>
                            </View>
                        </View>
                    )}
                />

                <View style={styles.summaryBox}>
                    <Text style={styles.summaryText}>Delivery Charges: <Text style={styles.summaryAmount}>₹50</Text></Text>
                    <Text style={styles.summaryText}>Total Amount: <Text style={styles.totalAmount}>₹{totalPrice()}</Text></Text>
                </View>

                <Text style={styles.sectionTitle}>🏠 Choose Delivery Address</Text>

                <TouchableOpacity
                    style={styles.addAddressBtn}
                    onPress={() => Navigation.navigate('AddAddress')}
                >
                    <Text style={styles.addAddressText}>➕ Add New Address</Text>
                </TouchableOpacity>

                <FlatList
                    contentContainerStyle={styles.flatList}
                    data={addressList}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item }) => (
                        <View style={styles.card}>
                            <View style={styles.cardContent}>
                                <Text style={styles.label}>Street:</Text>
                                <Text style={styles.value}>{item.street}</Text>
                            </View>
                            <View style={styles.cardContent}>
                                <Text style={styles.label}>City:</Text>
                                <Text style={styles.value}>{item.city}</Text>
                            </View>
                            <View style={styles.cardContent}>
                                <Text style={styles.label}>Pincode:</Text>
                                <Text style={styles.value}>{item.pincode}</Text>
                            </View>
                            <TouchableOpacity
                                style={styles.selectBtn}
                                onPress={() =>
                                    setSelectedAddress(`Street: ${item.street}, City: ${item.city}, Pincode: ${item.pincode}`)
                                }>
                                <Text style={styles.selectBtnText}>Select Address</Text>
                            </TouchableOpacity>
                        </View>
                    )}
                />

                <View style={styles.selectedAddressBox}>
                    <Text style={styles.selectedTitle}>📍 Selected Address</Text>
                    <Text style={styles.selectedText}>
                        {selectedAddress === '' ? 'Please select an address from above.' : selectedAddress}
                    </Text>
                </View>

                <View style={{ marginBottom: 40 }}>
                    <CommonButton title={"Place Order"} onPress={() => Alert.alert("Order Placed! ✅")} />
                </View>
            </SafeAreaView>
        </ScrollView>
    );
};

export default Checkout;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FAFAFA',
        paddingHorizontal: 16,
        paddingTop: 20,
    },
    sectionTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#333',
        marginVertical: 12,
    },
    cartList: {
        paddingBottom: 20,
    },
    cartItem: {
        backgroundColor: '#fff',
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 12,
        padding: 12,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOpacity: 0.05,
        shadowOffset: { width: 0, height: 1 },
        shadowRadius: 3,
        elevation: 2,
    },
    cartImage: {
        height: 60,
        width: 60,
        borderRadius: 8,
        marginRight: 12,
    },
    cartDetails: {
        flex: 1,
    },
    itemName: {
        fontSize: 16,
        fontWeight: '600',
        color: '#222',
    },
    itemMeta: {
        fontSize: 13,
        color: '#777',
        marginVertical: 2,
    },
    itemPrice: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#ff5a19',
    },
    summaryBox: {
        backgroundColor: '#FFF0E8',
        padding: 14,
        borderRadius: 10,
        marginBottom: 20,
    },
    summaryText: {
        fontSize: 16,
        color: '#333',
        marginBottom: 6,
    },
    summaryAmount: {
        fontWeight: '600',
        color: '#444',
    },
    totalAmount: {
        fontWeight: 'bold',
        color: '#ff5a19',
    },
    addAddressBtn: {
        backgroundColor: '#ff5a19',
        paddingVertical: 10,
        paddingHorizontal: 16,
        borderRadius: 20,
        alignSelf: 'flex-start',
        marginBottom: 10,
    },
    addAddressText: {
        color: '#fff',
        fontWeight: '600',
        fontSize: 14,
    },
    flatList: {
        paddingBottom: 30,
    },
    card: {
        backgroundColor: '#fff',
        borderRadius: 12,
        padding: 16,
        marginBottom: 14,
        elevation: 4,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 6,
        shadowOffset: { width: 0, height: 3 },
    },
    cardContent: {
        flexDirection: 'row',
        marginBottom: 6,
    },
    label: {
        fontWeight: '600',
        color: '#444',
        width: 90,
    },
    value: {
        color: '#333',
        flex: 1,
        fontSize: 15,
    },
    selectBtn: {
        marginTop: 12,
        alignSelf: 'flex-end',
        backgroundColor: '#ff5a19',
        paddingVertical: 8,
        paddingHorizontal: 16,
        borderRadius: 20,
    },
    selectBtnText: {
        color: '#fff',
        fontWeight: '600',
        fontSize: 14,
    },
    selectedAddressBox: {
        backgroundColor: '#FFF4EC',
        borderLeftWidth: 5,
        borderLeftColor: '#ff5a19',
        marginHorizontal: 10,
        marginVertical: 20,
        padding: 12,
        borderRadius: 10,
    },
    selectedTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 6,
        color: '#333',
    },
    selectedText: {
        fontSize: 14,
        color: '#555',
        lineHeight: 20,
    },
});
