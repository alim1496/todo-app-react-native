import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

const TaskItem = ({ task }) => (
    <View style={styles.itemHolder}>
        <View>
            <Text style={{...styles.itemText, ...styles.largeText}}>{task.title}</Text>
        </View>
        <View>
            <Text style={{...styles.itemText, ...styles.smallText}}>{task.time}</Text>
        </View>
    </View>
);

const styles = StyleSheet.create({
    itemHolder: {
        flexDirection: 'column',
        padding: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#fff'
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
    }
});

export default TaskItem;
