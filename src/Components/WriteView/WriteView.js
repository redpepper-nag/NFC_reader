import React from "react";
import { View, StyleSheet, TextInput, Text } from 'react-native';

const WriteView = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.input}>
        <Text>Level:</Text>
        <TextInput style={styles.inputBox}
          placeholder="Type here" />
      </View>
      <View style={styles.input}>
        <Text>Day:</Text>
        <TextInput style={styles.inputBox}
          placeholder="Type here" />
      </View>
      <View style={styles.input}>
        <Text>Gym:</Text>
        <TextInput style={styles.inputBox}
          placeholder="Type here" />
      </View>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#219ff2',
    gap: 50,
  },
  input: {
    height: 40,
    margin: 12,
    padding: 10,
  },
  inputBox: {
    backgroundColor: "#23a7ff",
    flexDirection: "row",

  },
});

export default WriteView