import {
  StatusBar,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from 'react-native';
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import PhoneNumberInput from '../../components/PhoneNumberInput';
import LinearGradient from 'react-native-linear-gradient';
import Buttons from '../../components/Buttons';
import {OrDivider} from '../../components/Dividers';
import FacebookIcon from '../../../asset/svg/icons/facebook.svg';
import GoogleIcon from '../../../asset/svg/icons/google-icon.svg';
import {useNavigation} from '@react-navigation/native';
import {auth} from '../../utils/firebase';

const SignInScreen = () => {
  const {height} = useWindowDimensions();
  const [phoneNumber, setPhoneNumber] = useState('');
  const [verificationId, setVerificationId] = useState(null);
  const [verificationCode, setVerificationCode] = useState('');
  const [message, setMessage] = useState('');

  const navigation = useNavigation();
  const sendOTP = async () => {
    try {
      const confirmation = await auth().signInWithPhoneNumber(phoneNumber);
      console.log(confirmation, '_____');
      setVerificationId(confirmation.verificationId); // Save the verificationId for later
      setMessage('OTP has been sent to your phone number.');
    } catch (error) {
      setMessage(`Failed to send OTP: ${error.message}`);
    }
  };

  return (
    <>
      {/* <StatusBar
          barStyle="light-content" // Ensure the text is visible
          backgroundColor="#0E0223"
          translucent={false} // Set to false if you want a solid color background
        /> */}
      {/* <SafeAreaView style={styles.safeArea}> */}
      <View style={[styles.container, {height}]}>
        <View style={{alignItems: 'center', paddingBottom: 50}}>
          <View style={styles.textContainer}>
            <Text style={styles.textStyle}>Login</Text>
            <Text style={styles.textStyle2}>
              Please enter your valid phone number. We will send you a 4-digit
              code to verify
            </Text>
          </View>
          <View style={{marginTop: 20}}>
            <PhoneNumberInput onPhoneNumberChange={t => setPhoneNumber(t)} />
          </View>
          <View style={{marginTop: 25}}>
            <Buttons
              label="Submit"
              // onPress={() => navigation.navigate('Otp')}
              onPress={() => sendOTP()}
            />
          </View>
        </View>
        <View style={{width: '100%', paddingHorizontal: 20}}>
          <OrDivider />
        </View>
        <View style={{paddingTop: 40}}>
          <Text style={styles.labelText}>Login using</Text>
          <View style={styles.iconCover}>
            <View style={styles.iconContainer}>
              <FacebookIcon width={20} height={20} />
            </View>
            <View style={styles.iconContainer2}>
              <GoogleIcon width={20} height={20} />
            </View>
          </View>
        </View>
      </View>
      {/* </SafeAreaView> */}
    </>
  );
};

export default SignInScreen;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: '#140034',
    justifyContent: 'center', // Optional: Center the content vertically
    alignItems: 'center', // Optional: Center the content horizontally
  },
  text: {
    color: 'white', // Optional: Change text color for better visibility
    fontSize: 24, // Optional: Adjust font size
  },
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
  labelText: {
    color: '#fff',
    fontSize: 20,
    textAlign: 'center',
  },
  iconContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#2942C7',
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconContainer2: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#DF4D5F',
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconCover: {
    flexDirection: 'row',
    gap: 15,
    paddingTop: 30,
  },
});
