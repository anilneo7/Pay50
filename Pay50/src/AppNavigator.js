import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Splash from './Screens/Splash';
import Login from './Screens/Login';
import SignUp from './Screens/SignUp';
import Home from './Screens/Home';
import MyAddress from './Screens/MyAddress';
import AddAddress from './Screens/AddAddress';
import Checkout from './Checkout';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Splash"
          component={Splash}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUp}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name='MyAddress'
          component={MyAddress}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name='AddAddress'
          component={AddAddress}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name='Checkout'
          component={Checkout}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;

const styles = StyleSheet.create({});
