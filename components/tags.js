import React,{Component} from 'react';
import { StyleSheet, Text, View,ScrollView } from 'react-native';
import { SearchBar ,Header} from 'react-native-elements';

export default class Tags extends Component {
  state = {
  search: '',
};
  static navigationOptions = {
      //To hide the ActionBar/NavigationBar
      header: null,
  };
  render(){
    return (
      <View style={styles.container}>
    <ScrollView horizontal={true}>
    <View style={{paddingHorizontal:10}}>
<Text style={{fontSize:20}}>#</Text>


    </View>
    <View style={{paddingHorizontal:20}}>
<Text style={{fontSize:20}}>#Calculus</Text>

    </View>
    <View style={{paddingHorizontal:20}}>
<Text style={{fontSize:20}}>#Chemistry</Text>

    </View>
    </ScrollView>

      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
  height:40,
  width:'100%'


  },
});
