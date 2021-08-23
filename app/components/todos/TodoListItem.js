import React, {useState} from 'react'
import { StyleSheet, TouchableOpacity, View } from 'react-native'
import AppText from '../AppText'
import CheckBox from '../CheckBox'
const TodoListItem = ({item}) => {
    const [itemCompleted, setItemCompleted] = useState(item.completed)
    console.log(itemCompleted)
    return (
        <TouchableOpacity>
            <View style={styles.container}>
                <View style={itemCompleted ? styles.itemdetailcompleted : styles.itemdetail}>
                    <AppText>{item.title}</AppText>
                    <AppText>{item.overdueDate}</AppText>
                </View>
                <CheckBox value={itemCompleted} style={styles.checkBox} onChange={()=>{setItemCompleted(!itemCompleted);}} />
            </View>
        </TouchableOpacity>
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
        
    },
    itemdetailcompleted: {
        flex:4,textDecorationLine: 'line-through', textDecorationStyle: 'solid'
    }
})

export default TodoListItem
