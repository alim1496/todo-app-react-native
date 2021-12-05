import React, { useState, useEffect } from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import { openDatabase } from 'react-native-sqlite-storage';
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

const db = openDatabase({
  name: "tasks_db"
});

const App = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [confirmOpen, setConfirmOpen] = useState(false);
  const [deleteTaskId, setDeleteTaskId] = useState(0);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    createTable();
  }, []);

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

  const createTable = () => {
    db.transaction(txn => {
      txn.executeSql(
        "CREATE TABLE IF NOT EXISTS tasks (id INTEGER PRIMARY KEY AUTOINCREMENT, title TEXT, time TIMESTAMP, completed BOOLEAN NOT NULL CHECK (completed IN (0, 1)))",
        [],
        () => {
          console.log("table created successfully");
        },
        (error) => {
          console.log("error is " + error.message);
        }
      );
    });
  };

  const addTask = (title, date) => {
    const task = {
      id: new Date().getTime(),
      title,
      time: date,
      completed: false,
    };
    setTasks(prevTasks => ([task, ...prevTasks]));
    setModalOpen(false);
  };

  const storeData = async () => {
    // try {
    //   const jsonValue = JSON.stringify(tasks);
    //   await AsyncStorage.setItem('@storage_Key', jsonValue);
    // } catch (e) {
    //   // saving error
    // }
  };

  
const getData = async () => {
  // try {
  //   const jsonValue = await AsyncStorage.getItem('@storage_Key');
  //   const _t = jsonValue !== null ? JSON.parse(jsonValue) : null;
  //   if (_t !== null) {
  //     setTasks(_t);
  //   }
  // } catch(e) {
  //   // error reading value
  // }
}


  return (
    <SafeAreaView style={styles.background}>
      <TaskModal isOpen={modalOpen} onClose={() => setModalOpen(false)} onSuccess={addTask} />
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
