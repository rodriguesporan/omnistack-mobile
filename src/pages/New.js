import React, { Component } from 'react';

import { View, Button } from 'react-native';

// import { Container } from './styles';

export default class New extends Component {
  static navigationOptions = {
    title: 'New',
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <Button
          title="Go to Feed"
          onPress={() => navigate('Feed')}
        />
      </View>
    );
  }
}
