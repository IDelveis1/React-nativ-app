import React, { useState } from 'react';
import {View, TextInput, StyleSheet, Button, Alert} from 'react-native';


export const Todobar = ({onSubmit}) => {

    const [value, setValue] = useState('')

const onHandleSubmit = () => {
    if (value.trim()){
    onSubmit(value)
    } else {
        Alert.alert('Введите дело, пожалйста')
    }
}

    return (
        <View style={styles.block}>
            <TextInput style={styles.input} onChangeText={setValue} value={value} placeholder='Type here please' autoCapitalize='none' autoCorrect={false} />
            <Button title='Добавить' onPress={onHandleSubmit}/>

        </View>
    )
}


const styles = StyleSheet.create({
    input: {
        borderBottomColor: 'blue',
        borderBottomWidth: 2,
        borderStyle: 'solid',
        width: '70%',
        padding: 10

    },

    block: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingBottom: 10,
        
    }

})