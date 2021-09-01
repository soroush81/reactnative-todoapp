import React from 'react'
import { StyleSheet, View } from 'react-native'
import Icon from '../Icon'
import AppText from '../AppText'
import defaultStyles from '../../config/styles'

const ListHeader = ({ item }) => {
    return (
        <View style={styles.container}>
                <Icon style={styles.icon} name={item.iconName} size={50} backgroundColor={defaultStyles.colors.white} iconColor={defaultStyles.colors.primary} />
            <AppText style={styles.label}>{item.name}</AppText>
            <AppText style={styles.subTitle}>23 tasks</AppText>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: defaultStyles.colors.primary,
        flex: 1,
        padding: 40,
    },
    icon: {
        paddingBottom: 20
    },
    label: {
        color: defaultStyles.colors.white,
        fontWeight: "700",
        paddingVertical: 10,
        fontFamily: 'Roboto'
    },
    subTitle: {
        color: defaultStyles.colors.white,

    }
})

export default ListHeader