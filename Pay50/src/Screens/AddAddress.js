import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image,
    Alert,
    SafeAreaView,
    ScrollView,
} from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import CustomTextInput from '../common/CustomTextInput';
import CommonButton from '../common/CommonButton';
import { useDispatch } from 'react-redux';
import { addAddress } from '../redux/actions/Actions';

const AddAddress = () => {
    const Navigation = useNavigation();
    const [city, setCity] = useState('');
    const [street, setStreet] = useState('');
    const [pin, setPin] = useState('');
    const Dispatch = useDispatch();

    const handleSubmit = () => {
        if (city !== '' && street !== '' && pin !== '') {
            Dispatch(addAddress({ city, street, pincode: pin }));
            Navigation.goBack();
        } else {
            Alert.alert('All Fields Are Mandatory');
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => Navigation.goBack()}>
                    <Image
                        style={styles.backIcon}
                        source={require('../images/back.png')}
                    />
                </TouchableOpacity>
                <Text style={styles.headerText}>Add Address</Text>
                <View style={{ width: 28 }} />
            </View>

            <ScrollView contentContainerStyle={styles.content}>
                <View style={styles.formCard}>
                    <CustomTextInput
                        placeholder={'Enter Street'}
                        icon={require('../images/street2.png')}
                        value={street}
                        onChangeText={txt => setStreet(txt)}
                    />

                    <CustomTextInput
                        placeholder={'Enter City'}
                        icon={require('../images/city1.png')}
                        value={city}
                        onChangeText={txt => setCity(txt)}
                    />

                    <CustomTextInput
                        placeholder={'Enter PIN'}
                        icon={require('../images/pin.png')}
                        value={pin}
                        keyboardType={'number-pad'}
                        onChangeText={txt => setPin(txt)}
                    />

                    <CommonButton
                        title={'Save Address'}
                        bgColor={'#ff5a19'}
                        textColor={'#fff'}
                        fontWeight={'600'}
                        fontSize={18}
                        onPress={handleSubmit}
                    />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default AddAddress;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fdfdfd',
    },
    header: {
        height: 60,
        backgroundColor: '#ff5a19',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 16,
    },
    backIcon: {
        height: 28,
        width: 28,
        tintColor: '#fff',
    },
    headerText: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
    },
    content: {
        padding: 16,
    },
    formCard: {
        backgroundColor: '#fff',
        borderRadius: 12,
        padding: 20,
        elevation: 5,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 5,
    },
});
