import React, { Component } from 'react';

import { View, Button, Image, TouchableOpacity } from 'react-native';

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

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <Button
          title="Go to New"
          onPress={() => navigate('New')}
        />
      </View>
    );
  }
}
