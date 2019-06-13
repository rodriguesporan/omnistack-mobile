import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, FlatList } from 'react-native';
import api from '../services/api';
import camera from '../assets/camera.png';

// import { Container } from './styles';

export default class Feed extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerRight: (
      <TouchableOpacity onPress={() => navigation.navigate('New')}>
        <Image style={{ marginEnd: 20, }} source={camera} />
      </TouchableOpacity>
    ),
  });

  state = {
    feed: [],
  }

  async componentDidMount() {
    // this.registerToSocket();
    const response = await api.get('posts');
    console.log(response.data);
    this.setState({ feed: response.data });
  }

  renderItem({item}) {
    return (
      <Text>{item.author}</Text>
    );
  }

  render() {
    return (
      <View>
        <FlatList
          data={this.state.feed}
          keyExtractor={post => post._id}
          renderItem={this.renderItem}
        />
      </View>
    );
  }
}
