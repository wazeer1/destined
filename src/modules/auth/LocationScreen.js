import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  FlatList,
  Alert,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import SearchIcon from '../../../asset/svg/icons/search-icon.svg';
import {generalStyles} from '../../styles/common';
import SearchInput from '../../components/inputs/SearchInput';
import Buttons from '../../components/Buttons';
import LocationInput from '../../components/inputs/LocationInput';
import AuthHeader from '../../components/utils/AuthHeader';

const LocationScreen = () => {
  const [searchLocation, setSearchLocation] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  console.log(searchLocation, '____');
  const [searchItem, setSearchItem] = useState('');

  // Fetch location suggestions from OpenStreetMap (Nominatim)
  const searchPlaces = async query => {
    if (query.length > 2) {
      try {
        const response = await fetch(
          `https://nominatim.openstreetmap.org/search?q=${query}&format=json&addressdetails=1&limit=5`,
        );
        const data = await response.json();
        setSuggestions(data);
      } catch (error) {
        console.error(error);
        Alert.alert('Error', 'Failed to fetch location suggestions');
      }
    } else {
      setSuggestions([]);
    }
  };

  useEffect(() => {
    if (searchLocation.length > 2) {
      searchPlaces(searchLocation);
    }
  }, [searchLocation]);

  const handleLocation = item => {
    setSearchItem(item);
    setSearchLocation('');
  };

  return (
    <LinearGradient colors={['#140034', '#01010D']} style={styles.container}>
      <SafeAreaView>
        <AuthHeader />
        <View style={{paddingVertical: 50}}>
          <View>
            <Text style={generalStyles.authHeading}>Location</Text>
            <Text style={generalStyles.authSubHeading}>
              Let the app locate you to provide best searched results around you
            </Text>
          </View>
          <View style={{width: '100%', marginTop: 30}}>
            <LocationInput value={searchItem} />
            <SearchInput onTextChange={setSearchLocation} value={searchLocation}/>
            <FlatList
              data={suggestions}
              keyExtractor={item => item.place_id}
              renderItem={({item}) => (
                <TouchableOpacity
                  style={styles.suggestionItem}
                  onPress={() => handleLocation(item.display_name)}>
                  <Text style={styles.suggestionText}>{item.display_name}</Text>
                </TouchableOpacity>
              )}
            />
          </View>
          <View style={{paddingVertical: 30, alignItems: 'center'}}>
            <Buttons label={'CONTINUE'} />
          </View>
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default LocationScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    paddingHorizontal: 20,
    // paddingVertical: 50,
  },
  inputContainer: {
    // width: '80%',
  },
  searchInput: {
    backgroundColor: '#111',
    borderRadius: 25,
    paddingVertical: 12,
    paddingHorizontal: 16,
    color: '#fff',
    marginTop: 12,
    paddingLeft: 44,
  },
  // searchIcon: {
  //   position: 'absolute',
  //   left: 20,
  //   top: 15,
  // },
  suggestionItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#444',
  },
  suggestionText: {
    color: '#fff',
  },
  linearContainer: {
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
  },
  inputCover: {
    width: '100%',
    height: '100%',
  },
});
