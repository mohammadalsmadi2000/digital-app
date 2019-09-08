import React,{Component} from 'react';
import { StyleSheet, Text, View,ScrollView,Image } from 'react-native';
import { SearchBar ,Header} from 'react-native-elements';
import { Container, Content, Card, CardItem, Thumbnail, Button, Icon, Left, Body, Right } from 'native-base';

export default class Cards extends Component {
  state = {
  search: '',
};
  static navigationOptions = {
      //To hide the ActionBar/NavigationBar
      header: null,
  };
  render(){
    return (
      <View style={{marginVertical:10}}>
      <Card>
            <CardItem>
              <Left>
                <Thumbnail source={{uri: 'https://latestmodapks.com/wp-content/uploads/2017/04/image_20170412_112801_50-264x300.jpg'}} />
                <Body>
                  <Text>sara ahmed</Text>
                  <Text note>cute</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem >
                 <Text>sdfhddfjdfjdfjdjk  jk jkdjkdfsdfkdfhkl  kjkhksshklffshfkdfh</Text>

            </CardItem>
            <CardItem cardBody>

              <Image source={{uri: 'https://www.whatsappprofiledpimages.com/wp-content/uploads/2019/01/Cool-whatsapp-dp-profile-images-2-300x300.jpg'}} style={{height: 200, width: null, flex: 1}}/>
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent>
                  <Icon active name="thumbs-up" />
                  <Text> 3k Likes</Text>
                </Button>
              </Left>
              <Body>
                <Button transparent>
                  <Icon active name="chatbubbles" />
                  <Text> 9k Comments</Text>
                </Button>
              </Body>
              <Right>
                <Text>1 min ago</Text>
              </Right>
            </CardItem>
            <CardItem>
            <Text style={{fontSize:15}}>#physics</Text>
            </CardItem>
          </Card>
          <Card>
                <CardItem>
                  <Left>
                    <Thumbnail source={{uri: 'https://latestmodapks.com/wp-content/uploads/2017/04/image_20170412_112801_50-264x300.jpg'}} />
                    <Body>
                      <Text>sara ahmed</Text>
                      <Text note>cute</Text>
                    </Body>
                  </Left>
                </CardItem>
                <CardItem >
                <View style={{flex:1}}>
                <Text style={{fontSize:17}}>physics review</Text>
                <Text style={{fontSize:15}}>physics review</Text>

</View>
                </CardItem>

                <CardItem>
                  <Left>
                    <Button transparent>
                      <Icon active name="thumbs-up" />
                      <Text> 3k Likes</Text>
                    </Button>
                  </Left>
                  <Body>
                    <Button transparent>
                      <Icon active name="chatbubbles" />
                      <Text> 9k Comments</Text>
                    </Button>
                  </Body>
                  <Right>
                    <Text>1 min ago</Text>
                  </Right>
                </CardItem>
                <CardItem>
                <Text style={{fontSize:15}}>#physics</Text>
                </CardItem>
              </Card>
          </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    width:null,
    height:null,
    padding:20,
backgroundColor:'red'

  },
});
