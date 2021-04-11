/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text, View} from 'react-native';

const HolaMundoScreen = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#ff9dda',
        justifyContent: 'center',
      }}>
      <Text
        style={{
          color: '#004e99',
          fontSize: 45,
          fontWeight: 'bold',
          textAlign: 'center',
        }}>
        Aqui root
      </Text>
    </View>
  );
};

export default HolaMundoScreen;
