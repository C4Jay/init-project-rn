import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {

  const [outputText, setOutputText] = useState('unClicked')


  return (
    <View style={styles.container}>
      <Text>{outputText}</Text>
      <Button title="Click" onPress={() => setOutputText('The text clicked') }></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eaed28',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#eaed28'
  },
  Text: {
    color: '#27dfe6'
  },
});
