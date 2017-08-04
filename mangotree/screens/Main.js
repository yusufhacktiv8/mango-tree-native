import React from 'react';
import { View, Text, Image, Button, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { emulateTree } from '../actions';

const styles = StyleSheet.create({
  alternativeLayoutButtonContainer: {
    margin: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#47A388',
    alignItems: 'center',
  },
});

const Main = ({ tree, emulateTree }) => (

  <View
    style={{
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#47A388',
    }}
  >
    <View style={{ width: '100%', paddingTop: 0, alignItems: 'center' }}>
      <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: 20 }}>This is {tree.name}</Text>
      <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: 20 }}>he is {tree.age} years old.</Text>
    </View>
    <View style={{ width: '100%', alignItems: 'center' }}>
      <Image source={require('../images/0.png')} style={{ width: 200, height: 200 }} />
    </View>
    <View style={styles.alternativeLayoutButtonContainer}>
      <Button
        onPress={() => emulateTree()}
        title="Emulate"
      />
      <Button
        onPress={() => console.log('Harvest...')}
        title="Harvest"
        color="#841584"
      />
    </View>
  </View>
);


const mapStateToProps = state => ({
  tree: state.tree,
});

const mapDispatchToProps = dispatch => ({
  emulateTree: () => dispatch(emulateTree()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);
