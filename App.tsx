import React, { useEffect, useState } from 'react';
import {
  StatusBar,
  StyleSheet,
  Text,
  View,
  Platform
} from 'react-native';
import SplashScreen from './src/components/utils/SplashScreen';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import AuthProvider from './src/context/AuthContext';
import RootNavigator from './src/navigation/RootNavigator';

// StatusBar styles and transitions
const STYLES = ['default', 'dark-content', 'light-content'] as const;
const TRANSITIONS = ['fade', 'slide', 'none'] as const;

const App = () => {
  const [splash, setSplash] = useState(true);
  
  useEffect(() => {
    // Simulate loading time for splash screen
    const timer = setTimeout(() => {
      setSplash(false);
    }, 5000);

    // Cleanup timeout on component unmount
    return () => clearTimeout(timer);
  }, []);

  const [hidden, setHidden] = useState(false);
  const [statusBarStyle, setStatusBarStyle] = useState<StatusBarStyle>(
    STYLES[0]
  );
  const [statusBarTransition, setStatusBarTransition] = useState<
    'fade' | 'slide' | 'none'
  >(TRANSITIONS[0]);

  const changeStatusBarVisibility = () => setHidden(!hidden);

  const changeStatusBarStyle = () => {
    const styleId = STYLES.indexOf(statusBarStyle) + 1;
    setStatusBarStyle(styleId === STYLES.length ? STYLES[0] : STYLES[styleId]);
  };

  const changeStatusBarTransition = () => {
    const transition = TRANSITIONS.indexOf(statusBarTransition) + 1;
    setStatusBarTransition(transition === TRANSITIONS.length ? TRANSITIONS[0] : TRANSITIONS[transition]);
  };

  return (
    <View style={{backgroundColor:'#0E0223', flex:1}}>
      <StatusBar
        animated={true}
        backgroundColor="#61dafb"
        barStyle={statusBarStyle}
        showHideTransition={statusBarTransition}
        hidden={hidden}
      />
      {splash ? (
        <SplashScreen />
      ) : (
        <SafeAreaProvider>
          <AuthProvider>
            <RootNavigator />
          </AuthProvider>
        </SafeAreaProvider>
      )}
    </View>
  );
};

export default App;

const styles = StyleSheet.create({});
