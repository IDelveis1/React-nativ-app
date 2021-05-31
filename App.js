import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { Navbar } from './src/Navbar';
import { Todobar } from './src/Todobar';
import {Todoshka} from './src/Todo';


export default function App() {

const [todo, setTodo] = useState([])

const addTodo = (title) => {
  setTodo(prev => [...prev, {id: Date.now().toString(), title}])
}


const onRemove = (id) => {
  setTodo(prev => prev.filter(id => todo.id != id))
}
  return (
    <View >
      <Navbar />
      <View style={styles.container}>
        <Todobar onSubmit={addTodo}/>
      </View>
<FlatList data={todo}
          renderItem={({item}) => <Todoshka todo={item} onRemove={onRemove} />}
          keyExtractor={(item) => item.id.toString()}  />



      {/* <View>
        { Todo.map(todo => <Todoshka key={todo.id} title={todo.title}/>)}

      </View> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 25
    
  },
});
