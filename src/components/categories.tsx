import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation, NavigationProp } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

type StackParamList = {
    Categories: undefined; // No parameters expected
    Fruits: undefined;     // No parameters expected (if you aren't passing any data)
};
const Stack = createNativeStackNavigator<StackParamList>();

const CategoriesComponent = () => {
    const navigation = useNavigation<NavigationProp<StackParamList>>();

    return (
        <View style={styles.mainbody}>
            <TouchableOpacity
                style={styles.container}
                onPress={() => navigation.navigate("Fruits")}
            >
                <Image
                    source={require('../../assets/images/fruits.jpg')}
                    style={styles.fruits}
                />
                <Text style={styles.text}>Fruits</Text>


            </TouchableOpacity >
            <TouchableOpacity style={styles.container}>
                <Image
                    source={require('../../assets/images/flour.jpg')}
                    style={styles.fruits}
                />
                <Text style={styles.text}>Fruits</Text>


            </TouchableOpacity >
            <TouchableOpacity style={styles.container}>
                <Image
                    source={require('../../assets/images/cereals.jpg')}
                    style={styles.fruits}
                />
                <Text style={styles.text}>Fruits</Text>


            </TouchableOpacity >
            <TouchableOpacity style={styles.container}>
                <Image
                    source={require('../../assets/images/icecream.jpg')}
                    style={styles.fruits}
                />
                <Text style={styles.text}>Fruits</Text>


            </TouchableOpacity >
            <TouchableOpacity style={styles.container}>
                <Image
                    source={require('../../assets/images/vegetable.jpg')}
                    style={styles.fruits}
                />
                <Text style={styles.text}>Fruits</Text>


            </TouchableOpacity >
            <TouchableOpacity style={styles.container}>
                <Image
                    source={require('../../assets/images/dairy.jpg')}
                    style={styles.fruits}
                />
                <Text style={styles.text}>Fruits</Text>


            </TouchableOpacity>
            <TouchableOpacity style={styles.container}>
                <Image
                    source={require('../../assets/images/spices.jpg')}
                    style={styles.fruits}
                />
                <Text style={styles.text}>Fruits</Text>


            </TouchableOpacity >
            <TouchableOpacity style={styles.container}>
                <Image
                    source={require('../../assets/images/chocolate.jpg')}
                    style={styles.fruits}
                />
                <Text style={styles.text}>Fruits</Text>


            </TouchableOpacity >
        </View>
    )
}

export default CategoriesComponent;

const styles = StyleSheet.create({
    container: {
        height: 146,
        width: 180,
        // backgroundColor: "red",
        borderRadius: 10,
    },
    mainbody: {
        marginTop: 10,
        marginLeft: 12,
        display: "flex",
        flexWrap: 'wrap',
        gap: 10,
        height: '96%',
        width: '100%',
        // backgroundColor:'blue',



    },
    fruits: {
        height: 135,
        width: 180,
        borderRadius: 10,
        
    },
    text: {
        // backgroundColor:'blue',
        paddingLeft: 70,
        fontSize: 15,

    }


})