import {
  Modal,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';

const DropModal = ({isModalVisible, onClose, options, title, selected}) => {
  return (
    <Modal visible={isModalVisible} transparent={true} animationType="slide">
      <View style={styles.modalOverlay}>
        <View style={styles.modalContent}>
          <Text style={styles.modalText}>{title}</Text>
          <ScrollView style={styles.optionContainer}>
            {options.map((item, index) => {
              if (item.label !== selected) {
                return (
                  <TouchableOpacity key={index} onPress={() => onClose(item)}>
                    <LinearGradient
                      colors={['#C53E8D', '#8A52F3']} // Gradient colors
                      start={{x: 0, y: 0}}
                      end={{x: 1, y: 0}}
                      style={styles.option}>
                      <Text style={styles.optionText}>{item.label}</Text>
                    </LinearGradient>
                  </TouchableOpacity>
                );
              } else {
                return (
                  <View key={index} style={styles.optionSelected}>
                    <Text
                      style={{color: '#fff', fontWeight: 'bold', fontSize: 16}}>
                      {item.label}
                    </Text>
                  </View>
                );
              }
            })}
          </ScrollView>
          <TouchableOpacity style={styles.closeButton} onPress={onClose}>
            <Text style={styles.closeButtonText}>Close</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default DropModal;

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background
  },
  modalContent: {
    width: '80%',
    padding: 20,
    backgroundColor: '#1B1142',
    borderRadius: 10,
    alignItems: 'center',
  },
  modalText: {
    fontSize: 18,
    marginBottom: 20,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  optionContainer: {
    width: '100%',
    marginBottom: 20,
  },
  option: {
    paddingVertical: 15,
    paddingHorizontal: 10,
    marginVertical: 5,
    borderRadius: 8,
  },
  optionSelected: {
    paddingVertical: 15,
    paddingHorizontal: 10,
    marginVertical: 5,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: '#8A52F3',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#03000C',
  },
  optionText: {
    fontSize: 16,
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  closeButton: {
    backgroundColor: '#007BFF',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 10,
  },
  closeButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
