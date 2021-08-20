import React from 'react'
import { View } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'
const Icon = ({ name, size = 40, backgroundColor = "#000", iconColor = "#fff" }) => {
    return (
        <View style={{
            width: size,
            height: size,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: size / 2,
            backgroundColor,
        }}>
            <MaterialCommunityIcons name={name} size={size * 0.5} color={iconColor} />
        </View>
    );
}

export default Icon;