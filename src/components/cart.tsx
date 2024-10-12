
import { FlatList, StyleSheet, Text, View,Image } from 'react-native'
import React, { useState } from 'react'
import { useRoute, RouteProp } from '@react-navigation/native'
// import RootStackParamList from '../screens/type'

type DataType = {
  id: number,
  // title:string;
  // content:string;
  // image:string;
  name: string,
  family: string,
  // cartItems: DataType[];
  // navigate:DataType[];

};
type RootStackParamList = {
  FruitsScreenApi: undefined; // No params for FruitsScreenApi
  Cart: { cartItems: DataType[] }; // Cart expects cartItems
  
};

const Cart = () => {
  const route=useRoute<RouteProp<RootStackParamList>>();
  const {cartItems}=route.params;
  
  console.log();
  return (
    <View >
        <Text>Cart Items</Text>
        <FlatList
            data={cartItems}
            keyExtractor={(item) => `${item.id}`}
            renderItem={({ item }) => (
                <View style={{flexDirection:'row'}}>
                    <Image 
                    source={{ uri: 'https://m.media-amazon.com/images/I/41EdyXe4gxL.jpg' }}
                    style={{height:100, width:100}}/>

                    <View>
                    <Text>{item.name}</Text>
                    <Text>{item.family}</Text>

                    </View>
                    
                </View>
            )}
        />
    </View>
);
  
}

export default Cart

const styles = StyleSheet.create({})