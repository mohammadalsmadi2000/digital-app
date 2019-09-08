import React from "react";
import LoginScreenPresenter from "./LoginScreenPresenter";
import { observer,inject } from 'mobx-react/native'
import firebase from 'firebase'
import { firebaseApp } from '../../firebase'

@inject("appStore") @observer

export default class extends React.Component {
  state = {
    email: "",
    password: "",
    errMsg:"",
  };

  onInputChange = (text, name) => {
    this.setState({
      [name]: text
    });
  };
  _handleSignIn = () => {
    this.setState({errMsg: 'Signing In...'})
  if (this.state.email.length == 0) {
  this.setState({errMsg: "Please enter your email."})
  }
  else if (this.state.password.length == 0) {
  this.setState({errMsg: "Please enter your passowrd."})
  }
  else {
  firebaseApp.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
  .then((user) => {
   firebaseApp.database().ref('users').child(user.uid).once('value')

   this.props.appStore.uid = user.uid
   this.props.appStore.username = user.displayName
   console.log("user displayName: " + user.displayName + " - " + user.uid)
   this.props.navigation.navigate('profile')
  })
  .catch((error) => {
   this.setState({ errMsg: error.message })
  })
  }

  }
  render() {
    const { email, password } = this.state;
    return (
      <LoginScreenPresenter
        email={email}
        password={password}
        onLogin={this._handleSignIn}
        onInputChange={this.onInputChange}
      />
    );
  }
}
