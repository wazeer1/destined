import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  Alert,
} from 'react-native';
import React, {useState} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import AuthHeader from '../../components/utils/AuthHeader';
import {generalStyles} from '../../styles/common';
import AddIcon from '../../../asset/svg/icons/add-icon.svg';
import DraggableFlatList from 'react-native-draggable-flatlist';
import {launchImageLibrary} from 'react-native-image-picker';
import Buttons from '../../components/Buttons';
import {useNavigation} from '@react-navigation/native';

const UploadImage = () => {
  const navigation = useNavigation();
  const [imageData, setImageData] = useState([
    {id: 1, image: null, order: 1},
    {id: 2, image: null, order: 2},
    {id: 3, image: null, order: 3},
    {id: 4, image: null, order: 4},
    {id: 5, image: null, order: 5},
    {id: 6, image: null, order: 6},
  ]);

  const handleImageUpload = order => {
    const options = {
      mediaType: 'photo',
      maxWidth: 300,
      maxHeight: 300,
      quality: 1,
    };

    launchImageLibrary(options, response => {
      if (response.didCancel) {
        Alert.alert('Cancelled', 'Image selection was cancelled');
      } else if (response.error) {
        Alert.alert('Error', response.error);
      } else if (response.assets && response.assets.length > 0) {
        const updatedImageData = imageData.map(item => {
          if (item.order === order) {
            return {...item, image: response.assets[0].uri};
          }
          return item;
        });
        setImageData(updatedImageData);
      }
    });
  };

  const handleRemoveImage = id => {
    const updatedImageData = imageData.map(item =>
      item.id === id ? {...item, image: null} : item,
    );
    setImageData(updatedImageData);
  };

  const renderItem = ({item, drag}) => {
    console.log('Rendering item:', item);
    return (
      <TouchableOpacity
        style={[
          styles.imageContainer,
          item.image ? styles.imageSelected : styles.imageEmpty,
        ]}
        onLongPress={drag}
        onPress={() => !item.image && handleImageUpload(item.order)}>
        {item.image ? (
          <>
            <TouchableOpacity
              style={styles.closeButton}
              onPress={() => handleRemoveImage(item.id)}>
              <Text style={styles.closeButtonText}>X</Text>
            </TouchableOpacity>
            <Image source={{uri: item.image}} style={styles.image} />
          </>
        ) : (
          <AddIcon width={50} height={50} />
        )}
      </TouchableOpacity>
    );
  };

  const handleDragEnd = ({data}) => {
    // Update the order after drag ends
    const updatedData = data.map((item, index) => ({
      ...item,
      order: index + 1, // Update the order based on the new index
    }));
    setImageData(updatedData);
  };

  return (
    <LinearGradient colors={['#140034', '#01010D']} style={{flex: 1}}>
      <SafeAreaView>
        <View style={{}}>
          <View>
            <AuthHeader />
            <View>
              <Text style={generalStyles.authHeading}>Upload Images</Text>
              <Text style={generalStyles.authSubHeading}>
                Upload images to view on your profile
              </Text>
            </View>
            <View style={{...generalStyles.container, paddingVertical: 20}}>
              <DraggableFlatList
                data={imageData?.sort((a, b) => a.order - b.order)} // Sort by order before rendering
                renderItem={renderItem} // Directly use renderItem
                keyExtractor={item => item.id}
                onDragEnd={handleDragEnd} // Update order after dragging
                numColumns={3}
                columnWrapperStyle={styles.imageGrid}
              />
            </View>
          </View>
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <Buttons
              label="CONTINUE"
              onPress={() => navigation.navigate('Location')}
            />
          </View>
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default UploadImage;

const styles = StyleSheet.create({
  imageGrid: {
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  imageContainer: {
    width: '30%',
    height: 120,
    borderWidth: 2,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    position: 'relative',
  },
  imageEmpty: {
    borderColor: '#DA489E',
    borderStyle: 'dashed',
  },
  imageSelected: {
    borderColor: '#FFFFFF',
    borderStyle: 'solid',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  closeButton: {
    position: 'absolute',
    top: 5,
    right: 5,
    zIndex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    borderRadius: 10,
    padding: 5,
  },
  closeButtonText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
  },
});
