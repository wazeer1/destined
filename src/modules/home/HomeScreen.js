import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import HomeHeader from '../../components/utils/HomeHeader'; // Ensure this component has the proper header items like "Add Story" button
import LocationIcon from '../../../asset/svg/icons/location-icon.svg'; // Replace with your actual icons
import LikeIcon from '../../../asset/svg/icons/like-icon.svg';
import LoveIcon from '../../../asset/svg/icons/heart-icon.svg';
import DislikeIcon from '../../../asset/svg/icons/dislike.svg';
import InfoIcon from '../../../asset/svg/icons/info-icon.svg';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
  const navigation = useNavigation();
  return (
    <LinearGradient colors={['#140034', '#01010D']} style={styles.container}>
      <SafeAreaView style={{flex: 1}}>
        {/* Header with story and icons */}
        <HomeHeader />

        {/* Main content with the profile card */}
        <View style={styles.cardContainer}>
          <View style={styles.card}>
            {/* Top left profile image */}
            <View style={styles.profileImage}>
              {/* Replace with actual image */}
              <View style={styles.profilePlaceholder}></View>
            </View>

            {/* Name and distance */}
            <View style={styles.infoContainer}>
              <Text style={styles.nameText}>Anna Mcconaughey</Text>
              <Text style={styles.distanceText}>1.5 km away</Text>
            </View>

            {/* Floating location icon */}
            <View style={styles.locationIconContainer}>
              <LocationIcon width={24} height={24} />
            </View>
          </View>
        </View>

        {/* Bottom icons */}
        <View style={styles.reactionButtons}>
          <TouchableOpacity>
            <LinearGradient
              colors={['#34F07F', '#10AA7C']}
              style={styles.buttonStyle}>
              <LikeIcon width={20} height={20} />
            </LinearGradient>
          </TouchableOpacity>
          <TouchableOpacity>
            <LinearGradient
              colors={['#FFBC7D', '#EF5533']}
              style={styles.buttonStyle}>
              <LoveIcon width={20} height={20} />
            </LinearGradient>
          </TouchableOpacity>
          <TouchableOpacity>
            <LinearGradient
              colors={['#FF7D95', '#EF3349']}
              style={styles.buttonStyle}>
              <DislikeIcon width={20} height={20} />
            </LinearGradient>
          </TouchableOpacity>
          <TouchableOpacity>
            <LinearGradient
              colors={['#2285FA', '#1B40C1']}
              style={styles.buttonStyle}>
              <InfoIcon width={20} height={20} />
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  cardContainer: {
    flex: 7,
    paddingHorizontal: 20,
    // backgroundColor: 'red',
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  card: {
    width: '100%',
    height: '100%',
    backgroundColor: '#1A0033',
    borderRadius: 20,
    padding: 20,
    justifyContent: 'space-between',
    position: 'relative',
    borderWidth: 2,
    borderColor: '#fff',
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#6A0DAD', // Placeholder color
    justifyContent: 'center',
    alignItems: 'center',
  },
  profilePlaceholder: {
    width: 60,
    height: 60,
    backgroundColor: '#8A2BE2', // Placeholder color for the inner circle
    borderRadius: 30,
  },
  infoContainer: {
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  nameText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#FFF',
  },
  distanceText: {
    fontSize: 14,
    color: '#AAA',
  },
  locationIconContainer: {
    position: 'absolute',
    top: 20,
    right: 20,
    backgroundColor: '#3A0B6A',
    borderRadius: 15,
    padding: 5,
  },
  reactionButtons: {
    flex: 1.5,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    // marginBottom: 20,
    paddingBottom: 40,
    // backgroundColor: 'green',
    

  },
  buttonStyle: {
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
