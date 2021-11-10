/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import {
  FlatList,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import TaskItem from './TaskItem';

export const COLORS = { white: '#fff', main: '#1f1b1b', blue: '#2b5fed', grey: '#f2f2f2' };

const App = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: 'Do the math',
      time: '10/11/2021 5:30PM',
      completed: false,
    },
    {
      id: 2,
      title: 'Solve the puzzle',
      time: '10/11/2021 4:30PM',
      completed: true,
    },
    {
      id: 3,
      title: 'Do the math',
      time: '11/11/2021 3:30PM',
      completed: false,
    },
    {
      id: 4,
      title: 'Go to play',
      time: '10/11/2021 1:30PM',
      completed: true,
    },
    {
      id: 5,
      title: 'Eat lunch',
      time: '10/11/2021 1:15PM',
      completed: true,
    },
  ]);

  const deleteTask = (id) => {
    const newTasks = tasks.filter((task) => task.id !== id);
    setTasks(newTasks);
  };

  return (
    <SafeAreaView style={styles.background}>
      <View style={styles.header}>
        <Text style={styles.headerText}>TODO APP</Text>
        <TouchableOpacity>
          <Icon name="pluscircle" size={30} color={COLORS.blue} />
        </TouchableOpacity>
      </View>
      <FlatList
        data={tasks} 
        renderItem={({item}) => ( <TaskItem task={item} onDelete={deleteTask} />)} 
        />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: COLORS.grey,
  },
  header: {
    padding: 16,
    backgroundColor: COLORS.white,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: COLORS.main,
  },
  bottomView: {
    position: 'absolute',
    bottom: 20,
    right: 20,
  },
  addContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: COLORS.blue,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  addIcon: {
    fontSize: 32,
    color: COLORS.white,
  },
});

export default App;
