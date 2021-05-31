import React from 'react';
import {View, Text, StyleSheet} from 'react-native';


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
        backgroundColor: 'blue',
        alignItems: 'center',
        justifyContent: 'flex-end',
        paddingBottom: 5,
    },
    text: {
        color: 'white',
        fontSize: 20
    }
})