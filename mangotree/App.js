import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MainScreen from './screens/Main';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <MainScreen />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#47A388',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
