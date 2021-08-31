import React, {useState} from 'react'
import { Button, Modal, StyleSheet } from 'react-native'
import ListHeader from '../components/todos/ListHeader';
import TodoList from './../components/todos/TodoList';
import defaultStyles from '../config/styles'
import NewTodoButton from './../navigation/NewTodoButton';
import Screen from '../components/Screen';

const todos = [
    { id: 1, title: 'Call Ali', overdueDate: '2021-08-19 14:00', completed: true },
    { id: 2, title: 'Call Sanaz', overdueDate: '2021-08-19 11:00', completed: false }
]
const TodoListScreen = ({ route }) => {
    const { item } = route.params;
    const [modalVisible, setModalVisible] = useState(false)
    return (
        <Screen style={styles.container}>
            <ListHeader item={item} />
            <TodoList todos={todos} />
            <NewTodoButton onPress={() => { setModalVisible(true); console.log("eeee")}} />
            <Modal visible={modalVisible} animationType="slide">
                <Button title="Close" onPress={() => setModalVisible(false)} />
            </Modal>
        </Screen>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: defaultStyles.colors.primary
    }
})

export default TodoListScreen
