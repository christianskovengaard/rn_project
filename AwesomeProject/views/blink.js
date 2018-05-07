import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Blink extends Component {
  constructor(props){
      super(props);
      this.state = {isShowingText: true};

    setInterval(() => {
        this.setState(previousState => {
            return {isShowingText: !previousState.isShowingText};
        });
    },800);

  }

 

  render() {

    let display = this.state.isShowingText ? this.props.text : ' ';

    return (
      <View style={styles.blinkContainer}>
        <Text>{display}</Text>
      </View>  

    );
  }
}
const styles = StyleSheet.create({
    blinkContainer: {
      height: 50,
      width: 100,
      backgroundColor: 'red',
      alignItems: 'center',
      justifyContent: 'center',
    },
    
  });