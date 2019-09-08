import React,{Component} from 'react';
import { StyleSheet, Text, View ,ScrollView,TouchableOpacity,Image,ImageBackground} from 'react-native';
import { SearchBar } from 'react-native-elements';
import Tags from '../components/tags'
import Cards from '../components/cards'
import { Container, Content, Tab, Tabs } from 'native-base';
import { LinearGradient } from 'expo-linear-gradient';
import { SafeAreaView } from 'react-navigation';
import { Item, Input } from 'native-base';
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Header } from 'react-native-elements'

export default class Eapp extends Component {
  state = {
  search: '',
};
  static navigationOptions = {
      //To hide the ActionBar/NavigationBar
      header: null,
  };


  render() {
    return (

<View style={{flex:1,  height: 200,}}>
      <ImageBackground style={{flex: 1,
        width: null,
        height: null,
      }}
      source={{uri:'https://design4users.com/wp-content/uploads/2019/02/ecommerce-app-designs.png'}}
      resizeMode="cover">

         <View
         style={{backgroundColor: 'rgba(0,0,0,0.4)', flex: 1,justifyContent:'center',  height: 200,}} >
         <LinearGradient
         colors={['rgba(0,0,0,0.4)', 'transparent']}
          style={{
            position: 'absolute',
            left: 0,justifyContent:'center',
            right: 0,
            top: 0,
            height: 200,
          }}
       >
       <Header backgroundColor="transparent"
 leftComponent={{ icon: 'arrow-back', color: '#fff',onPress:()=>{this.props.navigation.goBack()} }}
 />
  <View style={{flex:1,justifyContent:'center',paddingVertical:10}}>
<Text style={{color:'white',textAlign:'center',fontSize:30,marginVertical:5}}>
Mobile app development
</Text>
<Text style={{color:'white',textAlign:'center',fontSize:20,marginVertical:5}}>
Over 80% use mobile Apps
</Text>
  </View>


        </LinearGradient>
       </View>
    </ImageBackground>
    <View style={{flex:2}}>
<ScrollView style={{paddingHorizontal:20}}>
<View style={{flexDirection:'column',justifyContent:'space-around',marginVertical:10,alignSelf:'flex-start',padding:30,alignItems:'center'}}>
<MaterialCommunityIcons name="tablet-cellphone" size={35} color="black" style={{alignSelf:'flex-start'}}/>

  <Text style={[styles.subtitle,{color:'#000000',fontSize:23,fontWeight:'700',marginVertical:10}]}>Android & iOS Native App


</Text>
  <Text style={[styles.subtitle,{color:'#000000',alignSelf:'flex-start'}]}>
  Your store mobile application can be read in both platforms - iOS and Android with high UI/UX quality. Moreover, the UI is not hybrid app, it’s pure native

</Text>
  </View>

  <View style={{flexDirection:'column',justifyContent:'space-around',marginVertical:10,alignSelf:'flex-start',padding:30,alignItems:'center'}}>
  <MaterialCommunityIcons name="credit-card" size={35} color="black" style={{alignSelf:'flex-start'}}/>

    <Text style={[styles.subtitle,{color:'#000000',fontSize:23,fontWeight:'700',marginVertical:10}]}>High performance & Stability


  </Text>
    <Text style={[styles.subtitle,{color:'#000000',alignSelf:'flex-start'}]}>
Openshop ensures the app stability and high performance by synchronizing update for performance, and having crash report.  </Text>
    </View>

    <View style={{flexDirection:'column',justifyContent:'space-around',marginVertical:10,alignSelf:'flex-start',padding:30,alignItems:'center'}}>
    <MaterialCommunityIcons name="account-heart" size={35} color="black" style={{alignSelf:'flex-start'}}/>

      <Text style={[styles.subtitle,{color:'#000000',fontSize:23,fontWeight:'700',marginVertical:10}]}>Full integration with E-commerce website provider

    </Text>
      <Text style={[styles.subtitle,{color:'#000000',alignSelf:'flex-start'}]}>
Your app will be connected with your WooCommerce website so you can easily manage products and sale.    </Text>
      </View>
<View style={{flex:1}}/>
</ScrollView>
   </View>
</View>
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
