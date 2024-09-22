import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react';
import BackIcon from '../../../asset/svg/icons/back-icon.svg';
import { useNavigation } from '@react-navigation/native';

const AuthHeader = () => {
    const navigation = useNavigation()
  return (
    <View style={{paddingHorizontal:20, paddingVertical:10}}>
      <TouchableOpacity onPress={()=>navigation.goBack()}>
        <BackIcon width={25} height={25}/>
      </TouchableOpacity>
    </View>
  )
}

export default AuthHeader

const styles = StyleSheet.create({})