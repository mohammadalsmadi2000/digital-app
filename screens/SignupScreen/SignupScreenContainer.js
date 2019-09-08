import React from "react";
import SignupScreenPresenter from "./SignupScreenPresenter";
import { observer,inject } from 'mobx-react/native'
import firebase from 'firebase'
import { firebaseApp } from '../../firebase'

@inject("appStore") @observer

export default class extends React.Component {
  static navigationOptions = {
    header: null
  };

  state = {
    withEmail: false,
    name: "",
    email: "",
    username:'',
    errMsg:'',
    password: ""
  };

  toggleMethod = () => {
    // eslint-disable-next-line
    this.setState(current => {
      return {
        withEmail: !current.withEmail
      };
    });
  };

  onInputChange = (text, name) => {
    this.setState({
      [name]: text
    });
  };
  _handleSignUp = () => {
      this.setState({errMsg: 'Signing Up...'})
      if (this.state.name.length < 5) {
        this.setState({errMsg: "Your name should be at least 5 characters."})
      }
      else if (this.state.email.length == 0) {
        this.setState({errMsg: "Please enter your email."})
      }
      else if (this.state.password.length == 0) {
        this.setState({errMsg: "Please enter your passowrd."})
      }
      else {
firebaseApp.database().ref('usernameList').child(this.state.username.toLowerCase()).once('value')
        .then((snapshot) => {
          if (snapshot.val()) {
            this.setState({ errMsg: "username not available." })
          }
          else {
            firebaseApp.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
            .then((user) => {
              const userId = firebaseApp.auth().currentUser.uid;
              const userem = firebaseApp.auth().currentUser.email;


              firebaseApp.database().ref('usernameList').child(this.state.username.toLowerCase()).set(userId)
              firebaseApp.auth().currentUser.updateProfile({displayName:this.state.name})
              .then(() => {
                const userId = firebaseApp.auth().currentUser.uid;
                const name= this.state.name
                const username= this.state.username
                const email = firebaseApp.auth().currentUser.email;
                firebaseApp.database().ref('users/' + user.uid)
                .set({
                  userId,
                  name,
                  username,
                  email,
                })
                this.props.appStore.username = name
                this.props.appStore.uid = userId

                this.props.navigation.navigate('profile')
              }, function(error) {
                console.log(error);
              });
            })
            .catch((error) => {
              this.setState({ errMsg: error.message });
            })
          }
        })
      }
    }
  render() {
    const { withEmail, name, email, password,errMsg,username } = this.state;
    return (
      <SignupScreenPresenter
        name={name}
        email={email}
        username={username}
        password={password}
        withEmail={withEmail}
        error={errMsg}
        onSignup={this._handleSignUp}
        toggleMethod={this.toggleMethod}
        onInputChange={this.onInputChange}
      />
    );
  }
}
