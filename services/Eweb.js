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

export default class Eweb extends Component {
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
      source={{uri:'https://scontent.famm2-1.fna.fbcdn.net/v/t31.0-8/20689727_2024933511076537_2717258018679104702_o.png?_nc_cat=107&_nc_eui2=AeFyN0QXbJpv6_2Ha2BNBLrKv59wN1eJ1GTtBtgG4X_8OGhYPbnyLiiJXZ8cT3xJuSbsyfeVgsRqf4oKrcc0GEdYnHJLtqbVYWTB_RYbCIisUQ&_nc_oc=AQlyjbmCyBTa6-6XaG8uGosf1u9PlSEF-Clet7Ke7fxEvcKcRQ1wIkTfG5xBw_ZDD5I&_nc_pt=1&_nc_ht=scontent.famm2-1.fna&oh=84b0d7299e07bc91d6d9bc829226c8f6&oe=5DA04B69'}}
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
Sell online with Ecommerce website
</Text>
<Text style={{color:'white',textAlign:'center',fontSize:20,marginVertical:5}}>
Trusted by over 800,000 businesses worldwide
</Text>
  </View>


        </LinearGradient>
       </View>
    </ImageBackground>
    <View style={{flex:2}}>
<ScrollView style={{paddingHorizontal:20}}>
<View style={{flexDirection:'column',justifyContent:'space-around',marginVertical:10,alignSelf:'flex-start',padding:30,alignItems:'center'}}>
<MaterialCommunityIcons name="tablet-cellphone" size={35} color="black" style={{alignSelf:'flex-start'}}/>

  <Text style={[styles.subtitle,{color:'#000000',fontSize:23,fontWeight:'700',marginVertical:10}]}>WordPress was designed to provide beautiful typography for its users

</Text>
  <Text style={[styles.subtitle,{color:'#000000',alignSelf:'flex-start'}]}>
But with development in technology,wordpress website development has now become the most popular platform for building websites. Right from simple blogging sites to large e-commerce websites, everything is possible at our wordpress development agency.
</Text>
  </View>

  <View style={{flexDirection:'column',justifyContent:'space-around',marginVertical:10,alignSelf:'flex-start',padding:30,alignItems:'center'}}>
  <MaterialCommunityIcons name="credit-card" size={35} color="black" style={{alignSelf:'flex-start'}}/>

    <Text style={[styles.subtitle,{color:'#000000',fontSize:23,fontWeight:'700',marginVertical:10}]}>By providing wordpress development services we can help target a large number of audience

  </Text>
    <Text style={[styles.subtitle,{color:'#000000',alignSelf:'flex-start'}]}>
This robust platform is used for fully functional websites which can be accessed through any device. As a WordPress website development company, we provide fully functional, aesthetically beautiful websites for all our clients
  </Text>
    </View>

    <View style={{flexDirection:'column',justifyContent:'space-around',marginVertical:10,alignSelf:'flex-start',padding:30,alignItems:'center'}}>
    <MaterialCommunityIcons name="account-heart" size={35} color="black" style={{alignSelf:'flex-start'}}/>

      <Text style={[styles.subtitle,{color:'#000000',fontSize:23,fontWeight:'700',marginVertical:10}]}>giant open source community
    </Text>
      <Text style={[styles.subtitle,{color:'#000000',alignSelf:'flex-start'}]}>
it enables new directions for building effective and fully functional ecommerce websites. This content management system has brought a notable revolution in the world of wordpress website development services.
    </Text>
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
