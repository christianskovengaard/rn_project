import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default class HelloWorld extends Component {
  render() {
    return (
      <View style={styles.helloWorldContainer}>
        <Text style={styles.helloWorldText}>Age: {this.props.age}</Text>
        <Text style={styles.helloWorldText}>Name: {this.props.name}</Text>
        <Text style={styles.helloWorldText}>Hello world testing!</Text>
      </View>  

    );
  }
}

const styles = StyleSheet.create({
  helloWorldContainer: {
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  helloWorldText: {
    color: 'white'
  }
});