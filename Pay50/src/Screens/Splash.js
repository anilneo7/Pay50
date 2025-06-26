import {StyleSheet, Text, View, Image} from 'react-native';
import React, {useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Splash = () => {
  const Navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      getData();
    }, 2000);
  }, []);

  const getData = async () => {
    const email = AsyncStorage.getItem('EMAIL');
    if (!email) {
      Navigation.navigate('Home');
    } else {
      Navigation.navigate('Login');
    }
  };
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Image
        source={require('../images/eCommerceLogo.png')}
        style={{width: 250, height: 250, borderRadius: 50}}
      />
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({});
