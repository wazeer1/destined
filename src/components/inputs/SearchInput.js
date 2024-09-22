import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import SearchIcon from '../../../asset/svg/icons/search-icon.svg';

const SearchInput = ({onTextChange,value}) => {
  return (
    <LinearGradient
      colors={['#8A52F3', '#C53E8D']}
      start={{x: 0, y: 0}}
      end={{x: 1, y: 0}}
      style={styles.gradient}>
      <View style={styles.container}>
        <TextInput
          style={styles.inputStyles}
          onChangeText={onTextChange}
          placeholder="Search..."
          value={value}
          placeholderTextColor="#eee"
        />
        <SearchIcon width={20} height={20} />
      </View>
    </LinearGradient>
  );
};

export default SearchInput;

const styles = StyleSheet.create({
  gradient: {
    width: '100%',
    height: 45,
    borderRadius: 20,
    padding: 2,
  },
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: '#03000C',
    borderRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  inputStyles: {
    width: '80%',
    height: '100%',
    paddingHorizontal: 10,
    color: '#fff',
    fontWeight: 'bold',
  },
});
