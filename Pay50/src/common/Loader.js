import {
  ActivityIndicator,
  Modal,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';

const Loader = ({modalVisible, setModalVisible}) => {
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => setModalVisible(false)}>
      <View style={styles.overlay}>
        <View style={styles.modalView}>
          {/* <Text style={styles.modalText}>Hello World!</Text>

          <Pressable
            style={styles.button}
            onPress={() => setModalVisible(false)}>
            <Text style={styles.buttonText}>Hide Modal</Text>
          </Pressable> */}
          <ActivityIndicator size="large" color="#ff5a19" />
        </View>
      </View>
    </Modal>
  );
};

export default Loader;

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)', // dimmed background
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    width: 150,
    height: 150,
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 24,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5, // for Android shadow
  },
  modalText: {
    fontSize: 18,
    marginBottom: 20,
    color: '#333',
  },
  button: {
    marginTop: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#ff5a19',
    borderRadius: 8,
  },
  buttonText: {
    color: 'white',
    fontWeight: '600',
    fontSize: 16,
  },
});
