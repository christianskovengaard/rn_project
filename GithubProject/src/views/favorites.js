
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  FlatList,
  ActivityIndicator
} from 'react-native';

import * as Actions from '../actions/index'
import { connect } from 'react-redux'

import {removeFavorite} from '../actions'

class Favorites extends Component {

  constructor(props) {
    super(props);
  
  }

  componentDidMount() {
    console.log('favorites loaded');
    console.log(this.props.repos);
  }

  render() {
    
    return (
      <View style={styles.container}>   
        <FlatList
          data={this.props.repos}
          renderItem={this.renderItem.bind(this)}
          keyExtractor={(item, index) => index}
        />
      </View>
    );
  }

  renderItem ({item, index}) {
    console.log('this Item with bind');
    console.log(this);
    return (
        <View style={styles.row}>
          <Text style={styles.title}>{parseInt(index) + 1}{'. '}{item.name}</Text>
          <Button title={'Remove favorite'} 
            onPress={() => this.props.dispatch(removeFavorite(item))}/> 
        </View>
    )
  }

}
    
export default connect(state => state)(Favorites)

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#F5F5F5',
      paddingTop: 25
    },
  
    image: {
      width: 75,
      height: 75
    },
  
    row: {
      borderBottomWidth: 2,
      borderColor: 'black',
      padding: 12
    },
  
    title: {
      fontSize: 18,
      fontWeight: '800'
    },
  
    description: {
      marginTop: 6,
      fontSize: 15,
    }
  });