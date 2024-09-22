import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import OTPInput from '../../components/inputs/OTPInput';
import Buttons from '../../components/Buttons';
import GradientText from '../../components/GradientText';
import { useNavigation } from '@react-navigation/native';

const OtpScreen = () => {
  const [otp, setOtp] = useState('');
  const navigation = useNavigation()
  return (
    <LinearGradient
      colors={['#140034', '#01010D']}
      style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <View>
        <View style={styles.textContainer}>
          <Text style={styles.textStyle}>Verify</Text>
          <Text style={styles.textStyle2}>
            Please enter the 4-digit code sent to your number
          </Text>
          <View style={{alignItems: 'center', paddingVertical: 30}}>
            <OTPInput length={4} onOtpChange={setOtp} />
          </View>
          <View style={{alignItems: 'center'}}>
            <Buttons label={'Submit'} onPress={()=>navigation.navigate('Personal')}/>
            <TouchableOpacity style={{marginTop:40}}>
                <Text style={{fontWeight:'bold',color:'#DD3562',fontSize:16}}>Resend OTP</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </LinearGradient>
  );
};

export default OtpScreen;

const styles = StyleSheet.create({
  textContainer: {
    width: '80%',
  },
  textStyle: {
    color: '#fff',
    fontSize: 36,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  textStyle2: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '500', // Corrected fontWeight value
    textAlign: 'center',
  },
});
