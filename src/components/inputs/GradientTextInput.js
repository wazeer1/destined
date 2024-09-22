import {StyleSheet, Text, View, TextInput as RNTextInput} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';

const GradientTextInput = ({label, placeholder}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <LinearGradient
        colors={['#8A52F3', '#C53E8D']}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        style={styles.gradient}>
        <RNTextInput style={styles.input} placeholder={placeholder} placeholderTextColor="#eee" />
      </LinearGradient>
    </View>
  );
};

export default GradientTextInput;

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    width: '100%',
  },
  label: {
    marginBottom: 5,
    fontSize: 16,
    color: '#DA489E',
  },
  gradient: {
    width: '100%',
    height: 45,
    borderRadius: 20,
    padding: 2, // Thin padding to create gradient border effect
  },
  input: {
    flex: 1,
    paddingHorizontal: 10,
    backgroundColor: '#03000C',
    borderRadius: 20,
    height: '100%',
    color: '#333',
  },
});
