import React, { Component } from 'react';
import { Platform, View,Linking, ScrollView, Image,Text, StatusBar, SafeAreaView,TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import { sliderWidth, itemWidth } from '../example/src/styles/SliderEntry.style';
import SliderEntry from '../example/src/components/SliderEntry';
import styles, { colors } from '../example/src/styles/index.style';
import { ENTRIES1, ENTRIES2 } from '../example/src/static/entries';
import { scrollInterpolators, animatedStyles } from '../example/src/utils/animations';
import { Ionicons } from '@expo/vector-icons';
import { NavigationActions } from 'react-navigation'
import {  Button,Icon} from 'native-base';

const IS_ANDROID = Platform.OS === 'android';
const SLIDER_1_FIRST_ITEM = 1;
import { observer,inject } from 'mobx-react/native'
import firebase from 'firebase'

@inject("appStore") @observer

export default class HomeScreen extends Component {
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
                <Text style={styles.title}>
              Digital Crew </Text>
                <Text style={styles.subtitle}>The world of technology developer.</Text>
                <Carousel
                  ref={c => this._slider1Ref = c}
                  data={ENTRIES1}
                  renderItem={this._renderItemWithParallax}
                  sliderWidth={sliderWidth}
                  itemWidth={itemWidth}
                  hasParallaxImages={true}
                  firstItem={SLIDER_1_FIRST_ITEM}
                  inactiveSlideScale={0.94}
                  inactiveSlideOpacity={0.7}
navigation={this.props.navigation}
                  // inactiveSlideShift={20}
                  containerCustomStyle={styles.slider}
                  contentContainerCustomStyle={styles.sliderContentContainer}
                  loop={true}
                  loopClonesPerSide={2}
                  autoplay={true}
                  autoplayDelay={500}
                  autoplayInterval={3000}
                  onSnapToItem={(index) => this.setState({ slider1ActiveSlide: index }) }
                />
                <Pagination
                  dotsLength={ENTRIES1.length}
                  activeDotIndex={slider1ActiveSlide}
                  containerStyle={styles.paginationContainer}
                  dotColor={'rgba(255, 255, 255, 0.92)'}
                  dotStyle={styles.paginationDot}
                  inactiveDotColor={colors.black}
                  inactiveDotOpacity={0.4}
                  inactiveDotScale={0.6}
                  carouselRef={this._slider1Ref}
                  tappableDots={!!this._slider1Ref}
                />
            </View>
        );
    }

    momentumExample (number, title) {
        return (
            <View style={styles.exampleContainer}>
                <Text style={styles.title}>{`Example ${number}`}</Text>
                <Text style={styles.subtitle}>{title}</Text>
                <Carousel
                  data={ENTRIES2}
                  renderItem={this._renderItem}
                  sliderWidth={sliderWidth}
                  itemWidth={itemWidth}
                  inactiveSlideScale={0.95}
                  inactiveSlideOpacity={1}
                  enableMomentum={true}
                  activeSlideAlignment={'start'}
                  containerCustomStyle={styles.slider}
                  contentContainerCustomStyle={styles.sliderContentContainer}
                  activeAnimationType={'spring'}
                  activeAnimationOptions={{
                      friction: 4,
                      tension: 40
                  }}
                />
            </View>
        );
    }
    Demo () {
        return (
          <View style={[styles.exampleContainer, styles.exampleContainerDark ]}>
          <Text style={[styles.title]}>TRY IT NOW</Text>
          <Text style={[styles.subtitle]}>Check out our demo App</Text>

          <TouchableOpacity >
          <LinearGradient colors={['#12c2e9', '#c471ed', '#f64f59']} style={{padding:20,marginVertical:10,borderRadius:12,flexDirection:'row',alignItems:'center',justifyContent:'space-around'}}>
          <Ionicons name="logo-android" size={32} color="white" />

           <Text style={{fontSize:20,color:'white',fontWeight:'700'}}>TRY IT NOW ON ANDROID</Text>
        </LinearGradient>
  </TouchableOpacity>
  <TouchableOpacity >
  <LinearGradient colors={['#bdc3c7', '#2c3e50']} style={{padding:20,marginVertical:10,borderRadius:12,flexDirection:'row',alignItems:'center',justifyContent:'space-around'}}>
  <Ionicons name="logo-apple" size={32} color="white" />

   <Text style={{fontSize:20,color:'white',fontWeight:'700'}}>TRY IT NOW ON IPHONE</Text>
</LinearGradient>
</TouchableOpacity>


  </View>
        );
    }
    UI () {
        return (
          <View style={[styles.exampleContainer, styles.exampleContainerDark ]}>
          <Text style={[styles.title]}>Explore Opentiq technology</Text>
          <Text style={[styles.subtitle]}>Check out Opentiq development for mobile app and website</Text>
<View style={{justifyContent:'space-around',flexDirection:'row',alignItems:'center'}}>
<Image style={{width:200,height:200,resizeMode:'contain'}}  source={require("./assets/exp.png")}/>
<Button bordered light rounded style={{padding:25,marginVertical:10}} onPress={ ()=>{ Linking.openURL('http://opentiq.com')}}>
          <Text style={{color:'white',fontWeight:'500'}}>Explore Now</Text>
        </Button>
</View>



  </View>
        );
    }
    Feature () {
        return (
          <View style={[styles.exampleContainer, styles.exampleContainerDark ]}>
          <Text style={[styles.title]}>Feature</Text>
          <Text style={[styles.subtitle]}>Get our Feature</Text>
          <View style={{flex:1,flexDirection:'row',justifyContent:'space-around',alignItems:'center',marginVertical:15}}>
          <TouchableOpacity
             style={{
                 borderWidth:1,
                 borderColor:'rgba(0,0,0,0.2)',
                 alignItems:'center',
                 justifyContent:'center',
                 width:50,
                 height:50,
                 backgroundColor:'#fff',
                 borderRadius:50,
               }}
           >
           <Ionicons name="md-card" size={32} color="black" />

           </TouchableOpacity>
           <TouchableOpacity
              style={{
                  borderWidth:1,
                  borderColor:'rgba(0,0,0,0.2)',
                  alignItems:'center',
                  justifyContent:'center',
                  width:50,
                  height:50,
                  backgroundColor:'#fff',
                  borderRadius:50,
                }}
            >
            <Ionicons name="md-cloud-download" size={32} color="black" />

            </TouchableOpacity>
            <TouchableOpacity
               style={{
                   borderWidth:1,
                   borderColor:'rgba(0,0,0,0.2)',
                   alignItems:'center',
                   justifyContent:'center',
                   width:50,
                   height:50,
                   backgroundColor:'#fff',
                   borderRadius:50,
                 }}
             >
             <Ionicons name="ios-phone-portrait" size={32} color="black" />

             </TouchableOpacity>
             <TouchableOpacity
                style={{
                    borderWidth:1,
                    borderColor:'rgba(0,0,0,0.2)',
                    alignItems:'center',
                    justifyContent:'center',
                    width:50,
                    height:50,
                    backgroundColor:'#fff',
                    borderRadius:50,
                  }}
              >
              <Ionicons name="ios-contacts" size={32} color="black" />

              </TouchableOpacity>
           </View>
           <View style={{flex:1,justifyContent:'space-around',alignItems:'center'}}>
           <Text style={[styles.subtitle]}>■ Help student at yarmouk university.</Text>

           <Text style={[styles.subtitle]}>■ Help for technology question.</Text>
           <Text style={[styles.subtitle]}>■ App & Website UI/UX</Text>
           <Text style={[styles.subtitle]}>■ 24/7 Support</Text>

           </View>
</View>
        );
    }

    customExample (number, title, refNumber, renderItemFunc) {
        const isEven = refNumber % 2 === 0;

        // Do not render examples on Android; because of the zIndex bug, they won't work as is
        return (<View style={[styles.exampleContainer, isEven ? styles.exampleContainerDark : styles.exampleContainerLight]}>
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
        </View>)


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
        const example6 = this.customExample(6, 'Custom animation 2', 2, this._renderLightItem);
        const example7 = this.customExample(7, 'Custom animation 3', 3, this._renderDarkItem);
        const example8 = this.customExample(8, 'Custom animation 4', 4, this._renderLightItem);

        return (
            <SafeAreaView style={styles.safeArea}>
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
                        { example1 }

                        { example8 }
                        {example3}
                        {this.UI()}

                    </ScrollView>
                </View>
            </SafeAreaView>
        );
    }
}
