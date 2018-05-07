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

export default class Details extends Component {

  constructor(props) {
    super(props);
    this.state = {
      item: [],
      pulls: [],
      isLoading: true
    }
  
  }


  componentDidMount() {
    console.log(this.props.navigation.state.params.item);
    //Get pulls request 
    //const {item} = this.props.navigation.state.params
    //this.state.item = this.props.navigation.state.params;

    let pulls_url = this.props.navigation.state.params.item.pulls_url.split('{')[0];
    fetch(pulls_url)
    .then((response) => response.json())
    .then((responseJson) => {
        
        this.setState({
          pulls: responseJson,
          isLoading: false,
        }, function(){
            
        }); 
    })
    .catch((error) => {
      console.error(error);
    });
    
  }
 

  render() {
    
    this.state.item = this.props.navigation.state.params;
    return (
      <View style={styles.container}>
        <View>
          <Image style={styles.image}
                 source={{uri: this.state.item.item.owner.avatar_url}}
          />
        </View>
        <View style={styles.body}>
          <Text style={styles.title}>{this.state.item.item.name}</Text>
          <Text>{this.state.item.item.description}</Text>
        </View>
        <View>
          {this.state.isLoading && <ActivityIndicator size="large"/>}
          {this.state.pulls.length > 0 && this.renderList()}
        </View>
      </View>
    );
  }


  renderList(){
    
    console.log(this.state.pulls);
    return (
      <View>
        <Text style={styles.pullsTitle}>Pull requests</Text>
        <FlatList
          data={this.state.pulls}
          renderItem={this.renderItem}
          keyExtractor={(item, index) => index}
        />  
      </View>
    );
  }

  renderItem ({item, index}) {
    return (
      <View style={styles.row}>
        <View>
          <Image style={styles.image}
                 source={{uri: item.user.avatar_url}}/>
          <Text>{item.user.login}</Text>
        </View>
        <View>
          <Text style={styles.listTitle}>#{item.number} - {item.title}</Text>
          <Text style={styles.body}>
            {item.body.length > 0 && item.body.substring(0, 150) + '...'}
          </Text>
        </View>
      </View>
    )
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    padding: 20
  },
  row: {
    borderBottomWidth: 1,
    borderColor: '#ccc',
    padding: 10
  },
  textCenter: {textAlign: 'center'},

  title: {
    fontSize: 20,
    fontWeight: '600'
  },

  listTitle: {
    fontSize: 14,
    fontWeight: '600'
  },
  pullsTitle: {
    fontSize: 18,
    fontWeight: '600'
  },
  image: {
    width: 50,
    height: 50
  },

  body: {
    marginBottom: 20,
  },
  description: {
    marginTop: 5,
    fontSize: 14,
  }
})
