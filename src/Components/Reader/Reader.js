import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

export default function Reader() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>NFC reader</Text>
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
})

