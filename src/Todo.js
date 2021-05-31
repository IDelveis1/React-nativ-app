import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';



export const Todoshka = (props) => {
    return (
        <TouchableOpacity onLongPress={props.onRemove.bind(null, props.id)}>
        <View style={styles.todo}>
            <Text key={props.todo.key}>{props.todo.title}</Text>
        </View>
        </TouchableOpacity>

    )

}


const styles = StyleSheet.create({
    todo: {
        flexDirection: 'row',
        padding: 10,
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#eee',
        borderRadius: 5,
        paddingBottom: 15,

    }
})