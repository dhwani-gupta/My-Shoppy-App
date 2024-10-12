// import { createStackNavigator } from '@react-navigation/stack';
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

export default RootStackParamList;