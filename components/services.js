import React,{Component} from 'react';
import { StyleSheet, Text, View ,ScrollView,TouchableOpacity,Image} from 'react-native';
import { SearchBar } from 'react-native-elements';
import { Container, Header, Content, Tab, Tabs } from 'native-base';
import { LinearGradient } from 'expo-linear-gradient';
import { SafeAreaView } from 'react-navigation';
export default class Services extends Component {
  state = {
  search: '',
};
  static navigationOptions = {
      //To hide the ActionBar/NavigationBar
      header: null,
  };
  Subs1 () {
      return (

        <View style={{ shadowColor: '#00000021',
            shadowOffset: {
              width: 2
            },
            shadowOpacity: 0.5,
            shadowRadius: 4,
            borderRadius:12,
            marginVertical: 8,
            backgroundColor:"white"}}>
            <LinearGradient
            colors={['#B721FF', '#21D4FD']}
            style={{borderRadius:12}}
          >
      <Image style={{width:null,height:150,resizeMode:'contain'}}  source={require("./assets/subs1.png")}/>
<View style={{justifyContent:'space-between',alignItems:'center',marginVertical:10,paddingVertical:10}}>
<Text style={{fontSize:23,color:'white',fontWeight:'700'}}>

Basic Openshop
</Text>
<Text style={{        backgroundColor: 'transparent',
        color: 'rgba(255, 255, 255, 0.75)',
        fontSize: 13,
        fontStyle: 'italic',
        textAlign: 'center'
}}>

For Small Business
</Text>
<Text style={{fontSize:23,color:'white',fontWeight:'700'}}>

10$/Monthly
</Text>
<TouchableOpacity>
<Text style={{        backgroundColor: 'transparent',
        color: 'white',
        marginVertical:5,
        fontSize: 16,
        textDecorationLine: 'underline',
        fontWeight:'bold',
        textAlign: 'center'
}}>

Try this > </Text>
</TouchableOpacity>
</View>
                           </LinearGradient>

        </View>
      );
  }
  Subs2 () {
      return (

        <View style={{ shadowColor: '#00000021',
            shadowOffset: {
              width: 2
            },
            shadowOpacity: 0.5,
            shadowRadius: 4,
            borderRadius:12,
            marginVertical: 8,
            backgroundColor:"white"}}>
            <LinearGradient
            colors={['#B721FF', '#21D4FD']}
            style={{borderRadius:12}}
          >
      <Image style={{width:null,height:150,resizeMode:'contain'}}  source={require("./assets/subs2.png")}/>
<View style={{justifyContent:'space-between',alignItems:'center',marginVertical:10,paddingVertical:10}}>
<Text style={{fontSize:23,color:'white',fontWeight:'700'}}>

 Openshop
</Text>
<Text style={{        backgroundColor: 'transparent',
        color: 'rgba(255, 255, 255, 0.75)',
        fontSize: 13,
        fontStyle: 'italic',
        textAlign: 'center'
}}>

For Big Business
</Text>
<Text style={{fontSize:23,color:'white',fontWeight:'700'}}>

30$/Monthly
</Text>
<TouchableOpacity>
<Text style={{        backgroundColor: 'transparent',
        color: 'white',
        marginVertical:5,
        fontSize: 16,
        textDecorationLine: 'underline',
        fontWeight:'bold',
        textAlign: 'center'
}}>

Try this > </Text>
</TouchableOpacity>
</View>
                           </LinearGradient>

        </View>
      );
  }
  Subs3 () {
      return (

        <View style={{ shadowColor: '#00000021',
            shadowOffset: {
              width: 2
            },
            shadowOpacity: 0.5,
            shadowRadius: 4,
            borderRadius:12,
            marginVertical: 8,
            backgroundColor:"white"}}>
            <LinearGradient
            colors={['#B721FF', '#21D4FD']}
            style={{borderRadius:12}}
          >
      <Image style={{width:null,height:150,resizeMode:'contain'}}  source={require("./assets/subs3.png")}/>
<View style={{justifyContent:'space-between',alignItems:'center',marginVertical:10,paddingVertical:10}}>
<Text style={{fontSize:23,color:'white',fontWeight:'700'}}>

Big Openshop
</Text>
<Text style={{        backgroundColor: 'transparent',
        color: 'rgba(255, 255, 255, 0.75)',
        fontSize: 13,
        fontStyle: 'italic',
        textAlign: 'center'
}}>

For Enterprise Business
</Text>
<Text style={{fontSize:23,color:'white',fontWeight:'700'}}>

70$/Monthly
</Text>
<TouchableOpacity>
<Text style={{        backgroundColor: 'transparent',
        color: 'white',
        marginVertical:5,
        fontSize: 16,
        textDecorationLine: 'underline',
        fontWeight:'bold',
        textAlign: 'center'
}}>

Try this > </Text>
</TouchableOpacity>
</View>
                           </LinearGradient>

        </View>
      );
  }

  render() {
    return (
      <SafeAreaView style={{flex:1}}>
      <View style={styles.container}>
      <ScrollView>
    {this.Subs1()}
    {this.Subs2()}
    {this.Subs3()}
</ScrollView>
      </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    paddingHorizontal:20,
    backgroundColor:'#1a1917',
    marginTop:20,
  },
  list: {
    paddingHorizontal: 17,
    backgroundColor:"#E6E6E6",
  },
  separator: {
    marginTop: 10,
  },
  /******** card **************/
  card:{
    shadowColor: '#00000021',
    shadowOffset: {
      width: 2
    },
    shadowOpacity: 0.5,
    shadowRadius: 12,
    marginVertical: 8,
    borderRadius:12,
    backgroundColor:"white"
  },
  cardHeader: {
    paddingVertical: 17,
    paddingHorizontal: 16,
    borderTopLeftRadius: 1,
    borderTopRightRadius: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cardContent: {
    paddingVertical: 12.5,
    paddingHorizontal: 16,
  },
  cardFooter:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 12.5,
    paddingBottom: 25,
    paddingHorizontal: 16,
    borderBottomLeftRadius: 1,
    borderBottomRightRadius: 1,
  },
  cardImage:{
    flex: 1,
    height: 200,
    width: 500,
  },
  /******** card components **************/
  title:{
    fontSize:18,
    flex:1,
  },
  time:{
    fontSize:13,
    color: "#808080",
    marginTop: 5
  },
  icon: {
    width:25,
    height:25,
  },
  /******** social bar ******************/
  socialBarContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    flex: 1
  },
  socialBarSection: {
    justifyContent: 'center',
    flexDirection: 'row',
    flex: 1,
  },
  socialBarlabel: {
    marginLeft: 8,
    alignSelf: 'flex-end',
    justifyContent: 'center',
  },
  socialBarButton:{
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  }
});
