import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {theme} from '../Utils/theme';

export default function Button({onPress, buttontext}) {
  return (
    <TouchableOpacity activeOpacity={0.5} onPress={onPress} style={styles.btn}>
      <Text
        style={{
          fontWeight: '900',
          fontSize: 15,
          color: '#fff',
        }}>
        {buttontext}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  btn: {
    borderRadius: 10,
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 70,
    paddingVertical: 20,
    // marginVertical: 30,
  },
});
