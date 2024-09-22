import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import AuthHeader from '../../components/utils/AuthHeader';
import {generalStyles} from '../../styles/common';
import ProfilePictureUploader from '../../components/inputs/ProfilePictureUploader';
import GradientTextInput from '../../components/inputs/GradientTextInput';
import DateInput from '../../components/inputs/DateInput';
import GenderInput from '../../components/inputs/GenderInput';
import Buttons from '../../components/Buttons';
import {useNavigation} from '@react-navigation/native';

const ProfileDetails = () => {
  const navigation = useNavigation();
  return (
    <LinearGradient colors={['#140034', '#01010D']} style={{flex: 1}}>
      <SafeAreaView>
        <AuthHeader />
        <View style={{...generalStyles.container, paddingVertical: 30}}>
          <View>
            <Text style={generalStyles.authHeading}>Profile Details</Text>
            <Text style={generalStyles.authSubHeading}>
              Fill up the following details
            </Text>
          </View>
          <View style={{paddingVertical: 20}}>
            <ProfilePictureUploader />
          </View>
          <View>
            <GradientTextInput
              placeholder={'Enter your First name'}
              label={'First name'}
            />
            <GradientTextInput
              placeholder={'Enter your Last name'}
              label={'Last name'}
            />
            <DateInput label="DOB" />
            <GenderInput />
          </View>
          <View style={{alignItems: 'center', paddingVertical: 50}}>
            <Buttons
              label={'Continue'}
              onPress={() => navigation.navigate('Interest')}
            />
          </View>
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default ProfileDetails;

const styles = StyleSheet.create({});
