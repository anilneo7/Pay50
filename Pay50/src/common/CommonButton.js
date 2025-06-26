import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';

const CommonButton = ({
  onPress,
  title,
  bgColor = '#ff5a19',
  textColor = '#fff',
  fontWeight = '600',
  fontSize = 16,
  disabledValue = false,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabledValue}
      activeOpacity={0.85}
      style={[
        styles.buttonBase,
        {
          backgroundColor: disabledValue ? '#d3d3d3' : bgColor,
          shadowOpacity: disabledValue ? 0.1 : 0.25,
        },
      ]}
    >
      <Text
        style={[
          styles.textBase,
          {
            color: textColor,
            fontWeight: fontWeight,
            fontSize: fontSize,
          },
        ]}
      >
        {title.toUpperCase()}
      </Text>
    </TouchableOpacity>
  );
};

export default CommonButton;

const styles = StyleSheet.create({
  buttonBase: {
    width: '85%',
    height: 52,
    borderRadius: 14,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 32,
    backgroundColor: '#ff5a19',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 8,
    elevation: 6,
    shadowOpacity: 0.25,
  },
  textBase: {
    letterSpacing: 1,
    textAlign: 'center',
  },
});
