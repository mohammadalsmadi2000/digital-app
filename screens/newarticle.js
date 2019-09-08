import React, { Component } from 'react'
import {
  Text,
  View,
  ScrollView,
  StyleSheet,
  Dimensions,
  TextInput,
  TouchableOpacity,
  LayoutAnimation,
  Platform,
  Image,
  UIManager
} from 'react-native'
import { firebaseApp } from '../firebase'
import { Block, theme } from "galio-framework";
const { height, width } = Dimensions.get('window')
import { NavigationActions } from 'react-navigation'
import { observer,inject } from 'mobx-react/native'
import firebase from 'firebase'
import  {  Constants } from 'expo';
import * as Permissions from 'expo-permissions';
import * as ImagePicker from 'expo-image-picker';
import uuid from 'uuid';
const { width: WindowWidth } = Dimensions.get('window');
import { Button} from 'native-base';

 async function uploadImageAsync(uri) {
  // Why are we using XMLHttpRequest? See:
  // https://github.com/expo/expo/issues/2402#issuecomment-443726662
  const blob = await new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.onload = function() {
      resolve(xhr.response);
    };
    xhr.onerror = function(e) {
      console.log(e);
      reject(new TypeError('Network request failed'));
    };
    xhr.responseType = 'blob';
    xhr.open('GET', uri, true);
    xhr.send(null);
  });

  const ref = firebaseApp
    .storage()
    .ref()
    .child(uuid.v4());
  const snapshot = await ref.put(blob);

  // We're done with the blob, close and release it
  blob.close();

  return await snapshot.ref.getDownloadURL();
}

@inject("appStore") @observer


export default class Newarticle extends Component {
  constructor(props) {
    super(props)

    this.state = {
      postStatus: null,
      postText: '',
      selected: '',admin:'', image: null, spinner: false,
       result: null,
       uploading: false,
       Title:'',
       imagePath: null,
   imageHeight: null,
   imageWidth: null,
    }

    if (Platform.OS === 'android') {
      UIManager.setLayoutAnimationEnabledExperimental(true)
    }
  }

  componentDidUpdate() {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.spring)
  }

  showActionSheet = () => {
     this.ActionSheet.show()
   }
   showActionSheet2 = () => {
      this.ActionSheets.show()
    }
    _maybeRenderImage = () => {
      let { image } = this.state;
      if (image) {
        return(  <View
            style={{
              width: 250,
              marginVertical:10,
              elevation: 2,
              alignSelf: 'center',
              justifyContent:'center',
              alignItems:'center'
            }}>
            <View
              style={{
                shadowColor: 'rgba(0,0,0,1)',
                shadowOpacity: 0.2,
                shadowOffset: { width: 4, height: 4 },
                shadowRadius: 5,
                overflow: 'hidden',
              }}>
              <TouchableOpacity onPress={this._pickImage}>
              <Image source={{ uri: this.state.image}} style={{   borderColor: 'white',

              height: 210,
              marginBottom: 15,
              width: 250,}} />
  </TouchableOpacity>
            </View>


          </View>)
      }else {
        return(  <View
            style={{
              width: 250,
              marginVertical:10,
              elevation: 2,
              alignSelf: 'center',
              justifyContent:'center',
              alignItems:'center'
            }}>
            <View
              style={{

                shadowColor: 'rgba(0,0,0,1)',
                shadowOpacity: 0.2,
                shadowOffset: { width: 4, height: 4 },
                shadowRadius: 5,
                overflow: 'hidden',
              }}>
              <TouchableOpacity onPress={this._pickImage}>
              <Image source={{ uri: 'https://www.grouphealth.ca/wp-content/uploads/2018/05/placeholder-image-300x225.png'}} style={{   borderColor: 'grey',
              height: 210,
              marginBottom: 15,
              width: 250,}} />
  </TouchableOpacity>
            </View>


          </View>)
      }
    };

  async  componentDidMount() {


      await Permissions.askAsync(Permissions.CAMERA_ROLL);
      await Permissions.askAsync(Permissions.CAMERA);

    }
    create = () => {
      this.setState({
        postStatus: 'Posting...',
      })


            const uid = this.props.appStore.uid
            const username = this.props.appStore.username
      const newPostKey = firebase.database().ref().child('article').push().key
            const imageName = `${uid}.jpg`

              const postData = {
                userId:uid,
                title:this.state.Title,
                imagep:this.state.image,
                createdAt: firebase.database.ServerValue.TIMESTAMP,
                updatedAt: firebase.database.ServerValue.TIMESTAMP,
                data:this.state.postText,
                agree:false,
                  username:username,
              }
              let updates = {}

              updates['article/' + newPostKey] = postData

              firebaseApp.database().ref().update(updates)
              .then(() => {
                this.setState({
                                postStatus: 'Changed! Thank You.',
                                image: null,
                              })

                setTimeout(() => {
                }, 1000)
              })
              .catch(() => {
                this.setState({ postStatus: 'Something went wrong!!!' })
              })

            .catch(error => {
              console.log(error)
            })



    }
  render() {
    return (
      <View style={styles.container}>
      <ScrollView>
  {this._maybeRenderImage()}
  <View style={{flexDirection:'row',justifyContent:'space-around',alignItems:'center'}}>
        <Text style={styles.title}>
          {'Create a new Post'.toUpperCase()}
        </Text>
        <Button bordered dark onPress={this.create} style={{padding:30}}>
           <Text>Post</Text>
         </Button>
        </View>
        <Text style={styles.message}>{this.state.postStatus}</Text>
        <View style={styles.inputContainer1}>
          <TextInput
          style={styles.inputField1}
          underlineColorAndroid='transparent'
          placeholder='News Title...'
          value={this.state.Title}
          onChangeText={(text) => this.setState({ Title: text })}
          placeholderTextColor='rgba(0,0,0,.6)'
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
          multiline={true}
          style={styles.inputField}
          underlineColorAndroid='transparent'
          placeholder='Your post...'
          value={this.state.postText}
          onChangeText={(text) => this.setState({ postText: text })}
          placeholderTextColor='rgba(0,0,0,.6)'
          />
        </View>

        </ScrollView>
      </View>
    )
  }

  _handleNewPost() {
    this.setState({
      postStatus: 'Posting...'
    })

    if (this.state.postText.length > 20) {
      const time = Date.now()
      const uid = firebaseApp.auth().currentUser.uid;
      const email = firebaseApp.auth().currentUser.email;
      const newPostKey = firebase.database().ref().child('posts').push().key

      const postData = {
        name: firebaseApp.auth().currentUser.displayName,
        time: time,
        text: this.state.postText,
        puid: newPostKey
      }
      let updates = {}
      updates['/posts/' + newPostKey] = postData
      updates['/users/' + uid + '/posts/' + newPostKey] = postData

      firebase.database().ref().update(updates).then(() => {
        this.setState({ postStatus: 'Posted! Thank You.', postText: '' })
      }).catch(() => {
        this.setState({ postStatus: 'Something went wrong!!!' })
      })
    } else {
      this.setState({ postStatus: 'You need to post at least 20 charecters.' })
    }

    setTimeout(() => {
      this.setState({ postStatus: null })
    }, 2000)
  }
  _pickImage = async () => {
    let pickerResult = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [4, 3],
    });
    this.setState({
           spinner: !this.state.spinner
         });
    this._handleImagePicked(pickerResult);
  };

  _handleImagePicked = async pickerResult => {
      try {
        this.setState({ uploading: true });

        if (!pickerResult.cancelled) {
          uploadUrl = await uploadImageAsync(pickerResult.uri);
          this.setState({ image: uploadUrl });
        }
      } catch (e) {
        console.log(e);
        alert(e);
      } finally {
        this.setState({ uploading: false });
      }
    };

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10
  },
  title: {
    marginTop: 10,
    paddingBottom: 10,
    fontSize: 15,
    color: theme.COLORS.PRIMARY
  },
  message: {
    textAlign: 'left',
    paddingTop: 10,
    paddingBottom: 0
  },
  inputContainer: {
    height:300,width:'100%',
    justifyContent: 'flex-start',
    backgroundColor: 'rgba(255,255,255,.6)',
    marginBottom: 10,
    padding: 5,
    borderWidth: 1,
    borderColor: '#e2e2e2',
    borderRadius: 2,
  },
  inputContainer1: {
    height:50,width:'100%',
    justifyContent: 'flex-start',
    backgroundColor: 'rgba(255,255,255,.6)',
    marginBottom: 10,
    padding: 5,
    borderWidth: 1,
    borderColor: '#e2e2e2',
    borderRadius: 2,
  },
  inputField: {
    flex: 1,
    padding: 0,
    textAlignVertical: 'top'
  },
  inputField1: {
    width:'100%',
    height:50,
    padding: 0,
    textAlignVertical: 'top'
  },
  btnContainer: {
    width: 120,
    height: 40,
    backgroundColor: theme.COLORS.PRIMARY,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center'
  },
  btnText: {
    fontSize: 12,
    color: '#ffffff'
  }
})
