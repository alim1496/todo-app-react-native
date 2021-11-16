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
import TaskModal from './TaskModal';
import ConfirmDelete from './ConfirmDelete';

export const COLORS = { white: '#fff', main: '#1f1b1b', blue: '#2b5fed', grey: '#f2f2f2', red: '#e3360b', fadeBlue: '#c7d2f2' };

const App = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [confirmOpen, setConfirmOpen] = useState(false);
  const [deleteTaskId, setDeleteTaskId] = useState(0);
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

  const openConfirmModal = (id) => {
    setConfirmOpen(true);
    setDeleteTaskId(id);
  }

  const deleteTask = () => {
    const newTasks = tasks.filter((task) => task.id !== deleteTaskId);
    setTasks(newTasks);
    setDeleteTaskId(0);
    setConfirmOpen(false);
  };

  const checkTask = (id) => {
    const newTasks = [...tasks];
    const _tasks = newTasks.map((task) => (
      task.id === id ? {...task, completed: !task.completed} : task
    ));
    setTasks(_tasks);
  };

  return (
    <SafeAreaView style={styles.background}>
      <TaskModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
      <ConfirmDelete isOpen={confirmOpen} onClose={() => setConfirmOpen(false)} onDelete={deleteTask} />
      <View style={styles.header}>
        <Text style={styles.headerText}>TODO APP</Text>
        <TouchableOpacity onPress={() => setModalOpen(true)}>
          <Icon name="pluscircle" size={30} color={COLORS.blue} />
        </TouchableOpacity>
      </View>
      <FlatList
        data={tasks} 
        renderItem={({item}) => ( <TaskItem task={item} onDelete={openConfirmModal} onCheck={checkTask} />)} 
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
