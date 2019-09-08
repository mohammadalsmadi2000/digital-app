import React,{Component} from 'react';
import { StyleSheet, Text, View ,ScrollView,TouchableOpacity,Image,ImageBackground} from 'react-native';
import { SearchBar } from 'react-native-elements';
import Tags from '../components/tags'
import Cards from '../components/cards'
import { Container, Header, Content, Tab, Tabs } from 'native-base';
import { LinearGradient } from 'expo-linear-gradient';
import { SafeAreaView } from 'react-navigation';
import { Item, Input } from 'native-base';

export default class Profile extends Component {
  state = {
  search: '',
};
  static navigationOptions = {
      //To hide the ActionBar/NavigationBar
      header: null,
  };


  render() {
    return (


      <ImageBackground style={{flex: 1,
        width: null,
        height: null,
      }}
      source={require('./assets/bg.jpg')}
      resizeMode="cover">
         <View
         style={{backgroundColor: 'rgba(0,0,0,0.4)', flex: 1,justifyContent:'center'}} >
         <LinearGradient
         colors={['rgba(136,77,255,60)', 'transparent']}
          style={{
            position: 'absolute',
            left: 0,justifyContent:'center',
            right: 0,
            top: 0,
            height: '100%',
          }}
       >
  <View style={{flex:1,justifyContent:'center',paddingVertical:10}}>
<Text style={{color:'white',textAlign:'center',fontSize:30,marginVertical:5}}>
Welcome To Openshop
</Text>
<Text style={{color:'white',textAlign:'center',fontSize:20,marginVertical:5}}>
Join our Services and Build your online store
</Text>
  </View>
  <View style={{flex:1,justifyContent:'center',alignItems:'center',paddingVertical:20}}>
  <Text style={{color:'white',textAlign:'center',fontSize:17,marginVertical:5}}>
Read our <Text style={{fontWeight:'700'}}>Privacy Policy</Text>.
Tap "Agree & Continue" to accept the <Text style={{fontWeight:'700'}}>Terms of Service</Text>
 </Text>
 <TouchableOpacity onPress={()=>{this.props.navigation.navigate('Registers')}}>
 <Text  style={{color:'white',textAlign:'center',fontSize:20,marginVertical:5,fontWeight:'700'}}>
Agree & Continue
</Text>
</TouchableOpacity>
  </View>
  <View style={{flex:1}}/>

        </LinearGradient>
       </View>
    </ImageBackground>

    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: undefined,
    height: undefined,
    backgroundColor:'transparent',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
