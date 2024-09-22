import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import AuthHeader from '../../../components/utils/AuthHeader';

const FilterScreen = () => {
  return (
    <LinearGradient colors={['#140034', '#01010D']} style={styles.container}>
      <SafeAreaView>
        <AuthHeader />
        {/* <Text>FilterScreen</Text> */}
      </SafeAreaView>
    </LinearGradient>
  );
};

export default FilterScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
