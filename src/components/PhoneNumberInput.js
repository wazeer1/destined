import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import CountryPicker from 'react-native-country-picker-modal'; // Corrected import statement

const PhoneNumberInput = ({phoneNumber, onPhoneNumberChange}) => {
  return (
    <View style={styles.gradientBorder}>
      <View style={styles.inputContainer}>
        <CountryPicker
          countryCode="US"
          withCallingCode
          withFlag
          onSelect={country => {
            console.log(country.callingCode); // Use the selected country code
          }}
        />
        <TextInput
          style={styles.textInput}
          value={phoneNumber}
          onChangeText={onPhoneNumberChange}
          keyboardType="phone-pad"
          placeholder="Enter phone number"
          placeholderTextColor="#fff"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  gradientBorder: {
    borderRadius: 30,
    padding: 1, // Adjust the padding to control the border width
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#000', // Background color inside the border
    borderRadius: 30,
    paddingVertical: 10,
    paddingHorizontal: 15,
    width:300,
    borderWidth:1,
    borderColor:'#C53E8D'
  },
  textInput: {
    flex: 1,
    color: '#fff', // Text color
    fontSize: 18,
    width: 200,
    marginLeft: 10,
  },
});

export default PhoneNumberInput;
