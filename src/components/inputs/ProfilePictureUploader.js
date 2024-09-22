import React, { useState } from 'react';
import { View, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker';
// import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import CameraIcon from '../../../asset/svg/icons/camera-icon.svg';
import ProfileIcon from '../../../asset/svg/icons/profile-icon.svg';

const ProfilePictureUploader = () => {
  const [imageUri, setImageUri] = useState(null);

  const pickImage = () => {
    const options = {
      mediaType: 'photo',
      quality: 1,
    };

    launchImageLibrary(options, response => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.errorCode) {
        console.log('ImagePicker Error: ', response.errorMessage);
      } else {
        const uri = response.assets[0].uri;
        setImageUri(uri);
      }
    });
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={pickImage} style={styles.profileImageContainer}>
        {imageUri ? (
          <Image source={{ uri: imageUri }} style={styles.profileImage} />
        ) : (
          <ProfileIcon width={50} height={50} />
        )}
        <View style={styles.cameraIconContainer}>
          <CameraIcon width={20} height={20} />
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileImageContainer: {
    width: 120,
    height: 120,
    borderRadius: 75,
    borderColor: '#fff',
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileImage: {
    width: '100%',
    height: '100%',
    borderRadius: 75,
  },
  cameraIconContainer: {
    position: 'absolute',
    bottom: -10,
    right: -5,
    backgroundColor: '#ec407a', // You can adjust this color
    borderRadius: 20,
    padding: 10,
  },
});

export default ProfilePictureUploader;
