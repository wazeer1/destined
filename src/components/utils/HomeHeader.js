import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import AddIcon from '../../../asset/svg/icons/add2.svg';
import LinearGradient from 'react-native-linear-gradient';
import SearchIcon from '../../../asset/svg/icons/search-icon.svg';
import NotiIcon from '../../../asset/svg/icons/notification-icon.svg';
import FilterIcon from '../../../asset/svg/icons/Filter.svg';
import { useNavigation } from '@react-navigation/native';

const HomeHeader = () => {
    const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.left}>
        <LinearGradient colors={['#F64A69', '#EF3349']} style={styles.addCover}>
          <Text style={{color: '#FFF', fontSize: 28, fontWeight: 'bold'}}>
            +
          </Text>
        </LinearGradient>
        <Text style={styles.leftText}>Add Story</Text>
      </TouchableOpacity>
      <View style={{flexDirection: 'row', gap: 15}}>
        <TouchableOpacity>
          <SearchIcon width={25} height={25} />
        </TouchableOpacity>
        <TouchableOpacity>
          <NotiIcon width={25} height={25} />
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>navigation.navigate('Filter')}>
          <FilterIcon width={25} height={25} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeHeader;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  left: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  leftText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  addCover: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: '#F64A69',
  },
});
