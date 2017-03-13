/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator
} from 'react-native';

import LoginForm from './src/components/loginform/index'

export default class admin extends Component {
  render() {
    return (
      <Navigator initialRoute={{page:"loginform"}}
        renderScene={(route, navigator)=>{
          switch(route.page){
            case 'loginform':
              return <LoginForm navigator={navigator} route={route}/>
            default:
              return <LoginForm />
          }
        }} />
    );
  }
}


AppRegistry.registerComponent('admin', () => admin);
