import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator,createSwitchNavigator } from 'react-navigation';
import HomeScreen from '../screens/HomeScreen';
import { Feather } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import Articles from '../screens/Articles';
import Profile from '../screens/Profile';
import Services from '../screens/services';
import Integration from '../screens/integration';
import Payment from '../screens/payment';
import Platforms from '../screens/platform';
import UI from '../screens/UI';
import App from '../screens/App';
import Eapp from '../services/Eapp';
import Eweb from '../services/Eweb';
import Shopify from '../services/shopify';
import Woocommerce from '../services/woocommerce';
import Auth from '../src/App';
import LoginScreen from "../screens/LoginScreen";
import SignupScreen from "../screens/SignupScreen";
import ProductScreen from "../screens/ProductScreen";
import ProfileScreen from "../screens/ProfileScreen";
import Loading from "../screens/loading";
import CreateNew from "../screens/new";
import Newarticle from "../screens/newarticle";
import SettingScreen from "../screens/setting";


import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
const fade = props => {
  const {
    position,
    scene: { index }
  } = props;

  const translateX = 0;
  const translateY = 0;

  const opacity = position.interpolate({
    inputRange: [index - 0.7, index, index + 0.7],
    outputRange: [0.3, 1, 0.3]
  });

  return {
    opacity,
    transform: [{ translateX }, { translateY }]
  };
};

const HomeStacks = createStackNavigator({
  Home: HomeScreen,
  Services:Services,

  Integration:Integration,
  Payment:Payment,
  Eapp:Eapp,
  Eweb:Eweb,
  Woocommerce:Woocommerce,
  Shopify:Shopify,
  pricing:Articles,
  UI:UI,
  App:App,
  Platforms:Platforms
});




const Prostack = createStackNavigator({
  profile:ProfileScreen,
  new:CreateNew,
  article:Newarticle,
  SettingScreen:SettingScreen
});




HomeStacks.navigationOptions = {
  backBehavior: 'none',
tabBarOptions: {
    showLabel: false
},
tabBarIcon: ({ tintColor }) => (
  <Feather name="home" size={25} color={tintColor} />
)
};
const AddStack = createStackNavigator({
  Home: Articles,
  Onboarding:ProductScreen
});

AddStack.navigationOptions = {
  backBehavior: 'none',
tabBarOptions: {
    showLabel: false
},
tabBarIcon: ({ tintColor }) => (
  <Feather name="compass" size={25} color={tintColor} />
)
};
const ProfileStack = createSwitchNavigator(
  {
    Loading:Loading,
    Signup: SignupScreen,
    Login: LoginScreen,
    profile:Prostack
  },
  {
    initialRouteName: "Loading",
    headerMode: "none",
    ...Platform.select({
      ios: {
        transitionConfig: () => ({
          screenInterpolator: props => fade(props)
        })
      }
    })
  }
);

ProfileStack.navigationOptions = {
  backBehavior: 'none',
tabBarOptions: {
    showLabel: false
},
tabBarIcon: ({ tintColor }) => (
  <Feather name="user" size={25} color={tintColor} />
)
};
export default createMaterialBottomTabNavigator({
  Homes:HomeStacks,
  News:AddStack,
Profile:ProfileStack,
},
);
