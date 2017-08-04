import React from 'react';
import { View, Text, Image, Button, StyleSheet } from 'react-native';

const Main = () => (
  <View style={{
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  }}
  >
    <View style={{ width: '100%', paddingTop: 0 }}>
      <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: 20 }}>This is Groot</Text>
      <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: 20 }}>he is 0 years old.</Text>
    </View>
    <View style={{ width: '100%' }}>
      <Image source={require('../images/0.png')} style={{ width: 200, height: 200 }} />
    </View>
    <View style={styles.alternativeLayoutButtonContainer}>
      <Button
        onPress={() => console.log('Emulate...')}
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

const styles = StyleSheet.create({
  alternativeLayoutButtonContainer: {
    margin: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default Main;
