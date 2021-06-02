import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { THEME } from '../theme';


export const Navbar = (props) => {
    return (
        <View style={styles.navbar}>
            <Text style={styles.text} >Todo App</Text>
        </View>

    )

}


const styles = StyleSheet.create({
    navbar: {
        height: 80,
        backgroundColor: THEME.MAIN_COLOR,
        alignItems: 'center',
        justifyContent: 'flex-end',
        paddingBottom: 5,
    },
    text: {
        color: 'white',
        fontSize: 20
    }
})