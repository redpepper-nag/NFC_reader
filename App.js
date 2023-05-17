import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { useState } from 'react';

export default function App() {

  return (
    <View style={styles.container}>
      <Text style={styles.title}>NFC reader</Text>
      <Button style={styles.button} title="Read" />
      <Button style={styles.button} title="Write" />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#e3ce9a'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  button: {
  }
});
