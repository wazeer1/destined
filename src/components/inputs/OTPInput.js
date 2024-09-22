import React, { useState, useRef } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const OTPInput = ({ length = 4, onOtpChange }) => {
  const [otp, setOtp] = useState(Array(length).fill(''));
  const inputs = useRef([]);

  const handleInputChange = (text, index) => {
    let newOtp = [...otp];
    newOtp[index] = text;

    setOtp(newOtp);
    onOtpChange(newOtp.join('')); // Send OTP to parent component

    // Automatically focus the next input
    if (text.length > 0 && index < length - 1) {
      inputs.current[index + 1].focus();
    }
  };

  const handleKeyPress = (e, index) => {
    // Handle backspace press to focus the previous input
    if (e.nativeEvent.key === 'Backspace' && otp[index] === '' && index > 0) {
      inputs.current[index - 1].focus();
    }
  };

  return (
    <View style={styles.otpContainer}>
      {otp.map((digit, index) => (
        <LinearGradient
          key={index}
          colors={['#C53E8D', '#8A52F3']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={styles.gradientBorder}
        >
          <TextInput
            ref={(input) => (inputs.current[index] = input)}
            value={digit}
            onChangeText={(text) => handleInputChange(text, index)}
            onKeyPress={(e) => handleKeyPress(e, index)}
            keyboardType="numeric"
            maxLength={1}
            style={styles.inputBox}
            textAlign="center"
          />
        </LinearGradient>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: 250, // Adjust based on the number of inputs and their size
  },
  gradientBorder: {
    borderRadius: 50, // To make it fully circular
    padding: 2, // To control the border width
    width: 55,
    height: 55,
  },
  inputBox: {
    flex: 1,
    backgroundColor: '#000', // The black background inside the circle
    color: '#fff',
    borderRadius: 50,
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default OTPInput;
