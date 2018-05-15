/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  View,
  Text
} from 'react-native';

import {Provider} from 'react-redux'
import { StackNavigator } from 'react-navigation'
import List from './src/views/list'
import Details from './src/views/details'

import configureStore from './src/configureStore';

const store = configureStore();

const RootStack = StackNavigator({
  Home: {
    screen: List,
  },
  Details: {
    screen: Details,
  }
});

export default  class App extends Component {
 
  render() {
    
    return (
      <Provider store={store}>
        <RootStack/>
      </Provider>
    );
  }
}