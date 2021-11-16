import React from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { COLORS } from './App';

const TaskItem = ({ task, onDelete, onCheck }) => (
    <View style={styles.parentHolder}>
        <View style={styles.mainHolder}>
            <View style={styles.itemHolder}>
                <Text style={{...styles.itemText, ...styles.largeText}}>{task.title}</Text>
                <Text style={{...styles.itemText, ...styles.smallText}}>{task.time}</Text>
            </View>
            {task.completed && <Icon name="checkcircle" size={20} color={COLORS.blue} />}
        </View>
        <View style={styles.actionHolder}>
            <TouchableOpacity style={styles.actionItem}>
                <Icon name="edit" size={14} color={COLORS.main} />
                <Text style={{...styles.spaced, color: COLORS.main}}>Edit</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.actionItem} onPress={() => onDelete(task.id)}>
                <Icon name="delete" size={14} color={COLORS.red} />
                <Text style={{...styles.spaced, color: COLORS.red}}>Delete</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.actionItem} onPress={() => onCheck(task.id)}>
                <Icon name="check" size={14} color={task.completed ? '#c7d2f2' : '#2b5fed'} />
                <Text style={[styles.spaced, task.completed ? styles.fadeBlueText : styles.blueText]}>Check</Text>
            </TouchableOpacity>
        </View>
    </View>
);

const styles = StyleSheet.create({
    spaced: {
        marginStart: 5,
    },
    actionItem: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    parentHolder: {
        padding: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#fff',
    },
    actionHolder: {
        marginTop: 14,
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
    },
    mainHolder: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    itemHolder: {
        flexDirection: 'column',
    },
    itemText: {
        color: '#1f1b1b',
    },
    largeText: {
        fontSize: 16,
        fontWeight: '500', 
    },
    smallText: {
        fontSize: 14,
    },
    blueText: {
        color: '#2b5fed',
    },
    fadeBlueText: {
        color: '#c7d2f2',
    }
});

export default TaskItem;
