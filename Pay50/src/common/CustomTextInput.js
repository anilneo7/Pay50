import {Image, StyleSheet, Text, View, TextInput} from 'react-native';
import React from 'react';

const CustomTextInput = ({
  value,
  onChangeText,
  placeholder,
  icon,
  type,
  keyboardType,
}) => {
  return (
    <View
      style={{
        width: '85%',
        height: 50,
        borderWidth: 1,
        borderRadius: 10,
        alignSelf: 'center',
        marginTop: 30,
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 20,
        paddingRight: 20,
        backgroundColor: '#D3D3D3',
      }}>
      <Image source={icon} style={{width: 24, height: 24}} />

      <TextInput
        placeholder={placeholder}
        secureTextEntry={type ? true : false}
        style={{marginLeft: 10}}
        keyboardType={keyboardType}
        value={value}
        onChangeText={txt => onChangeText(txt)}
      />
    </View>
  );
};

export default CustomTextInput;

const styles = StyleSheet.create({});
