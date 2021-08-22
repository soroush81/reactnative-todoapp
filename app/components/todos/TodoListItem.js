import React from 'react'
import { StyleSheet, View } from 'react-native'
import AppText from '../AppText'
import CheckBox from '../CheckBox'
const TodoListItem = ({item}) => {
    return (
        <View style={styles.container}>
            <View style={styles.itemdetail}>
                <AppText>{item.title}</AppText>
                <AppText>{item.overdueDate}</AppText>
            </View>
            <CheckBox value={item.completed} style={styles.checkBox} />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flexDirection:"row",
        height:100,
        padding:20
    },
    checkBox:{
        width:25,
        height:25,
        borderWidth:1,
        borderColor:"red",
        flex:1
    }, 
    itemdetail:{
        flex:4
    }
})

export default TodoListItem
