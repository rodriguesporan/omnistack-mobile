import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import api from '../services/api';
import camera from '../assets/camera.png';
import more from '../assets/more.png';
import like from '../assets/like.png';
import comment  from '../assets/send.png';
import send from '../assets/send.png';

// import { Container } from './styles';

const styles = StyleSheet.create({

});

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

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.state.feed}
          keyExtractor={post => post._id}
          renderItem={({ item }) => (
            <View style={styles.feedItem}>
              <View style={styles.feedItemHeader}>
                <View style={styles.userInfo}>
                  <Text style={styles.name}>{item.author}</Text>
                  <Text style={styles.place}>{item.place}</Text>
                </View>
                <Image source={more} />
              </View>
              <Image style={styles.feedImage} source={{ uri: `http://localhost:3000/files/${item.image}` }} />
              <View style={styles.feedItemFooter}>
                <View style={styles.actions}>
                  <TouchableOpacity onPress={() => {}}>
                    <Image source={like} />
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => {}}>
                    <Image source={comment} />
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => {}}>
                    <Image source={send} />
                  </TouchableOpacity>
                </View>
                <Text style={styles.likes}>{item.likes} curtidas</Text>
                <Text style={styles.description}>{item.description}</Text>
                <Text style={styles.hashtags}>{item.hashtags}</Text>
              </View>
            </View>
          )}
        />
      </View>
    );
  }
}
