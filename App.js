import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {

  const [outputText, setOutputText] = useState('unClicked')


  return (
    <View style={styles.container}>
      <Text style={styles.text}>{outputText}</Text>
      <Button style={styles.btn} title="Click" onPress={() => setOutputText('The text clicked') }></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#240b36',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#e627b3'
  },
  text: {
    color: '#e627b3'
  },
  btn: {
    color: '#e627b3'
  }
});
