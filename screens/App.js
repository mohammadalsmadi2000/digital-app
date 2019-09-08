import React,{Component} from 'react';
import { StyleSheet, Text, View ,ScrollView,TouchableOpacity,Image,ImageBackground,Dimensions,TouchableHighlight} from 'react-native';
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
import {  Button,Icon} from 'native-base';
import Swiper from 'react-native-swiper'
import ImageSlider from 'react-native-image-slider';
import styles, { colors } from '../example/src/styles/index.style';

const { width ,height} = Dimensions.get('window')
const styless = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  slider: { backgroundColor: '#000', height: 350 },
  content1: {
    width: '100%',
    height: 50,
    marginBottom: 10,
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'flex-start',paddingHorizontal:20
  },
  content2: {
    width: '100%',
    height: 100,
    marginTop: 10,
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentText: { color: '#fff' },
  buttons: {
    zIndex: 1,
    height: 15,
    marginTop: -25,
    marginBottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  button: {
    margin: 3,
    width: 15,
    height: 15,
    opacity: 0.9,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonSelected: {
    opacity: 1,
    color: 'red',
  },
  customSlide: {
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
  },
  customImage: {
    width: width,
    flex:1,
    resizeMode:'cover'
  },
});
import ImageView from 'react-native-image-view';


export default class App extends Component {
  state = {
  search: '',
  screenshot:false
};
  static navigationOptions = {
      //To hide the ActionBar/NavigationBar
      header: null,
  };


  render() {
    const images = [
     'https://i.imgsafe.org/17/1742f74e50.jpeg',
     'https://i.imgsafe.org/17/17461d6477.jpeg',
     'https://i.imgsafe.org/17/17476826d2.jpeg',
     'https://i.imgsafe.org/17/174918acc8.jpeg',
   ];
    return (
      <View style={{flex:1}}>
      {this.state.screenshot ?
        <SafeAreaView style={styless.container}>

          <View style={styless.content1}>
          <TouchableOpacity onPress={()=> this.setState({screenshot:false})}>
            <Text style={{alignSelf:'flex-start',color:'white'}}>close</Text>
            </TouchableOpacity>
          </View>
          <ImageSlider
            loopBothSides
            autoPlayWithInterval={3000}
            images={images}
            customSlide={({ index, item, style, width }) => (
              // It's important to put style here because it's got offset inside
              <View key={index} style={[style, styless.customSlide]}>
                <Image source={{ uri: item }} style={styless.customImage} />
              </View>
            )}
            customButtons={(position, move) => (
              <View style={styless.buttons}>
                {images.map((image, index) => {
                  return (
                    <TouchableHighlight
                      key={index}
                      underlayColor="#ccc"
                      onPress={() => move(index)}
                      style={styless.button}
                    >
                      <Text style={position === index && styless.buttonSelected}>
                        {index + 1}
                      </Text>
                    </TouchableHighlight>
                  );
                })}
              </View>
            )}
          />

        </SafeAreaView>
         :

         <View style={{flex:1,  height: 200,}}>
               <ImageBackground style={{flex: 1,
                 width: null,
                 height: null,
               }}
               source={{uri:'https://i.imgsafe.org/12/129509ee27.jpeg'}}
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
           <View style={{flex:1,justifyContent:'space-around',paddingVertical:10,alignItems:'center'}}>
         <Text style={{color:'white',textAlign:'center',fontSize:30,marginVertical:5}}>
         Sell online with Loolet
         </Text>
           </View>

           <View style={{flex:1,alignSelf:'flex-start',justifyContent:'flex-end',flexDirection:'row',marginVertical:10,paddingHorizontal:20}}>
           <Button iconLeft bordered light rounded style={{padding:25,marginHorizontal:10}}>
           <Icon name='logo-apple' />

                     <Text style={{color:'white',fontWeight:'500'}}>Try on IOS</Text>
                   </Button>
                   <Button iconLeft bordered light rounded style={{padding:25}}>
                   <Icon name='logo-android' />

                             <Text style={{color:'white',fontWeight:'500'}}>Try on Android</Text>
                           </Button>
           </View>

                 </LinearGradient>
                </View>
             </ImageBackground>
             <View style={{flex:2}}>
         <ScrollView style={{paddingHorizontal:20}} pagingEnabled={true}>
         <View style={{flexDirection:'column',justifyContent:'space-around',marginVertical:10,alignSelf:'flex-start',padding:30,alignItems:'center'}}>
         <MaterialCommunityIcons name="wordpress" size={35} color="black" style={{alignSelf:'flex-start'}}/>

           <Text style={[styles.subtitle,{color:'#000000',fontSize:23,fontWeight:'700',marginVertical:10}]}>
           WooCommerce

         </Text>
           <Text style={[styles.subtitle,{color:'#000000',alignSelf:'flex-start'}]}>
         Full compatible with any WooCommerce templates
         </Text>
           </View>

           <View style={{flexDirection:'column',justifyContent:'space-around',marginVertical:10,alignSelf:'flex-start',padding:30,alignItems:'center'}}>
           <MaterialCommunityIcons name="credit-card" size={35} color="black" style={{alignSelf:'flex-start'}}/>

             <Text style={[styles.subtitle,{color:'#000000',fontSize:23,fontWeight:'700',marginVertical:10}]}>Multi Payment

           </Text>
             <Text style={[styles.subtitle,{color:'#000000',alignSelf:'flex-start'}]}>
         Support 99% of the payment gateway services
           </Text>
             </View>

             <View style={{flexDirection:'column',justifyContent:'space-around',marginVertical:10,alignSelf:'flex-start',padding:30,alignItems:'center'}}>
             <MaterialCommunityIcons name="tablet-cellphone" size={35} color="black" style={{alignSelf:'flex-start'}}/>

               <Text style={[styles.subtitle,{color:'#000000',fontSize:23,fontWeight:'700',marginVertical:10}]}>
               iOS & Android


             </Text>
               <Text style={[styles.subtitle,{color:'#000000',alignSelf:'flex-start'}]}>
         Product is made for Both Platform  that mean you can release for both OSs  </Text>
             </View>
             <View style={{flexDirection:'column',justifyContent:'space-around',marginVertical:10,alignSelf:'flex-start',padding:30,alignItems:'center'}}>
             <MaterialCommunityIcons name="facebook-box" size={35} color="black" style={{alignSelf:'flex-start'}}/>

               <Text style={[styles.subtitle,{color:'#000000',fontSize:23,fontWeight:'700',marginVertical:10}]}>
               Social login


             </Text>
               <Text style={[styles.subtitle,{color:'#000000',alignSelf:'flex-start'}]}>
         Belong default WordPress register, app also support Facebook, Google, Twitter</Text>
             </View>
             <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
          <Text style={{fontSize:21,fontWeight:'700'}}>
Awesome Screenshot
          </Text>
          <Button iconLeft bordered dark rounded style={{padding:25,marginVertical:10}} onPress={()=>this.setState({screenshot:true})}>
          <Icon name='logo-android' />

                    <Text style={{fontWeight:'500'}}>View Screenshot</Text>
                  </Button>
              </View>
              <View style={{flex:1}}/>
         </ScrollView>
            </View>
         </View>

      }
      </View>
       );
  }
}
