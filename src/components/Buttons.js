import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';

const Buttons = ({label, onPress}) => {
  return (
    <LinearGradient
      colors={['#DD3562', '#8354FF']}
      style={styles.buttonContainer}
      start={{x: 0, y: 1}}
      end={{x: 1, y: 0}}>
      <TouchableOpacity
        onPress={onPress}
        style={{
          width: '100%',
          height: '100%',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text style={styles.textStyle}>{label}</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
};

export default Buttons;

const styles = StyleSheet.create({
  buttonContainer: {
    width: 200,
    height: 45,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyle: {
    color: '#fff',
    fontWeight: 'bold'
  }
});
