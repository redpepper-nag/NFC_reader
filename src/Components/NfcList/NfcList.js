import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

export default function NfcList(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>My tags</Text>
      {props.tags.map((tag) => {
        return (
          <View style={styles.tag}>
            <Text>{tag.level}, {tag.gym}, {tag.date}</Text>
          </View>
        )
      })}
    </View>
  )
};

const styles = StyleSheet.create({
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
