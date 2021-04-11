/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {Button, Text, View} from 'react-native';

export const Counter = () => {
  const [counter, setCounter] = useState(10);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'grey',
      }}>
      <Text
        style={{
          textAlign: 'center',
          fontSize: 40,
          top: -10,
        }}>
        Counter: {counter}
      </Text>

      <Button
        onPress={() => setCounter(counter + 1)}
        title="Learn More"
        color="#841584"
      />
    </View>
  );
};
