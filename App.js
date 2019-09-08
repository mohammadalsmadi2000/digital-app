import React from 'react';
import { Platform, StatusBar, StyleSheet, View,Text,Image,AsyncStorage } from 'react-native';
import { AppLoading, Asset, Icon } from 'expo';
import AppNavigator from './navigation/AppNavigator';
import { LinearGradient } from 'expo';
import { Provider } from 'mobx-react/native';
import appStore from './store/AppStore'

import { Ionicons } from '@expo/vector-icons';
import * as Font from 'expo';

const slides = [
  {
    key: 'somethun',
    title: 'Change yourself',
    text:
      'Kaizen karta is the most productive App',
    icon: 'ios-body',
    colors: ['#63E2FF', '#B066FE'],
  },
  {
    key: 'somethun1',
    title: 'Get daily Quote',
    text:
      'Get a new quote everyday',
    icon: 'ios-checkmark-circle-outline',
    colors: ['#A3A1FF', '#3A3897'],
  },
  {
    key: 'somethun2',
    title: 'Write down your todo list',
    text: 'Kaizen karta help you start your day in productive way',
    icon: 'ios-copy',
    colors: ['#29ABE2', '#4F00BC'],
  },
];

export default class App extends React.Component {

  constructor(props) {
   super(props);
   this.state = {
     isLoadingComplete: false,
     showRealApp: false,

     loading: true,
     //To show the main page of the app
   };
 }
  componentDidMount() {
   AsyncStorage.getItem('first_time').then((value) => {
     this.setState({ showRealApp: !!value, loading: false });
   });
 }
 _onDone = () => {
  // After user finished the intro slides. Show real app through
  // navigation or simply by controlling state
  AsyncStorage.setItem('first_time', 'true').then(() => {
    this.setState({ showRealApp: true });

  });
};

_onSkip = () => {
  // After user skip the intro slides. Show real app through
  // navigation or simply by controlling state
  AsyncStorage.setItem('first_time', 'true').then(() => {
    this.setState({ showRealApp: true });

  });
};


  render() {
    console.disableYellowBox = true;

    if (!this.state.isLoadingComplete && !this.props.skipLoadingScreen) {
      return (
        <AppLoading
          startAsync={this._loadResourcesAsync}
          onError={this._handleLoadingError}
          onFinish={this._handleFinishLoading}
        />
      );
    } else {return (
      <Provider appStore={appStore}>
      <AppNavigator />
        </Provider>

    )}


  }

  _loadResourcesAsync = async () => {
    await Font.loadAsync(Ionicons.font);

    return Promise.all([

      Font.loadAsync({
        // This is the font that we are using for our tab bar
        ...Icon.Ionicons.font,

        // We include SpaceMono because we use it in HomeScreen.js. Feel free
        // to remove this if you are not using it in your app
        'space-mono': require('./assets/fonts/SpaceMono-Regular.ttf'),
      }),
    ]);
  };

  _handleLoadingError = error => {
    // In this case, you might want to report the error to your error
    // reporting service, for example Sentry
    console.warn(error);
  };

  _handleFinishLoading = () => {
    this.setState({ isLoadingComplete: true });
  };
}
const styles = StyleSheet.create({
  mainContent: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  image: {
    width: 320,
    height: 320,
  },
  text: {
    color: 'rgba(255, 255, 255, 0.8)',
    backgroundColor: 'transparent',
    textAlign: 'center',
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 22,
    color: 'white',
    backgroundColor: 'transparent',
    textAlign: 'center',
    marginBottom: 16,
  },
});
