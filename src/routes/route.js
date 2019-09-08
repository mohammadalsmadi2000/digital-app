import React from "react";
import { View, Text, Button } from "react-native";
import {createStackNavigator, createAppContainer} from 'react-navigation';
import Login from "../Components/login/login"


const MainNavigator = createStackNavigator({
  Login: {screen: Login},
},
{
  headerMode: "none",
  swipeEnabled: false
});
const MainRoute = createAppContainer(MainNavigator);
export default MainRoute;
