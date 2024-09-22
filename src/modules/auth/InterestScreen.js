import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import AuthHeader from '../../components/utils/AuthHeader';
import {generalStyles} from '../../styles/common';
import interestData from '../../components/datas/InterestData';
import Buttons from '../../components/Buttons';
import {useNavigation} from '@react-navigation/native';

const InterestScreen = () => {
  const [selected, setSelected] = useState([]);

  const navigation = useNavigation();

  // Handle selection
  const handleSelect = item => {
    setSelected(prev =>
      prev.includes(item) ? prev.filter(i => i !== item) : [...prev, item],
    );
  };

  return (
    <LinearGradient colors={['#140034', '#01010D']} style={{flex: 1}}>
      <SafeAreaView>
        <AuthHeader />
        <View style={{paddingBottom: 20}}>
          <Text style={generalStyles.authHeading}>Likes, Interests</Text>
          <Text style={generalStyles.authSubHeading}>
            Share your likes & passion with others
          </Text>
        </View>

        {/* Interest Grid */}
        <View
          style={{
            ...generalStyles.container,
            flexDirection: 'row',
            flexWrap: 'wrap',
            gap: 20,
            justifyContent: 'center',
          }}>
          {interestData.map(item => {
            const isSelected = selected.includes(item);
            return (
              <TouchableOpacity
                key={item.name}
                style={[
                  styles.container,
                  isSelected && styles.selectedContainer, // Apply selected styles
                ]}
                onPress={() => handleSelect(item)}>
                <View
                  style={{flexDirection: 'row', gap: 10, alignItems: 'center'}}>
                  {item.icon}
                  <Text
                    style={[styles.text, isSelected && styles.selectedText]}>
                    {item.name}
                  </Text>
                </View>
              </TouchableOpacity>
            );
          })}
        </View>
        <View style={styles.buttonContainer}>
          <Buttons
            label={'Continue'}
            onPress={() => navigation.navigate('ImageUpload')}
          />
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default InterestScreen;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderWidth: 2,
    backgroundColor: '#1B1142',
    width: '45%',
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
    borderColor: '#B783EB', // Default border color
  },
  selectedContainer: {
    backgroundColor: '#03000C', // Background color when selected
    borderColor: '#FFFFFF', // Border color when selected
  },
  text: {
    color: '#B783EB', // Default text color
  },
  selectedText: {
    color: '#FFFFFF', // Text color when selected
  },
  buttonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 50,
  },
});
