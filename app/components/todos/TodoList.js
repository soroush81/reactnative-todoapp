import React from 'react'
import { FlatList, StyleSheet,View } from 'react-native'
import defaultStyles from '../../config/styles'
import AppText from '../AppText'
import TodoListItem from './TodoListItem'

const TodoList = ({todos}) => {
    return (
        <View style={styles.container}>
            <FlatList
                data={todos}
                keyExtractor={item => item.id.toString()}
                renderItem={
                    ({item}) => <TodoListItem item={item} />
                }
                ></FlatList>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: defaultStyles.colors.white,
        borderTopLeftRadius:25,
        borderTopRightRadius:25,
        flex:3,
    }
})

export default TodoList
