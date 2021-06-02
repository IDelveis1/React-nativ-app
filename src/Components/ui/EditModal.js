import React from 'react';
import {View, StyleSheet, Modal, TextInput, Button} from 'react-native';
import { THEME } from '../../theme';


export const EditModal = props => {
    return(
        <Modal visible={props.visible} animationType='slide' transparent={false}>
            <View style={styles.wrap}>
                <TextInput style={styles.input} placeholder='Введите название' autoCapitalize='none' autoCorrect={false} />
            <View style={styles.buttons}>
                <Button title='Отменить' onPress={props.onCancel} color={THEME.DANGER_COLOR} />
                <Button title='Сохранить' />
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