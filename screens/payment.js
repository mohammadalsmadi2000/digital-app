import React, { Component } from 'react';
import { Platform, View, ScrollView,Dimensions, Text, StatusBar, SafeAreaView,TouchableOpacity,Image,Linking } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import { sliderWidth, itemWidth } from '../example/src/styles/SliderEntry.style';
import SliderEntry from '../example/src/components/SliderEntry';
import styles, { colors } from '../example/src/styles/index.style';
import { ENTRIES1, ENTRIES2,ENTRIES3 } from '../example/src/static/entries';
import { scrollInterpolators, animatedStyles } from '../example/src/utils/animations';
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import {  Button,Icon} from 'native-base';
import { Header } from 'react-native-elements'

const IS_ANDROID = Platform.OS === 'android';
const SLIDER_1_FIRST_ITEM = 1;
const entireScreenWidth = Dimensions.get('window').width;

export default class Payment extends Component {
  static navigationOptions = {
      //To hide the ActionBar/NavigationBar
      header: null,
  };
    constructor (props) {
        super(props);
        this.state = {
            slider1ActiveSlide: SLIDER_1_FIRST_ITEM
        };
    }

    _renderItem ({item, index}) {
        return <SliderEntry data={item} even={(index + 1) % 2 === 0} />;
    }

    _renderItemWithParallax ({item, index}, parallaxProps) {
        return (
            <SliderEntry
              data={item}
              even={(index + 1) % 2 === 0}
              parallax={true}
              parallaxProps={parallaxProps}
            />
        );
    }

    _renderLightItem ({item, index}) {
        return <SliderEntry data={item} even={false} />;
    }

    _renderDarkItem ({item, index}) {
        return <SliderEntry data={item} even={true} />;
    }

    mainExample (number, title) {
        const { slider1ActiveSlide } = this.state;

        return (
            <View style={styles.exampleContainer}>
                <Text style={styles.title}>OpenShop</Text>
                <Text style={styles.subtitle}>The Most Powerful Platform to build online store on mobile app and Website.</Text>

            </View>
        );
    }
    handleClick = () => {
        Linking.canOpenURL('opentiq.com/digital-team').then(supported => {
          if (supported) {
            Linking.openURL('opentiq.com/digital-team');
          } else {
            console.log("Don't know how to open URI: " + this.props.url);
          }
        });
      };
    momentumExample (number, title, type) {
      const isTinder = type === 'tinder';
        return (
          <View style={[styles.exampleContainer, isTinder ? styles.exampleContainerDark : styles.exampleContainerLight]}>
                          <Text style={[styles.title, isTinder ? {} : styles.titleDark]}>Learn to design
</Text>
                          <Text style={[styles.subtitle, isTinder ? {} : styles.titleDark]}>Learn how to design images professionally</Text>
                          <Image style={{width:'100%',height:200,resizeMode:'contain'}}  source={{uri:'http://www.opentiq.com/digital-team/wp-content/uploads/2019/08/vector-graphics-6.png'}}/>

                      </View>        );
    }
    Demo () {
        return (
          <LinearGradient
    colors={['#000000', '#434343']}


  >
          <View style={{flex:1,justifyContent:'center',alignItems:'center',padding:30}}>

  <Text style={[styles.subtitle,{color:'#eb144c'}]}>Explore our website</Text>

  <Text style={{fontWeight:'700',fontSize:35,color:'white',textAlign:'center'}}>Digital Website</Text>

  </View>
  </LinearGradient>

        );
    }
    about () {
        return (
          <LinearGradient
    colors={['#2193b0', '#6dd5ed']}


  >
          <View style={{flex:1,justifyContent:'center',alignItems:'center',padding:30}}>


  <Text style={{fontWeight:'700',fontSize:35,color:'white',textAlign:'center'}}>Optimize your business with MStore & its services.
</Text>
<Text style={[styles.subtitle,{color:'white',fontWeight:'500'}]}>You are shop-owners of physical stores with high-traffic consumers and think to go digital. Or you are online shop-owners with E-Commerce websites. Both of you want to maximize sale opportunities. MStore is powerful to increase customer experience through the mobile devices. Leading business knows how important its consumer experience is to increase sale.

</Text>

  </View>
  </LinearGradient>

        );
    }
    Demos (number, title, type) {
      const isTinder = type === 'tinder';
        return (
          <View style={[styles.exampleContainer, isTinder ? styles.exampleContainerDark : styles.exampleContainerLight]}>
                          <Text style={[styles.title, isTinder ? {} : styles.titleDark]}>Teaching Programming
</Text>
                          <Text style={[styles.subtitle, isTinder ? {} : styles.titleDark]}>Learn and master programming languages ??????... you will be one of the most powerful programmers</Text>
                          <Image style={{width:'100%',height:200,resizeMode:'contain'}}  source={require("../assets/stripe.png")}/>

                      </View>        );
    }
    credit (number, title, type) {
      const isTinder = type === 'tinder';
        return (
          <View style={[styles.exampleContainer, isTinder ? styles.exampleContainerDark : styles.exampleContainerLight]}>
                          <Text style={[styles.title, isTinder ? {} : styles.titleDark]}>How the computer works
</Text>
                          <Text style={[styles.subtitle, isTinder ? {} : styles.titleDark]}>You will learn how a computer works ... and how you can benefit from a computer</Text>
                          <Image style={{width:'100%',height:200,resizeMode:'contain'}}  source={{uri:'http://www.opentiq.com/digital-team/wp-content/uploads/2019/07/global.png'}}/>

                      </View>        );
    }
    cash (number, title, type) {
      const isTinder = type === 'tinder';
        return (
          <View style={[styles.exampleContainer, isTinder ? styles.exampleContainerDark : styles.exampleContainerLight]}>
                          <Text style={[styles.title, isTinder ? {} : styles.titleDark]}>Cash on Delivery Method</Text>
                          <Text style={[styles.subtitle, isTinder ? {} : styles.titleDark]}>Let your customer pay on Delivery</Text>
                          <Image style={{width:'100%',height:200,resizeMode:'contain'}}  source={require("../assets/cash.png")}/>

                      </View>        );
    }
    Feature () {
        return (

          <View style={{flex:1,justifyContent:'flex-start',alignItems:'flex-start',padding:30,backgroundColor:'#fff',paddingVertical:20}}>
          <Text style={{fontWeight:'700',fontSize:20,color:'#000000',marginVertical:10}}>You are with Digital Team!

</Text>
<Text style={[{color:'#000000',alignSelf:'flex-start'}]}>
You will be able to learn many technical and software things with our powerful team


</Text>
</View>
        );
    }
    why () {
        return (

          <View style={{flex:1,justifyContent:'flex-start',alignItems:'center',padding:30,backgroundColor:'#fff'}}>
          <Image style={{width:'100%',height:150,resizeMode:'contain'}}  source={require("../assets/ecom.png")}/>

          <Text style={{fontWeight:'700',fontSize:20,color:'#000000',alignSelf:'flex-start'}}>Professional Mobile Store Solution
for your business</Text>
          <View style={{flexDirection:'row',justifyContent:'space-between',marginVertical:10,alignSelf:'flex-start'}}>
          <MaterialCommunityIcons name="tablet-cellphone" size={30} color="black" />

            <Text style={[styles.subtitle,{color:'#000000',fontSize:17,fontWeight:'500',alignSelf:'flex-start'}]}>Android & iOS Native App</Text>
            </View>
            <Text style={[styles.subtitle,{color:'#000000',alignSelf:'flex-start'}]}>Your store mobile application can be read in both platforms - iOS and Android with high UI/UX quality. Moreover, the UI is not hybrid app, it???s pure native

</Text>
<View style={{flexDirection:'row',justifyContent:'space-between',marginVertical:10,alignSelf:'flex-start'}}>
<MaterialCommunityIcons name="react" size={30} color="black" />

  <Text style={[styles.subtitle,{color:'#000000',fontSize:17,fontWeight:'500',alignSelf:'flex-start'}]}>High performance & Stability</Text>
  </View>
  <Text style={[styles.subtitle,{color:'#000000',alignSelf:'flex-start'}]}>
Openshop ensures the app stability and high performance by synchronizing update for performance, and having crash report
</Text>

<View style={{flexDirection:'row',justifyContent:'space-between',marginVertical:10,alignSelf:'flex-start'}}>
<MaterialCommunityIcons name="store" size={30} color="black" />

  <Text style={[styles.subtitle,{color:'#000000',fontSize:17,fontWeight:'500',alignSelf:'flex-start'}]}>Full integration with E-commerce website provider</Text>
  </View>
  <Text style={[styles.subtitle,{color:'#000000',alignSelf:'flex-start'}]}>
  Your app will be connected with your WooCommerce website so you can easily manage products and sale.

</Text>

<View style={{flexDirection:'row',justifyContent:'space-between',marginVertical:10,alignSelf:'flex-start'}}>
<MaterialCommunityIcons name="lock" size={30} color="black" />

  <Text style={[styles.subtitle,{color:'#000000',fontSize:17,fontWeight:'500',alignSelf:'flex-start'}]}>Secure payment integration:
</Text>
  </View>
  <Text style={[styles.subtitle,{color:'#000000',alignSelf:'flex-start'}]}>
Openshop supports multi payment gateway (work with 99% of payment services
</Text>
  </View>
        );
    }
    customExample (number, title, refNumber, renderItemFunc) {
        const isEven = refNumber % 2 === 0;

        // Do not render examples on Android; because of the zIndex bug, they won't work as is
        return !IS_ANDROID ? (
            <View style={[styles.exampleContainer, isEven ? styles.exampleContainerDark : styles.exampleContainerLight]}>
                <Text style={[styles.title, isEven ? {} : styles.titleDark]}>Services</Text>
                <Text style={[styles.subtitle, isEven ? {} : styles.titleDark]}>Swipe for more services</Text>
                <Carousel
                  data={isEven ? ENTRIES2 : ENTRIES1}
                  renderItem={renderItemFunc}
                  sliderWidth={sliderWidth}
                  itemWidth={itemWidth}
                  containerCustomStyle={styles.slider}
                  contentContainerCustomStyle={styles.sliderContentContainer}
                  scrollInterpolator={scrollInterpolators[`scrollInterpolator${refNumber}`]}
                  slideInterpolatedStyle={animatedStyles[`animatedStyles${refNumber}`]}
                  useScrollView={true}
                />
            </View>
        ) : false;
    }

    get gradient () {
        return (
            <LinearGradient
              colors={[colors.background1, colors.background2]}
              startPoint={{ x: 1, y: 0 }}
              endPoint={{ x: 0, y: 1 }}
              style={styles.gradient}
            />
        );
    }

    render () {
        const example1 = this.mainExample(1, 'Default layout | Loop | Autoplay | Parallax | Scale | Opacity | Pagination with tappable dots');
        const example2 = this.momentumExample(2, 'Momentum | Left-aligned | Active animation');
        const example3 = this.Feature();
        const example5 = this.Demo();
        const example0 = this.Demos();
        const example6 = this.why();
        const example7 = this.about();
        const example8 = this.customExample(8, 'Custom animation 4', 4, this._renderLightItem);

        return (
            <SafeAreaView style={styles.safeArea}>
            <Header backgroundColor="#000000"
leftComponent={{ icon: 'arrow-back', color: '#fff',onPress:()=>{this.props.navigation.goBack()} }}
centerComponent={{ text: 'MY TITLE', style: { color: '#000000' } }}
rightComponent={{ icon: 'home', color: '#000000' }}
/>
                <View style={styles.container}>

                    <StatusBar
                      translucent={true}
                      backgroundColor={'rgba(0, 0, 0, 0.3)'}
                      barStyle={'light-content'}
                    />
                    { this.gradient }
                    <ScrollView
                      style={styles.scrollview}
                      scrollEventThrottle={200}
                      directionalLockEnabled={true}
                    >

                        { example5 }
                        { example3 }
{ example2}
{example0}
{this.credit()}
                    </ScrollView>
                    <Button full dark iconRight style={{paddingHorizontal:10}} onPress={ ()=>{ Linking.openURL('http://opentiq.com/digital-team')}}>
                               <Text style={{color:'white',fontSize:17,marginHorizontal:10}}>opentiq.com/digital-team</Text>
                               <Icon name='arrow-forward' style={{marginHorizontal:10}}/>

                             </Button>
                                             </View>
            </SafeAreaView>
        );
    }
}
