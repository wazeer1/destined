import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import DropDownIcon from '../../../asset/svg/icons/dropdown-icon.svg';
import DropModal from './DropModal';

const GenderInput = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selected, setSelected] = useState('Male');
  return (
    <View style={{marginTop: 10}}>
      <Text style={{color: '#DA489E', fontSize: 16, marginBottom: 5}}>
        Gender
      </Text>
      <LinearGradient
        colors={['#C53E8D', '#8A52F3']}
        style={styles.container}
        start={{x: 1, y: 0}}
        end={{x: 0, y: 0}}>
        <TouchableOpacity
          style={styles.inputContainer}
          activeOpacity={0.9}
          onPress={() => setIsModalVisible(true)}>
          <Text style={{color: '#fff'}}>{selected}</Text>
          <DropDownIcon width={10} height={10} />
        </TouchableOpacity>
      </LinearGradient>
      <DropModal
        isModalVisible={isModalVisible}
        selected={selected}
        onClose={selectedOption => {
          setSelected(selectedOption.label);
          console.log('Selected option:', selectedOption);
          setIsModalVisible(false);
        }}
        options={[{label: 'Male'}, {label: 'Female'}, {label: 'Other'}]}
        title="Select an Option"
      />
    </View>
  );
};

export default GenderInput;

const styles = StyleSheet.create({
  container: {
    height: 45,
    borderRadius: 20,
    padding: 2,
  },
  inputContainer: {
    width: '100%',
    height: '100%',
    backgroundColor: '#03000C',
    borderRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    justifyContent: 'space-between',
  },
});
