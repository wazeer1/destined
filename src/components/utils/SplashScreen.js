import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Colors} from 'react-native-ui-lib';
import Logo from '../../../asset/svg/logo.svg'
// import LinearGradient from 'react-native-linear-gradient';

const SplashScreen = () => {
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <View>
            <Logo width={200} height={100} />
          {/* <Text>SplashScreen</Text> */}
        </View>
      </SafeAreaView>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1, // This makes the container take up the full available space
    backgroundColor: '#140034', // This sets the background color to red
    justifyContent: 'center', // Vertically centers the content
    alignItems: 'center', // Horizontally centers the content
  },
});
