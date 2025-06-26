import { Image, StyleSheet, Text, View, TextInput } from 'react-native';
import React, { useState } from 'react';
import CustomTextInput from '../common/CustomTextInput';
import CommonButton from '../common/CommonButton';
import { useNavigation } from '@react-navigation/native';
import { ScrollView } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-async-storage/async-storage';
const SignUp = () => {
  let isValid = true;
  const navigation = useNavigation();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState(false);
  const [buttonDisabled, setButtonDisabled] = useState(false);

  //for validation
  const [badName, setBadName] = useState(false);
  const [badEmail, setBadEmail] = useState(false);
  const [badMobile, setBadMobile] = useState(false);
  const [badPassword, setBadPassword] = useState(false);
  const [badconfirmPassword, setBadConfirmPassword] = useState(false);

  const signupp = () => {
    setButtonDisabled(true);

    if (name === '') {
      setBadName(true);
      setButtonDisabled(false);
    } else {
      setBadName(false);
      if (email === '') {
        setBadEmail(true);
        setButtonDisabled(false);
      } else {
        setBadEmail(false);
        if (mobile === '') {
          setBadMobile(true);
          setButtonDisabled(false);
        } else {
          setBadMobile(false);
          if (password === '') {
            setBadPassword(true);
            setButtonDisabled(false);
          } else {
            setBadPassword(false);
            if (confirmPassword === '') {
              setBadConfirmPassword(true);
              setButtonDisabled(false);
            } else {
              setBadConfirmPassword(false);
              saveData();
            }
          }
        }
      }
    }

    if (mobile.length < 10) {
      setBadMobile(true);
      isValid = false;
    } else {
      setBadMobile(false);
    }
  };

  //for storing data in async. storage
  const saveData = async () => {
    await AsyncStorage.setItem('NAME', name);
    await AsyncStorage.setItem('EMAIL', email);
    await AsyncStorage.setItem('PASSWORD', password);
    await AsyncStorage.setItem('MOBILE', mobile);

    navigation.goBack();
  };
  return (
    <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
      <View style={{ flex: 1 }}>
        <Image
          source={require('../images/eCommerceLogo.png')}
          style={{
            height: 130,
            width: 130,
            borderRadius: 28,
            marginTop: 40,
            alignSelf: 'center',
          }}
        />

        <Text
          style={{
            fontWeight: '400',
            fontSize: 28,
            color: '#380438',
            marginTop: 25,
            alignSelf: 'center',
          }}>
          Create New Account
        </Text>

        <CustomTextInput
          placeholder={'Enter Name'}
          icon={require('../images/user.png')}
          value={name}
          onChangeText={txt => setName(txt)}
        />
        {badName && (
          <Text style={{ color: '#ff5a19', marginTop: 8, alignSelf: 'center' }}>
            Please enter valid name!
          </Text>
        )}

        <CustomTextInput
          placeholder={'Enter Email'}
          icon={require('../images/mail.png')}
          value={email}
          onChangeText={txt => setEmail(txt)}
        />
        {badEmail && (
          <Text style={{ color: '#ff5a19', marginTop: 8, alignSelf: 'center' }}>
            Please enter valid email!
          </Text>
        )}

        <CustomTextInput
          placeholder={'Enter Mobile'}
          icon={require('../images/mobile.png')}
          keyboardType={'numeric'}
          value={mobile}
          onChangeText={txt => setMobile(txt)}
        />
        {badMobile && (
          <Text style={{ color: '#ff5a19', marginTop: 8, alignSelf: 'center' }}>
            Please enter valid mobile!
          </Text>
        )}

        <CustomTextInput
          placeholder={'Enter Password'}
          type={'password'}
          icon={require('../images/lock.png')}
          value={password}
          onChangeText={txt => setPassword(txt)}
        />
        {badPassword && (
          <Text style={{ color: '#ff5a19', marginTop: 8, alignSelf: 'center' }}>
            Please enter valid Password!
          </Text>
        )}

        <CustomTextInput
          placeholder={'Confirm Password'}
          type={'password'}
          icon={require('../images/lock.png')}
          value={confirmPassword}
          onChangeText={txt => setConfirmPassword(txt)}
        />
        {badconfirmPassword && (
          <Text style={{ color: '#ff5a19', marginTop: 8, alignSelf: 'center' }}>
            Please enter correct password!
          </Text>
        )}

        <CommonButton
          bgColor={buttonDisabled ? '#8e8e8e' : '#ff5a19'}
          title={'Signup'}
          textColor={'#fff'}
          fontWeight={'800'}
          fontSize={20}
          onPress={() => signupp()}
          disabledValue={buttonDisabled}
        />

        <Text
          style={{
            alignSelf: 'center',
            textDecorationLine: 'underline',
            marginTop: 30,
            fontWeight: '500',
            fontSize: 16,
          }}
          onPress={() => {
            navigation.goBack();
          }}>
          Already have an account?
        </Text>
      </View>
    </ScrollView>
  );
};

export default SignUp;

const styles = StyleSheet.create({});
