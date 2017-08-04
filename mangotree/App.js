import React from 'react';
import { Provider } from 'react-redux';
import store from './stores';
import AppWithNavigationState from './navigators/AppNavigator';
// import { StyleSheet, Text, View } from 'react-native';
// import MainScreen from './screens/Main';
//
// export default class App extends React.Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         <MainScreen />
//       </View>
//     );
//   }
// }
//
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#47A388',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

class TreeApp extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <AppWithNavigationState />
      </Provider>
    );
  }
}

export default TreeApp;
