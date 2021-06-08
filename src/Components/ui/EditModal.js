import React, { useState } from 'react';
import {View, StyleSheet, Modal, TextInput, Button, Alert} from 'react-native';
import { THEME } from '../../theme';


export const EditModal = props => {
let [title, setTitle] = useState(props.title)

const onSaveHandler = () => {
    if (title.trim().length < 3) {
        Alert.alert('Ошибка', `Введено недопустимое количество символов, равное ${title.trim().length}`)
    } else {
    props.onSave(title)
    }
}


    return(
        <Modal visible={props.visible} animationType='slide' transparent={false}>
            <View style={styles.wrap}>
                <TextInput style={styles.input} placeholder='Введите название' autoCapitalize='none' autoCorrect={false} value={title} onChangeText={setTitle} />
            <View style={styles.buttons}>
                <Button title='Отменить' onPress={props.onCancel} color={THEME.DANGER_COLOR} />
                <Button title='Сохранить' onPress={onSaveHandler} />
            </View>
            </View>
        </Modal>
    )
}


const styles = StyleSheet.create({
    wrap: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'

    },

    input: {
        padding: 10,
        borderBottomColor: THEME.MAIN_COLOR,
        borderBottomWidth: 2,
        width: '80%',
    },

    buttons: {
        width: '80%',
        flexDirection: 'row',
        paddingTop: 10,
        justifyContent: 'space-between'
    }


})