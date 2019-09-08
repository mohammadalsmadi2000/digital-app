import React from 'react'
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native'
import { firebaseApp } from '../firebase'
import { NavigationActions } from 'react-navigation'
import { observer,inject } from 'mobx-react/native'
import firebase from 'firebase'
@inject("appStore") @observer

export default class Loading extends React.Component {
  componentDidMount() {
    firebaseApp.auth().onAuthStateChanged(user => {
if (user) {
  this.props.appStore.username = user.displayName
this.props.appStore.uid =user.uid
console.log("--------- loading " + this.props.appStore.uid + " ---------")

}
this.props.navigation.navigate(user ? 'profile' : 'Signup')

    })
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Loading</Text>
        <ActivityIndicator size="large" />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,backgroundColor:'white',
    justifyContent: 'center',
    alignItems: 'center'
  }
})
