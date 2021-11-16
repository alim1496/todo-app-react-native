import React from 'react';
import { View, Text, StyleSheet, Modal, TouchableOpacity, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import { COLORS } from './App';

const ConfirmDelete = ({ isOpen, onClose, onDelete }) => {
    return (
        <Modal
            visible={isOpen}
            onRequestClose={onClose}
            transparent={true}
        >
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <Text style={styles.content}>Are you sure you want to delete this task from your task list?</Text>
                    <View style={styles.actionHolder}>
                        <TouchableOpacity onPress={onDelete}>
                            <Icon name="checkcircleo" size={30} color={COLORS.red} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={onClose}>
                            <Icon name="closecircleo" size={30} color={COLORS.blue} />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
      },
      modalView: {
        backgroundColor: "white",
        borderRadius: 20,
        padding: 20,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
      },
      content: {
          width: 200,
          textAlign: 'center',
          marginBottom: 10,
          color: '#1f1b1b',
          fontSize: 16,
      },
      actionHolder: {
          flexDirection: 'row',
          justifyContent: 'space-around',
          width: 100,
      }
});

export default ConfirmDelete;
