import React from 'react';
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

export default function CustomTextInput({
  placeholder,
  Heading,
  onChangeText,
  value,
  nulll,
  editable,
  secureTextEntry,
  keyboardType,
  autoCapitalize,
  onSubmitEditing,
  cancelOnPress,
  cross,
  opacitytwo,
  searchbar,
  search,
  multiline,
  height,
  borderRadius,
}) {
  return (
    <View style={{width: Dimensions.get('window').width}}>
      <View
        style={{
          backgroundColor: '#fff',
          paddingHorizontal: 15,
          marginHorizontal: 20,
          borderRadius: 10,
          marginTop: 10,
          opacity: opacitytwo,
          // width: Dimensions.get('window').width - 40,
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,

          elevation: 5,
          paddingVertical: 10,
        }}>
        {!!Heading && <Text style={styles.heading}>{Heading}</Text>}

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <TextInput
            editable={editable}
            style={[styles.textInput, {height: height}]}
            autoCapitalize={autoCapitalize}
            keyboardType={keyboardType}
            secureTextEntry={secureTextEntry}
            placeholder={placeholder}
            placeholderTextColor={'#000'}
            value={value}
            onChangeText={onChangeText}
            onSubmitEditing={onSubmitEditing}
            multiline={multiline}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  textInput: {
    fontWeight: '600',
    fontSize: 16,
    paddingTop: 8,
    paddingBottom: 6,
    color: '#000',
    flex: 1,
    // paddingHorizontal: 15,
  },
  heading: {
    fontSize: 14,
    color: 'gray',
    fontWeight: '700',
  },
  error: {
    color: '#900',
    textDecorationLine: 'underline',
    marginHorizontal: 20,
  },
  optional: {
    fontSize: 14,
    // marginHorizontal: 30,
    // marginTop: 20,
    color: 'gray',
    fontWeight: '700',
  },
});
