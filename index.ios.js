/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var {
  AppRegistry,
  NavigatorIOS,
  StyleSheet,
  Text,
  View,
  Image,
  ActivityIndicatorIOS
} = React;

var ReactFeed = React.createClass({
  render: function() {
    return (
      <View style={styles.container}>
        <Image
            style={styles.logo}
            source={{uri: 'https://avatars3.githubusercontent.com/u/572096?v=3&s=460'}}
        />
        <Text style={styles.welcome}>
          Say meow :3
        </Text>
        <ActivityIndicatorIOS
            size="large"
            color="#0000ff"
        />
        <ActivityIndicatorIOS
            size="large"
            color="#aa00aa"
        />
        <ActivityIndicatorIOS
            size="large"
            color="#aa3300"
        />
        <ActivityIndicatorIOS
            size="large"
            color="#00aa00"
        />
      </View>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  logo: {
    width: 100,
    height: 100,
    backgroundColor: 'red'
  }
});

AppRegistry.registerComponent('ReactFeed', () => ReactFeed);
