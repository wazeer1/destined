import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const OrDivider = () => {
  return (
    <View style={styles.container}>
      <View style={styles.line} />
      <Text style={styles.text}>OR</Text>
      <View style={styles.line} />
    </View>
  );
};

const HorizontalDivider = () => {
  return (
    <View style={styles.horizontalLine} />
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  line: {
    flex: 1,
    height: 2,
    backgroundColor: '#3F1444',
  },
  text: {
    marginHorizontal: 10,
    color: '#fff',
    fontWeight: 'bold',
     borderWidth:2,
     borderColor:'#3F1444',
     padding:10,
     borderRadius: 20
  },
  horizontalLine: {
    width: '100%',
    height: 1,
    backgroundColor: '#3F1444',
  },
});

export {OrDivider, HorizontalDivider}