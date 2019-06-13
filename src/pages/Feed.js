import React, { Component } from 'react';

import { View, Button } from 'react-native';

// import { Container } from './styles';

export default class Feed extends Component {
  static navigationOptions = {
    title: 'Feed',
  };

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
