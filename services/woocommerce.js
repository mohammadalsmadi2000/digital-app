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

export default class Woocommerce extends Component {
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
      source={{uri:'https://scontent-hbe1-1.xx.fbcdn.net/v/t1.0-9/66023975_107938920511054_3223071534843166720_o.jpg?_nc_cat=102&_nc_oc=AQnOCx0ZzjSoAiiHOs2cUuwnWYHi8oqGGj6vOZAW3IC1D5Xi74pBXHwKTlOU0fV_A6A&_nc_ht=scontent-hbe1-1.xx&oh=924a0d7796713d78e2586eb480656fa5&oe=5DD4DB5D'}}
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
Many technology Ideas
</Text>
<Text style={{color:'white',textAlign:'center',fontSize:20,marginVertical:5}}>
Transform idea into reality.
</Text>
  </View>


        </LinearGradient>
       </View>
    </ImageBackground>
    <View style={{flex:2}}>
<ScrollView style={{paddingHorizontal:20}}>
<View style={{flexDirection:'column',justifyContent:'space-around',marginVertical:10,alignSelf:'flex-start',padding:30,alignItems:'center'}}>
<MaterialCommunityIcons name="tablet-cellphone" size={35} color="black" style={{alignSelf:'flex-start'}}/>

  <Text style={[styles.subtitle,{color:'#000000',fontSize:23,fontWeight:'700',marginVertical:10}]}>What is technology

</Text>
  <Text style={[styles.subtitle,{color:'#000000',alignSelf:'flex-start'}]}>
Technology is the foundation for your operational efficiencies, reporting needs, meeting regulatory compliance, and general communication. As an enterprise with multiple locations, large numbers of employees and complex technology installations, it makes sense to trust your assets to a team of experts that has the experience and methodology to manage relocations, deployments and seat management. More importantly, you want a focus on results, which is exactly what we do at Digital Team
</Text>
  </View>

  <View style={{flexDirection:'column',justifyContent:'space-around',marginVertical:10,alignSelf:'flex-start',padding:30,alignItems:'center'}}>
  <MaterialCommunityIcons name="credit-card" size={35} color="black" style={{alignSelf:'flex-start'}}/>

    <Text style={[styles.subtitle,{color:'#000000',fontSize:23,fontWeight:'700',marginVertical:10}]}>Drive to Positive Results

  </Text>
    <Text style={[styles.subtitle,{color:'#000000',alignSelf:'flex-start'}]}>
    It may seem that driving toward results does not apply to managing the relocation of technology; yet without it, your projects will not meet expectations, and can derail costing you time and money. We strive to hit all goals set by our clients utilizing our project objectives, which include:
  </Text>
    </View>

    <View style={{flexDirection:'column',justifyContent:'space-around',marginVertical:10,alignSelf:'flex-start',padding:30,alignItems:'center'}}>
    <MaterialCommunityIcons name="account-heart" size={35} color="black" style={{alignSelf:'flex-start'}}/>

      <Text style={[styles.subtitle,{color:'#000000',fontSize:23,fontWeight:'700',marginVertical:10}]}>giant open source community
    </Text>
      <Text style={[styles.subtitle,{color:'#000000',alignSelf:'flex-start'}]}>
Digital Team provides high levels of expertise, plus a focus on quality and professionalism to ensure that you have a partner to provide critical technology asset management and relocation solutions that drive to positive results.    </Text>
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
