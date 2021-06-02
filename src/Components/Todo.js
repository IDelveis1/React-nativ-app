import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import { THEME } from '../theme';



export const Todoshka = (props) => {

const onLongPressHandler = () => {
    return props.onRemove(props.todo.id)
}

    return (
        <TouchableOpacity onLongPress={onLongPressHandler} onPress={() => props.onOpen(props.todo.id)}>
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
        borderColor: THEME.GREY_COLOR,
        borderRadius: 5,
        paddingBottom: 15,

    }
})