import React from 'react';
import {View, StyleSheet, FlatList, ProgressViewIOSComponent} from 'react-native';
import { Todoshka } from '../Components/Todo';
import { Todobar } from '../Components/Todobar';


export const MainScreen = ({addTodo, removeTodo, todo, onOpen }) => {
    return (
        <View>
             <Todobar onSubmit={addTodo}/>
<FlatList data={todo}
          renderItem={({item}) => <Todoshka todo={item} onRemove={removeTodo} onOpen={onOpen}/>}
          keyExtractor={(item) => item.id.toString()}  />
        </View>

    )
}


const styles = StyleSheet.create({
    
})