import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

export default function Reader() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>NFC Reader</Text>
      <View style={styles.buttonView}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Read</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Write</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
};

const styles = StyleSheet.create( {
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#219ff2',
    gap: 10,
  },
title: {
  fontSize: 24,
  fontWeight: 'bold',
  marginBottom: 50,
},
buttonView: {
  flexDirection: 'row',
  gap: 50,
},
button: {
  backgroundColor: 'blue',
  paddingVertical: 15,
  paddingHorizontal: 30,
  borderRadius: 10,
},
buttonText: {
  color: 'white',
  fontSize: 16,
  fontWeight: 'bold',
},
})



