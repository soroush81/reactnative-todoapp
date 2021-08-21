import React from 'react'
import { StyleSheet, TouchableOpacity, View } from 'react-native'

import { MaterialCommunityIcons } from "@expo/vector-icons";
import defaultStyles from '../config/styles'
const NewCategoryButton = ({ onPress }) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.container}>
            <View>
                <MaterialCommunityIcons name="plus-circle" color={defaultStyles.colors.white} size={30} />
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: defaultStyles.colors.primary,
        borderRadius: 30,
        height: 60,
        justifyContent: 'center',
        width: 60,
        bottom: 20,
        right: 20,
        position: "absolute",
    }
})
export default NewCategoryButton;