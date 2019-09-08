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

export default class Shopify extends Component {
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
      source={{uri:'https://scontent-hbe1-1.xx.fbcdn.net/v/t1.0-9/67703244_122063475765265_6011692237044318208_o.jpg?_nc_cat=106&_nc_oc=AQmTL-T5oqZXojjcUmgaTKd9iIMHheAHXqqJyHACBTymRCUBNpnOOriSaLUj0LvqHuw&_nc_ht=scontent-hbe1-1.xx&oh=b29e69a1ed7b2f9372c7e707e5ee8e41&oe=5E03C716'}}
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
Web Development</Text>
<Text style={{color:'white',textAlign:'center',fontSize:20,marginVertical:5}}>
Building responsive website for Startups
</Text>
  </View>


        </LinearGradient>
       </View>
    </ImageBackground>
    <View style={{flex:2}}>
<ScrollView style={{paddingHorizontal:20}}>
<View style={{flexDirection:'column',justifyContent:'space-around',marginVertical:10,alignSelf:'flex-start',padding:30,alignItems:'center'}}>
<MaterialCommunityIcons name="tablet-cellphone" size={35} color="black" style={{alignSelf:'flex-start'}}/>

  <Text style={[styles.subtitle,{color:'#000000',fontSize:23,fontWeight:'700',marginVertical:10}]}>Product Development

</Text>
  <Text style={[styles.subtitle,{color:'#000000',alignSelf:'flex-start'}]}>
  It is often not an easy task for a fledgling startup with a great idea to come up with a market redefining solution in the real world. Experion prides itself in working with more than 60 startup businesses from across verticals globally, often creating products that have made their presence felt in the relevant markets. We believe in getting the product to the market at the earliest possible timeline, making it imperative to have all the required features at that particular stage.

</Text>
  </View>

  <View style={{flexDirection:'column',justifyContent:'space-around',marginVertical:10,alignSelf:'flex-start',padding:30,alignItems:'center'}}>
  <MaterialCommunityIcons name="credit-card" size={35} color="black" style={{alignSelf:'flex-start'}}/>

    <Text style={[styles.subtitle,{color:'#000000',fontSize:23,fontWeight:'700',marginVertical:10}]}>Product Ideation


  </Text>
  <Text style={[styles.subtitle,{color:'#000000',fontSize:23,fontWeight:'700',marginVertical:10}]}>Minimum Viable Product

</Text>
<Text style={[styles.subtitle,{color:'#000000',fontSize:23,fontWeight:'700',marginVertical:10}]}>Testing & QA

</Text>
<Text style={[styles.subtitle,{color:'#000000',fontSize:23,fontWeight:'700',marginVertical:10}]}>Maintenance & Support

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
