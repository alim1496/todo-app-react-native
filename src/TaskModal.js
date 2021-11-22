import React, { useState } from 'react';
import { View, Text, StyleSheet, Modal, TouchableOpacity, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import { COLORS } from './App';

const TaskModal = ({ isOpen, onClose, onSuccess }) => {
    const [title, setTitle] = useState('');
    const [date, setDate] = useState('');

    const addData = () => {
        if(title && date) {
            onSuccess(title, date);
            setDate('');
            setTitle('');
        }
    };

    const closeModal = () => {
        onClose();
        setTitle('');
        setDate('');
    };

    return (
        <Modal
            visible={isOpen}
            onRequestClose={onClose}
            transparent={true}
        >
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <TextInput
                        placeholder="Add a task"
                        style={styles.input}
                        value={title}
                        onChangeText={(value) => setTitle(value)}
                    />
                    <TextInput
                        placeholder="dd-mm-yyyy hh:mm"
                        style={styles.input}
                        value={date}
                        onChangeText={(value) => setDate(value)}
                    />
                    <View style={styles.actionHolder}>
                        <TouchableOpacity
                            onPress={addData}>
                            <Icon name="checkcircleo" size={30} color={COLORS.blue} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={closeModal}>
                            <Icon name="closecircleo" size={30} color={COLORS.red} />
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
        padding: 16,
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
      input: {
        height: 40,
        width: 250,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderRadius: 6,
      },
      actionHolder: {
          flexDirection: 'row',
          justifyContent: 'space-around',
          width: 100,
      }
});

export default TaskModal;
