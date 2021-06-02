import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { FlatList, StyleSheet, Text, View, Alert } from 'react-native';
import { Navbar } from './src/Components/Navbar';
import { MainScreen } from './src/Screens/MainScreen';
import { TodoScreen } from './src/Screens/TodoScreen';


export default function App() {

const [todoId, setTodoId] = useState(null)  

const [todo, setTodo] = useState([])

const addTodo = (title) => {
  setTodo(prev => [...prev, {id: Date.now().toString(), title}])
}

const removeTodo = (id) => {
  const todos = todo.find(t => t.id === id)
  Alert.alert(
    "Удаление элемента",
    `Вы уверены, что хотите удалить "${todos.title}"?`,
    [
      {
        text: "Отмена",
        style: "cancel"
      },
      { text: "Удалить", onPress: () => {
        setTodoId(null)
        setTodo(prev => prev.filter(todo => todo.id !== id))    
      } }
    ]
  );
}

let content = <MainScreen removeTodo={removeTodo} addTodo={addTodo} todo={todo} onOpen={setTodoId}/>

if (todoId) {
  content = <TodoScreen goBack={() => setTodoId(null)} todo={ todo.find(item => item.id === todoId) } onRemove={removeTodo} />
}

  return (
    <View >
      <Navbar />
      <View style={styles.container}>   
      {content}
          </View>  
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 25
    
  },
});
