import React, {useState} from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  Modal,
  StyleSheet,
  Text,
  Platform,
} from 'react-native';
// import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import LinearGradient from 'react-native-linear-gradient';
// import DateTimePicker from '@react-native-community/datetimepicker';
import CalenderIcon from '../../../asset/svg/icons/calendar-icon.svg';
import {DateTimePicker} from 'react-native-ui-lib/src/components/dateTimePicker';
import DateModal from './DateModal';

const DateInput = ({label}) => {
  const [date, setDate] = useState(new Date());
  const [showPicker, setShowPicker] = useState(false);
  const [formattedDate, setFormattedDate] = useState('');
  const [selectedDate, setSelectedDate] = useState(new Date());

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShowPicker(Platform.OS === 'ios');
    setDate(currentDate);
    const formatted = `${currentDate.getDate()}/${
      currentDate.getMonth() + 1
    }/${currentDate.getFullYear()}`;
    setFormattedDate(formatted);
  };

  const showDatePicker = () => {
    setShowPicker(true);
  };

  const handleDateSelect = date => {
    setSelectedDate(date);
  };

  return (
    <View style={{marginTop: 10}}>
      <Text style={{color: '#DA489E', fontSize: 16, marginBottom: 5}}>DOB</Text>
      <LinearGradient
        colors={['#8A52F3', '#C53E8D']}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        style={styles.gradientContainer}>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder={label}
            placeholderTextColor="#888"
            value={selectedDate}
            editable={false}
          />
          <TouchableOpacity
            onPress={showDatePicker}
            style={styles.iconContainer}>
            <CalenderIcon width={20} height={20} />
          </TouchableOpacity>
        </View>
      </LinearGradient>

      {/* Date Picker Modal */}
      {showPicker && (
        <DateModal
          isModalVisible={showPicker}
          onClose={() => setShowPicker(false)}
          onDateSelectCallback={handleDateSelect}
          selectedDate={selectedDate}
          //   testID="dateTimePicker"
          //   value={date}
          //   mode="date"
          //   display="default"
          //   onChange={onChange}
        />
      )}
    </View>
  );
};

export default DateInput;

const styles = StyleSheet.create({
  gradientContainer: {
    borderRadius: 30,
    padding: 2,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#03000C',
    borderRadius: 30,
    paddingHorizontal: 15,
    height: 40,
  },
  input: {
    flex: 1,
    color: '#fff',
    fontSize: 16,
  },
  iconContainer: {
    marginLeft: 10,
  },
});
