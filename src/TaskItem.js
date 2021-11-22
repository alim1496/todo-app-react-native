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
            <View style={styles.actionHolder}>
                <TouchableOpacity onPress={() => onDelete(task.id)}>
                    <Icon name="delete" size={18} color={COLORS.red} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.spaced} onPress={() => onCheck(task.id)}>
                    <Icon name={task.completed ? `checkcircle` : `checkcircleo`} size={18} color="#2b5fed" />
                </TouchableOpacity>
            </View>
        </View>
    </View>
);

const styles = StyleSheet.create({
    actionHolder: {
        flexDirection: 'row',
    },
    spaced: {
        marginStart: 16,
        marginEnd: 4,
    },
    parentHolder: {
        padding: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#fff',
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
