import {StyleSheet, Text, View, TextInput as RNTextInput} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import LocationIcon from '../../../asset/svg/icons/location-icon.svg';

const LocationInput = ({value}) => {
  return (
    <LinearGradient
      colors={['#8A52F3', '#C53E8D']}
      start={{x: 0, y: 0}}
      end={{x: 1, y: 0}}
      style={styles.gradient}>
      <View style={styles.cover}>
        <RNTextInput
          style={styles.input}
          placeholder="Location"
          placeholderTextColor="#eee"
          value={value}
          onChangeText={(text) => console.log(text)}
        />
        <LocationIcon width={20} height={20} />
      </View>
    </LinearGradient>
  );
};

export default LocationInput;

const styles = StyleSheet.create({
  gradient: {
    width: '100%',
    height: 45,
    borderRadius: 20,
    padding: 2, // Thin padding to create gradient border effect
    marginBottom: 20,
  },
  input: {
    paddingHorizontal: 10,
    backgroundColor: '#03000C',
    borderRadius: 20,
    height: '100%',
    color: '#fff',
    width: '90%',
  },
  cover: {
    width: '100%',
    height: '100%',
    flexDirection: 'row',
    backgroundColor: '#03000C',
    borderRadius: 20,
    alignItems: 'center',
  },
});
