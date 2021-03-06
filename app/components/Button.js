import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import defaultStyles from '../config/styles'
const Button = ({ title, onPress, color = "primary", height = 45 }) => {
    return (
        <TouchableOpacity style={[styles.button, { backgroundColor: defaultStyles.colors[color], height: height }]} onPress={onPress}>
            <View>
                <Text style={styles.text}>{title}</Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: defaultStyles.colors.primary,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 15,
        width: '100%',
        marginVertical: 5
    },
    text: {
        color: defaultStyles.colors.white,
        fontSize: 16,
        textTransform: 'uppercase',
        fontWeight: 'bold'
    }
})
export default Button;