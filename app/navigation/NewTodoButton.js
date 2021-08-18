import React from 'react'
import { StyleSheet, TouchableOpacity, View } from 'react-native'
import { MaterialCommunityIcons } from "@expo/vector-icons";

import defaulStyles from '../config/styles'
const NewTodoButton = ({ onPress }) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={styles.container}>
                <MaterialCommunityIcons name="plus-circle" color={defaulStyles.colors.white} size={30} />
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: defaulStyles.colors.primary,
        alignItems: 'center',
        borderColor: defaulStyles.colors.white,
        borderWidth: 10,
        borderRadius: 35,
        bottom: 20,
        height: 70,
        justifyContent: 'center',
        width: 70
    }
})
export default NewTodoButton;