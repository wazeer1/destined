// src/navigation/AuthNavigator.js
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SignInScreen from '../modules/auth/SignInScreen';
import SignUpScreen from '../modules/auth/SignUpScreen';
import OtpScreen from '../modules/auth/OtpScreen';
import ProfileDetails from '../modules/auth/ProfileDetails';
import InterestScreen from '../modules/auth/InterestScreen';
import UploadImage from '../modules/auth/UploadImage';
import LocationScreen from '../modules/auth/LocationScreen';

const AuthStack = createStackNavigator();

const AuthNavigator = () => {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen name="SignIn" component={SignInScreen} options={{ headerShown: false }} />
      <AuthStack.Screen name="Otp" component={OtpScreen} options={{ headerShown: false }} />
      <AuthStack.Screen name="SignUp" component={SignUpScreen} options={{ headerShown: false }} />
      <AuthStack.Screen name="Personal" component={ProfileDetails} options={{ headerShown: false }} />
      <AuthStack.Screen name="Interest" component={InterestScreen} options={{ headerShown: false }} />
      <AuthStack.Screen name="ImageUpload" component={UploadImage} options={{ headerShown: false }} />
      <AuthStack.Screen name="Location" component={LocationScreen} options={{ headerShown: false }} />
    </AuthStack.Navigator>
  );
};

export default AuthNavigator;
