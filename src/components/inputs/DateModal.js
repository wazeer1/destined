import React, { useState } from 'react';
import { View, Text, Modal, Button, StyleSheet } from 'react-native';
import { Calendar } from 'react-native-calendars';
import { format } from 'date-fns';

const DateModal = ({ isModalVisible, onClose, onDateSelectCallback }) => {
  const [selectedDate, setSelectedDate] = useState(null);

  const toggleModal = () => {
    onClose();
  };

  const onDateSelect = (date) => {
    setSelectedDate(date);
    onDateSelectCallback(date); // Pass selected date to parent
    onClose(); // Close the modal after selecting a date
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Selected Date: {selectedDate ? format(new Date(selectedDate), 'yyyy-MM-dd') : 'None'}</Text>
      <Button title="Pick a Date" onPress={toggleModal} />

      <Modal visible={isModalVisible} transparent={true} animationType="slide">
        <View style={styles.modalContainer}>
          <View style={styles.calendarContainer}>
            <Text style={styles.title}>Select a Date</Text>
            <Calendar
              // Initially selected date
              markedDates={{
                [selectedDate]: {
                  selected: true,
                  marked: true,
                  selectedColor: '#00BFFF',
                },
              }}
              // When the user selects a date
              onDayPress={(day) => onDateSelect(day.dateString)}
            />
            <Button title="Close" onPress={toggleModal} />
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default DateModal;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background
  },
  calendarContainer: {
    width: '90%',
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
  },
  title: {
    fontSize: 18,
    marginBottom: 10,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  label: {
    fontSize: 16,
    marginBottom: 20,
  },
});
