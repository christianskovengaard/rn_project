import React from 'react';
import { Alert, StyleSheet, Text, View, Button } from 'react-native';
import HelloWorld from './views/helloWorld';
import Blink from './views/blink';
import PizzaTranslator from './views/pizzaTranslator';


export default class App extends React.Component {

  onPressButton() {
    Alert.alert('Button pressed');
  }


  render() {
    return (
      <View style={styles.container}>

        <View style={{ flexDirection: 'row'}}>
          <Text style={{width: 100, height: 50, backgroundColor: 'powderblue'}}>Open up App.js to start working on your app!</Text>
          <Text style={{width: 100, height: 50, backgroundColor: 'skyblue'}}>Changes you make will automatically reload.</Text>
          <Text style={{width: 100, height: 50, backgroundColor: 'steelblue'}}>Shake your phone to open the developer menu.</Text>
        </View>
      
        //HelloWorld component
        <HelloWorld name='ole' age='123'/>  
      
        //Blink component
        <Blink text='Blink Blink' />
      
        //PizzaTranslator component
        <PizzaTranslator/>

        <Button
          onPress={this.onPressButton}
          title='Press me!'
        />

      </View>
    );

  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
   marginTop: 100,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
