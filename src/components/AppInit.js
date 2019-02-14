import React, { Component } from 'react';
import firebase from '@firebase/app';
import '@firebase/auth';
import { connect } from 'react-redux';
import { alreadyLogin, notLoginYet } from '../actions';
import Main from './Main';

class AppInit extends Component {

  componentDidMount() {
    // Initialize Firebase
    var config = {
      apiKey: "AIzaSyDjqrIlnhpS8Dak7E9lGt_l41ua5KqH55A",
      authDomain: "managerjc7-523ca.firebaseapp.com",
      databaseURL: "https://managerjc7-523ca.firebaseio.com",
      projectId: "managerjc7-523ca",
      storageBucket: "managerjc7-523ca.appspot.com",
      messagingSenderId: "967876282551"
    };

    firebase.initializeApp(config);

    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
            this.props.alreadyLogin(user);
        } else {
            this.props.notLoginYet();
        }
    });
  }

  render() {
    return (
        <Main />
    );
  }
}

export default connect(null, { alreadyLogin, notLoginYet })(AppInit);

