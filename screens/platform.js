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

export default class Platforms extends Component {
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
      source={{uri:'http://static1.squarespace.com/static/50a3bec7e4b01d89010fbbcc/t/5c40a81c352f533088bddeea/1556545392268/shopify-reviews.jpg?format=1500w'}}
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
Sell online with Shopify
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

  <Text style={[styles.subtitle,{color:'#000000',fontSize:23,fontWeight:'700',marginVertical:10}]}>Beautiful themes that are responsive and customizable

</Text>
  <Text style={[styles.subtitle,{color:'#000000',alignSelf:'flex-start'}]}>
  No design skills needed. You have complete control over the look and feel of your website, from its layout, to content and colors.
</Text>
  </View>

  <View style={{flexDirection:'column',justifyContent:'space-around',marginVertical:10,alignSelf:'flex-start',padding:30,alignItems:'center'}}>
  <MaterialCommunityIcons name="credit-card" size={35} color="black" style={{alignSelf:'flex-start'}}/>

    <Text style={[styles.subtitle,{color:'#000000',fontSize:23,fontWeight:'700',marginVertical:10}]}>Pricing as low as $9/month

  </Text>
    <Text style={[styles.subtitle,{color:'#000000',alignSelf:'flex-start'}]}>
Whether you sell online, on social media, in store, or out of the trunk of your car, Shopify has you covered. Start selling anywhere for just $9/month
  </Text>
    </View>

    <View style={{flexDirection:'column',justifyContent:'space-around',marginVertical:10,alignSelf:'flex-start',padding:30,alignItems:'center'}}>
    <MaterialCommunityIcons name="account-heart" size={35} color="black" style={{alignSelf:'flex-start'}}/>

      <Text style={[styles.subtitle,{color:'#000000',fontSize:23,fontWeight:'700',marginVertical:10}]}>Trusted by over 800,000 businesses worldwide
    </Text>
      <Text style={[styles.subtitle,{color:'#000000',alignSelf:'flex-start'}]}>
Shopify handles everything from marketing and payments, to secure checkout and shipping    </Text>
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
