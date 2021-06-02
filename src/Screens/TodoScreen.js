import React, { useState } from 'react';
import {View, StyleSheet, Text, Button} from 'react-native';
import { AppCard } from '../Components/ui/AppCard';
import { EditModal } from '../Components/ui/EditModal';
import {THEME} from '../theme'


export const TodoScreen = (props) => {

    let [modal, editModal] = useState(false)

    const onLongPressHandler = () => {
        return props.onRemove(props.todo.id)
    }

    return (
        <View>
            <EditModal visible={modal} onCancel={() => editModal(false)}></EditModal>
            <AppCard style={styles.card}>
                <Text style={styles.title}>{props.todo.title}</Text>
                <Button title='Ред.' onPress={() => editModal(true)}></Button>
                </AppCard>
            <View style={styles.buttons}>
                <View style={styles.button}>
            <Button onPress={props.goBack} title='Назад' color={THEME.GREY_COLOR}></Button>
            </View>
            <View style={styles.button}>
                <Button onPress={onLongPressHandler} title='Удалить' color={THEME.DANGER_COLOR} ></Button>
            </View>
            </View>
        </View>

    )
}


const styles = StyleSheet.create({
    buttons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    button: {
        width: '40%'
    },

    card: {
        padding: 10,
        marginBottom: 15,
    },

    title: {
        fontSize: 20
    }

})