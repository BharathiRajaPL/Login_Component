import React,{ Component } from 'react';
import {View,Text} from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common/Index';
import LoginForm from './components/LoginForm';

class App extends Component {
  componentWillMount() {
    firebase.initializeApp({
    apiKey: "AIzaSyDDaMUy3Q6ayTMOdzPRBzcyJ8Bkj72uRDU",
    authDomain: "authentication-d033e.firebaseapp.com",
    databaseURL: "https://authentication-d033e.firebaseio.com",
    projectId: "authentication-d033e",
    storageBucket: "authentication-d033e.appspot.com",
    messagingSenderId: "569339769822"
  });
  }
  render() {
    return (
      <View>
      <Header headerText="Authenticator" />
      <LoginForm />
      </View>
    );
  }
}

export default App;
