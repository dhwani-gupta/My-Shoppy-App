import { ActivityIndicator, FlatList, StyleSheet, Text, View, Button, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation, NavigationProp } from '@react-navigation/native'
import RootStackParamList from './type';

// import axios from 'axios';

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
// type RootStackParamList = {
    
//     Cart: { cartItems: DataType[] }; // Cart screen expects cartItems as parameter
//   };

const FruitsScreenApi = () => {
    const [products, setProducts] = useState<DataType[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<Error>();
    const [addcart, setAddcart] = useState<DataType[]>([]);

    const navigation = useNavigation<NavigationProp<RootStackParamList>>();


    useEffect(() => {

        // fetch('https://www.fruityvice.com/api/fruit/all')
        //     .then((response) => {
        //         if (!response.ok) {
        //             throw new Error('Failed to fetch data from the API');
        //         }
        //         return response.json()
        //     })
        //     .then((data) => {
        //         console.log('API Response:', data);
        //         setProducts(data)
        //         setLoading(false)
        //     })
        //     .catch((error) => {
        //         console.error('API Error:', error.message);  // Log the error
        //         setError(error.message || 'an Unknow error occured');
        //         setLoading(false);
        //     })
       async function getApi(){
        try {
            const response = await fetch("https://www.fruityvice.com/api/fruit/all")
            const data= await response.json()
            console.log('API Response:', data);
            setProducts(data)
            setLoading(false) 
            
        } 
        catch (error) {
            console.error('Api error:', error);
            // setError(error)
            setLoading(false)
        }
        
        
       }

       getApi();


    }, [])

    if (loading) {
        return <ActivityIndicator size='large' color='blue' />
    }
    if (error) {
        return (
            <View >
                {/* <Text>{error}</Text> */}
            </View>
        );
    }

    const addToCart = (index: number) => {
        const newList = products.filter((fruits) => fruits.id === index)
        setAddcart(newList)
        console.log(newList);
        navigation.navigate('Cart',{cartItems:newList});
    }

    return (
        <View style={{ padding: 10, backgroundColor: 'red' }}>
            <Text >Fruits</Text>
            <FlatList
                horizontal={false}
                numColumns={2}
                data={products}
                keyExtractor={(item) => `${item.id}`}
                renderItem={({ item }) => (
                    <View style={{ backgroundColor: 'pink' }}>
                        <Image
                        style={{ width: 150, height: 100 }}
                        source={{ uri: 'https://m.media-amazon.com/images/I/41EdyXe4gxL.jpg' }}/>

                        <View style={{ backgroundColor: 'red' }}>


                            <Text >{item.name}</Text>
                            <Text>{item.family}</Text>
                            <Button title="Add to Cart" onPress={() => addToCart(item.id)} />
                            {/* <Button title="Add to Cart" onPress={() => navigation.navigate('Cart',{item})} /> */}

                        </View>
                    </View>
                )}
            />
        </View>
    );
}

export default FruitsScreenApi

const styles = StyleSheet.create({})