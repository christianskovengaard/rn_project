/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  FlatList,
  ActivityIndicator,
  TouchableOpacity,
  Image
} from 'react-native';


export default class List extends Component {

  constructor(props) {
    super(props);
    this.state ={ isLoading: true}
    this.renderItem = this.renderItem.bind(this)
  }


  componentWillMount() {
    fetch('https://api.github.com/search/repositories?q=language=javascript&sort=stars')
    .then((response) => response.json())
    .then((responseJson) => {
        
      this.setState({
        isLoading: false,
        dataSource: responseJson,
      }, function(){

      });  
    })
    .catch((error) => {
      console.error(error);
    });
  }
 

  render() {
    if(this.state.isLoading){
      return(
        <View style={{flex: 1, padding: 20}}>
          <ActivityIndicator size="large"/>
          <Text style={styles.welcome}>
            Getting som Popular Github repos
          </Text>
        </View>
      )
    }

    return (
      <View style={styles.container}>      
        <FlatList
          data={this.state.dataSource.items}
          renderItem={this.renderItem}
          keyExtractor={(item, index) => index}
        />
      </View>
    );
  }

  renderItem ({item, index}) {
    return (
      <TouchableOpacity onPress={() => this.props.navigation.navigate('Details', {item: item})}>
        <View style={styles.row}>
          <Image style={styles.image}
                 source={{uri: item.owner.avatar_url}}/>
          <Text style={styles.title}>{parseInt(index) + 1}{'. '}{item.name}</Text>
          <Text>{item.stargazers_count.toLocaleString()} stars</Text>
          <Text style={styles.description}>{item.description}</Text>
        </View>
      </TouchableOpacity>
    )
  }
}

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
