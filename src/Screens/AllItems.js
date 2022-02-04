import {
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  FlatList,
  Image,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Statusbar from '../Components/Statusbar';
import AsyncStorageLib from '@react-native-async-storage/async-storage';
import Button from '../Components/Button';

const DATA = [
  {
    id: '1',
    userName: 'John D’souza',
    userImg: 'https://picsum.photos/500',
    messageTime: 'QAR 20.00/ Hr',
    messageText: 'Basketball Trainer',
    location: 'Sudama Nagar',
  },
  {
    id: '2',
    userName: 'John D’souza',
    userImg: 'https://picsum.photos/500',

    messageTime: 'QAR 20.00/ Hr',
    messageText: 'Basketball Trainer',
    location: 'Sudama Nagar',
  },
  {
    id: '3',
    userName: 'John D’souza',
    userImg: 'https://picsum.photos/500',

    messageTime: 'QAR 20.00/ Hr',
    messageText: 'Basketball Trainer',
    location: 'Sudama Nagar',
  },
  {
    id: '4',
    userName: 'John D’souza',
    userImg: 'https://picsum.photos/500',

    messageTime: 'QAR 20.00/ Hr',
    messageText: 'Basketball Trainer',
    location: 'Sudama Nagar',
  },
  {
    id: '5',
    userName: 'John D’souza',
    userImg: 'https://picsum.photos/500',

    messageTime: 'QAR 20.00/ Hr',
    messageText: 'Basketball Trainer',
    location: 'Sudama Nagar',
  },
];

export default function AllItems() {
  const [data, setData] = useState([]);

  const STORAGE_KEY = '@TEST';
  const readData = async () => {
    try {
      const data = await AsyncStorageLib.getItem(STORAGE_KEY);
      if (data !== null) {
        // alert(data);
        setData(JSON.parse(data));
      }
    } catch (e) {
      alert('Failed to fetch the data from storage');
      console.error(e.message);
    }
  };

  const clearStorage = async () => {
    try {
      await AsyncStorageLib.clear();
      setData([]);
      alert('Storage successfully cleared!');
    } catch (e) {
      alert('Failed to clear the async storage.');
      console.error(e.message);
    }
  };

  useEffect(() => {
    readData();
  }, []);
  return (
    <View style={{flex: 1}}>
      <Statusbar backgroundColor={'#000'} barStyle="light-content" />

      <View style={{flex: 1}}>
        <FlatList
          showsVerticalScrollIndicator={false}
          scrollEnabled={true}
          ListFooterComponent={
            <View>
              <View style={{marginHorizontal: 20, marginVertical: 20}}>
                <Button onPress={() => readData()} buttontext={'GET DATA'} />
              </View>
              <View style={{marginHorizontal: 20}}>
                <Button
                  onPress={() => clearStorage()}
                  buttontext={'CLEAR DATA'}
                />
              </View>
            </View>
          }
          ListEmptyComponent={
            <Text
              style={{
                fontSize: 20,
                alignSelf: 'center',
                fontWeight: 'bold',
                marginBottom: 20,
                marginTop: 40,
                textDecorationLine: 'underline',
                fontStyle: 'italic',
              }}>
              DATA NOT EXIST
            </Text>
          }
          // horizontal={true}
          data={data}
          renderItem={({item}) => (
            <TouchableOpacity
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginVertical: 10,
                marginHorizontal: 20,
                borderRadius: 13,
                paddingVertical: 10,
                shadowColor: '#000',
                shadowOffset: {
                  width: 0,
                  height: 2,
                },
                shadowOpacity: 0.25,
                shadowRadius: 3.84,

                elevation: 5,
                backgroundColor: '#fff',
                justifyContent: 'space-between',
                paddingHorizontal: 10,
              }}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Image
                  style={{
                    height: (Dimensions.get('window').width - 15 * 6) / 3,
                    width: (Dimensions.get('window').width - 15 * 6) / 3,
                    borderRadius: 10,
                    marginRight: 15,
                    backgroundColor: '#c4c4c4',
                  }}
                  source={{uri: item.uri}}
                  // source={{uri: 'https://picsum.photos/500'}}
                />
                <View>
                  <Text style={{fontSize: 14, fontWeight: '700'}}>
                    {item.title}
                  </Text>
                  <Text
                    style={{
                      fontSize: 14,
                      marginTop: 5,
                      color: 'gray',
                    }}>
                    {item.description}
                  </Text>
                  <Text
                    style={{
                      fontSize: 14,
                      marginTop: 5,
                      color: 'gray',
                    }}>
                    {item.quantity}
                  </Text>
                  <Text
                    style={{
                      fontSize: 14,
                      marginTop: 5,
                      color: 'gray',
                    }}>
                    {item.price}
                  </Text>
                </View>
              </View>
              {/* <Text style={{fontSize: 14, marginTop: 5}}>02:00</Text> */}
            </TouchableOpacity>
          )}
        />
      </View>
    </View>
  );
}
