import React, {useEffect, useState} from 'react';
import {
  Image,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
  View,
} from 'react-native';
import {launchImageLibrary} from 'react-native-image-picker';
import Statusbar from '../Components/Statusbar';
import TextInput from '../Components/TextInput';
import Button from '../Components/Button';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Home({navigation}) {
  // alert(JSON.stringify(auth.weight));

  const [uri, setUri] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [quantity, setQuantity] = useState('');
  const [price, setPrice] = useState('');
  const [date, setDate] = useState('');

  const [data, setData] = useState('');

  const pickImageAndUpload = () => {
    launchImageLibrary({quality: 0.5, includeBase64: true}, fileobj => {
      //   alert(fileobj.assets[0].base64);
      if (!fileobj.didCancel)
        setUri('data:image/jpeg;base64,' + fileobj.assets[0].base64);
    });
  };

  const STORAGE_KEY = '@TEST';
  const saveData = async () => {
    if (!uri) {
      alert('you must upload image');
      return;
    }
    if (!title) {
      alert('Please enter title');
      return;
    }
    if (!description) {
      alert('Please enter description');
      return;
    }
    if (!quantity) {
      alert('Please enter quantity');
      return;
    }
    if (!price) {
      alert('Please enter price');
      return;
    }

    try {
      const data = await AsyncStorage.getItem(STORAGE_KEY);
      const a = JSON.parse(data || '[]');
      a.push({title, description, quantity, price, date, uri});
      await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(a));

      setUri('');
      setTitle('');
      setDescription('');
      setQuantity('');
      setPrice('');
      alert('Data successfully saved');
    } catch (e) {
      alert('Failed to save the data to the storage');
      console.error(e.message);
    }
  };

  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      {/* <LoadingSpinner size={60} visible={loading} color={'#000'} /> */}
      <Statusbar backgroundColor={'#000'} barStyle="light-content" />

      <ScrollView showsVerticalScrollIndicator={false}>
        <ImageBackground
          style={{
            alignSelf: 'center',
            borderRadius: 100,
            height: 120,
            width: 120,
            marginTop: 30,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#C4C4C4',
          }}
          imageStyle={{
            height: 120,
            width: 120,
            resizeMode: 'cover',
            borderRadius: 100,
          }}
          source={{uri: uri}}>
          {/* source={{uri: 'https://picsum.photos/500'}}> */}
          <View
            style={{
              paddingVertical: 8,
              paddingHorizontal: 8,
              backgroundColor: '#fff',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 50,
              position: 'absolute',
              bottom: 0,
              right: 0,
            }}>
            <TouchableOpacity onPress={() => pickImageAndUpload()}>
              <Image
                style={{height: 20, width: 20, resizeMode: 'contain'}}
                source={require('../Assets/Cropping/Icons/Camera.png')}
              />
            </TouchableOpacity>
          </View>
        </ImageBackground>

        <View style={{alignItems: 'center', marginTop: 20}}>
          <TextInput
            onChangeText={setTitle}
            value={title}
            Heading={'Title'}
            placeholder={'Type here'}
          />
          <View style={{height: 10}} />
          <TextInput
            onChangeText={setDescription}
            value={description}
            Heading={'Description'}
            placeholder={'Type here'}
          />
          <View style={{height: 10}} />
          <TextInput
            onChangeText={setQuantity}
            value={quantity}
            Heading={'Quantity'}
            placeholder={'Type here'}
          />
          <TextInput
            onChangeText={setPrice}
            value={price}
            Heading={'Price'}
            placeholder={'Type here'}
          />
        </View>

        <View style={{marginHorizontal: 20, marginVertical: 20}}>
          <Button
            onPress={() => {
              saveData();
            }}
            buttontext={'SAVE'}
          />
        </View>
        <View style={{marginHorizontal: 20}}>
          <Button
            onPress={() => navigation.navigate('AllItems')}
            buttontext={'GO TO LIST'}
          />
        </View>
      </ScrollView>
    </View>
  );
}
