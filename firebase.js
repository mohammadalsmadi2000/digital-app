// import and configure firebase
import * as firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyCxGOc_dLfxWZbMzpVEnO4KaE6BXuOmXi4",
     authDomain: "digital-app-1e13d.firebaseapp.com",
     databaseURL: "https://digital-app-1e13d.firebaseio.com",
     projectId: "digital-app-1e13d",
     storageBucket: "digital-app-1e13d.appspot.com",
     messagingSenderId: "107846761154",
     appId: "1:107846761154:web:3fc277604e9c1f7a"
}
export const firebaseApp = firebase.initializeApp(firebaseConfig)
