import {StyleSheet, StatusBar, Platform} from 'react-native';
import colors from './colors';

// Use 'export const' or 'export default' correctly
export const generalStyles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.white,
    paddingTop: Platform.select({ios: 0, android: StatusBar.currentHeight}),
  },
  container: {
    paddingHorizontal: 20,
  },
  authHeading: {
    color: '#fff',
    fontSize: 36,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  authSubHeading: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 500,
  },
});
