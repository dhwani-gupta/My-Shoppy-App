import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
// import AntDesign from '@expo/vector-icons/AntDesign';
// import Categories from './categories';


const HomeScreen = () => {
    return (
        <SafeAreaView style={styles.container}>
            <Text>Grocies at the finger tips.</Text>

            <Image
                style={styles.image}
                source={require('../../assets/images/homepage.png')}

            />

            <Text>All your home essential needs at one place. </Text>
        </SafeAreaView>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        width: '100%',
        // backgroundColor:'red',
    },
    image: {
        // flex:1,
        width: '100%',
        height: '90%',
        // backgroundColor:'green',

    }

})