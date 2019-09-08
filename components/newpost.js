import React,{Component} from 'react';
import { StyleSheet, Text, View,ScrollView } from 'react-native';
import { SearchBar ,Header} from 'react-native-elements';

export default class NewPost extends Component {
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


      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
flex:1


  },
});
