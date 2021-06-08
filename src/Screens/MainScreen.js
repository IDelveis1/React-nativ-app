import React from 'react';
import {View, StyleSheet, FlatList, ProgressViewIOSComponent, Image} from 'react-native';
import { Todoshka } from '../Components/Todo';
import { Todobar } from '../Components/Todobar';


export const MainScreen = ({addTodo, removeTodo, todo, onOpen }) => {

let content = <FlatList data={todo}
renderItem={({item}) => <Todoshka todo={item} onRemove={removeTodo} onOpen={onOpen}/>}
keyExtractor={(item) => item.id.toString()}  />

if (todo.length === 0) {
    content = <View style={styles.imgWrap}>
        <Image source={require('../../assets/8575147831553750379-128.png')} style={styles.image}></Image>
    </View>
}



    return (
        <View>
             <Todobar onSubmit={addTodo}/>
{content}
        </View>

    )
}


const styles = StyleSheet.create({
    imgWrap: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        height: 300
    },
    image: {
        height: '60%',
        width: '60%',
        resizeMode: "contain",

    }
    
})