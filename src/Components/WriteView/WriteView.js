import React from "react";
import { View, StyleSheet, TextInput } from 'react-native';

const WriteView = (props) => {
  return (
    <View style={styles.container}>
      <TextInput         
        style={styles.input}
        placeholder="Type here"/>
      <TextInput         
        style={styles.input}
        placeholder="Type here"/>
      <TextInput         
        style={styles.input}
        placeholder="Type here"/>
    </View>
  )
};

const styles = StyleSheet.create({
  container : {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#219ff2',
    gap: 10,
  }
  });

  export default WriteView