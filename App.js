// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/components/homescreen';
import CategoriesComponent from './src/components/categories';
// import CategoriesScreen from './src/components/categorynew';

import Cart from './src/components/cart';

import FruitsScreenApi from './src/screens/FruitsScreen';
import Icon from 'react-native-vector-icons/Ionicons'; // Import the Icon library
const Tab = createBottomTabNavigator();



const Stack = createNativeStackNavigator();

function CategoryItems() {
  return (

    <Stack.Navigator initialRouteName="Categories">
      <Stack.Screen name='Categories' component={CategoriesComponent} />
      <Stack.Screen name='Fruits' component={FruitsScreenApi} />
      <Stack.Screen name="Cart" component={Cart} />
      

      {/* <Stack.Screen name='Categories' component={CategoriesComponent} /> */}

    </Stack.Navigator>




  )
}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;

            // Customize icons for each screen
            if (route.name === 'Home') {
              iconName = 'home'; // Home icon
            } else if (route.name === 'Categories') {
              iconName = 'list'; // Categories icon
            } else if (route.name === 'Cart') {
              iconName = 'cart'; // Cart icon
            }

            // Return the icon component
            return <Icon name={iconName} size={size} color={color} />;
          },
        })}
      // tabBarOptions={{
      //   activeTintColor: 'tomato',  // Active tab color
      //   inactiveTintColor: 'gray',  // Inactive tab color
      // }}
      >
        <Tab.Screen name="Home" component={HomeScreen} options={{ headerTitle: 'My Shoppy Home' }} />
        <Tab.Screen name="Categories" component={CategoryItems} options={{ headerTitle: 'Categories' }} />
        <Tab.Screen name="Cart" component={Cart} options={{ headerTitle: "Cart Items" }} />
      </Tab.Navigator>
    </NavigationContainer>


  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
