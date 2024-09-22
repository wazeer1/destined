import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import MaskedView from '@react-native-community/masked-view';
import LinearGradient from 'react-native-linear-gradient';

const GradientText = ({ text }) => {
  return (
    <MaskedView 
      maskElement={
        <View style={styles.mask}>
          <Text style={styles.text}>{text}</Text>
        </View>
      }
    >
      <LinearGradient
        colors={['#C53E8D', '#8A52F3']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={styles.gradient}
      />
    </MaskedView>
  );
};

const styles = StyleSheet.create({
  mask: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    backgroundColor: 'transparent',
    textAlign: 'center',
  },
  gradient: {
    width: '100%',
    height: 50, // Adjust this height if needed
  },
});

export default GradientText;
