import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image,
    FlatList,
} from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { removeAddress } from '../redux/actions/Actions';

const MyAddress = () => {
    const Navigation = useNavigation();
    const Dispatch = useDispatch();
    const addressList = useSelector(state => state.AddressReducer);

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>My Addresses</Text>
                <TouchableOpacity
                    style={styles.addBtn}
                    onPress={() => Navigation.navigate('AddAddress')}
                >
                    <Text style={styles.addBtnText}>+ Add New</Text>
                </TouchableOpacity>
            </View>

            {addressList.length === 0 ? (
                <Text style={styles.noAddressText}>No address added yet.</Text>
            ) : (
                <FlatList
                    contentContainerStyle={styles.flatList}
                    data={addressList}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item, index }) => (
                        <View style={styles.card}>
                            <View style={styles.cardContent}>
                                <Text style={styles.label}>🏠 Street:</Text>
                                <Text style={styles.value}>{item.street}</Text>
                            </View>
                            <View style={styles.cardContent}>
                                <Text style={styles.label}>🏙️ City:</Text>
                                <Text style={styles.value}>{item.city}</Text>
                            </View>
                            <View style={styles.cardContent}>
                                <Text style={styles.label}>📮 Pincode:</Text>
                                <Text style={styles.value}>{item.pincode}</Text>
                            </View>
                            <TouchableOpacity
                                style={styles.deleteBtn}
                                onPress={() => Dispatch(removeAddress(index))}
                            >
                                <Text style={styles.deleteBtnText}>🗑️ Delete</Text>
                            </TouchableOpacity>
                        </View>
                    )}
                />
            )}
        </View>
    );
};

export default MyAddress;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F6F6F6',
        paddingHorizontal: 16,
        paddingTop: 20,
    },
    header: {
        height: 60,
        backgroundColor: '#ff5a19',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        borderRadius: 10,
        marginBottom: 16,
    },
    headerText: {
        color: '#fff',
        fontSize: 22,
        fontWeight: 'bold',
    },
    addBtn: {
        backgroundColor: '#fff',
        paddingVertical: 8,
        paddingHorizontal: 16,
        borderRadius: 20,
    },
    addBtnText: {
        color: '#ff5a19',
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
        color: '#333',
        width: 90,
    },
    value: {
        color: '#555',
        flex: 1,
    },
    deleteBtn: {
        marginTop: 10,
        alignSelf: 'flex-end',
        backgroundColor: '#ff5a19',
        paddingVertical: 6,
        paddingHorizontal: 14,
        borderRadius: 16,
    },
    deleteBtnText: {
        color: '#fff',
        fontWeight: 'bold',
    },
    noAddressText: {
        textAlign: 'center',
        marginTop: 30,
        color: '#777',
        fontSize: 16,
    },
});
