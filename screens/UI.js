import React, { Component } from 'react';
import { Platform, View, ScrollView,Dimensions, Text, StatusBar, SafeAreaView,TouchableOpacity,Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import { sliderWidth, itemWidth } from '../example/src/styles/SliderEntry.style';
import SliderEntry from '../example/src/components/SliderEntry';
import styles, { colors } from '../example/src/styles/index.style';
import { ENTRIES1, ENTRIES2,ENTRIES3,APP } from '../example/src/static/entries';
import { scrollInterpolators, animatedStyles } from '../example/src/utils/animations';
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import {  Button,Icon} from 'native-base';
import { Header } from 'react-native-elements'

const IS_ANDROID = Platform.OS === 'android';
const SLIDER_1_FIRST_ITEM = 1;
const entireScreenWidth = Dimensions.get('window').width;

export default class UI extends Component {
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

    momentumExample (number, title, type) {
      const isTinder = type === 'tinder';
        return (
          <View style={[styles.exampleContainer, isTinder ? styles.exampleContainerDark : styles.exampleContainerLight]}>
                          <Text style={[styles.title, isTinder ? {} : styles.titleDark]}>App Themes</Text>
                          <Text style={[styles.subtitle, isTinder ? {} : styles.titleDark]}>Explore the best Theme for your store</Text>
                          <Carousel
                            data={isTinder ? ENTRIES2 : APP}
                            renderItem={isTinder ? this._renderLightItem : this._renderItem}
                            sliderWidth={sliderWidth}
                            itemWidth={itemWidth}
                            containerCustomStyle={styles.slider}
                            contentContainerCustomStyle={styles.sliderContentContainer}
                            layout={type}
                            loop={true}
                          />
                      </View>        );
    }
    Demo () {
        return (
          <LinearGradient
    colors={['#396afc', '#2948ff']}


  >
          <View style={{flex:1,justifyContent:'center',alignItems:'center',padding:30}}>

  <Text style={[styles.subtitle,{color:'#ffffff'}]}>APP UI</Text>

  <Text style={{fontWeight:'700',fontSize:35,color:'white',textAlign:'center'}}>Explore Our Theme for Mobile App</Text>

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
    Demos () {
        return (

          <View style={{flex:1,justifyContent:'center',alignItems:'center',padding:30}}>


  <Text style={{fontWeight:'500',fontSize:23,color:'#ffffff',textAlign:'center'}}>
  Try Demo App
</Text>
<Button bordered light rounded style={{padding:25,marginVertical:10}}>
          <Text style={{color:'white',fontWeight:'500'}}>Try Now</Text>
        </Button>


  </View>

        );
    }
    Feature () {
        return (

          <View style={{flex:1,justifyContent:'flex-start',alignItems:'flex-start',padding:30,backgroundColor:'#fff',paddingVertical:20}}>
          <Text style={{fontWeight:'700',fontSize:20,color:'#000000',marginVertical:10}}>List of available features
</Text>
<Text style={[{color:'#000000',alignSelf:'flex-start'}]}>
* Multi payment gateway (work with 99% your payment gateway)

</Text>

<Text style={[{color:'#000000',alignSelf:'flex-start'}]}>
* Registration with Wordpress User and Social account.
</Text>

<Text style={[{color:'#000000',alignSelf:'flex-start'}]}>
* Support Rating and comment on products.
</Text>

<Text style={[{color:'#000000',alignSelf:'flex-start'}]}>
* Basic of e-commerce features: My Order, Wishlist, Shipping, Coupon, Billing Address, Checkout, My Order, support Product variant.

</Text>

<Text style={[{color:'#000000',alignSelf:'flex-start'}]}>
* Integrate with your existing Wordpress/WooCommerce/Dokan with ease (no extra customization)

</Text>

<Text style={[{color:'#000000',alignSelf:'flex-start'}]}>
* Easy whilte-label your app by few step to update the config, color, images, language files.

</Text>

<Text style={[{color:'#000000',alignSelf:'flex-start'}]}>
* Flexible filter by category and multi product layout display

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
            <Text style={[styles.subtitle,{color:'#000000',alignSelf:'flex-start'}]}>Your store mobile application can be read in both platforms - iOS and Android with high UI/UX quality. Moreover, the UI is not hybrid app, it’s pure native

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
            <Header backgroundColor="#396afc"
leftComponent={{ icon: 'arrow-back', color: '#fff',onPress:()=>{this.props.navigation.goBack()} }}
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

                    </ScrollView>

                                             </View>
            </SafeAreaView>
        );
    }
}
