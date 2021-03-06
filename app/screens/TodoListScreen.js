import React, { useState, useEffect } from 'react'
import { Button, Modal, StyleSheet } from 'react-native'
import ListHeader from '../components/todos/ListHeader';
import TodoList from './../components/todos/TodoList';
import defaultStyles from '../config/styles'
import NewTodoButton from './../navigation/NewTodoButton';
import Screen from '../components/Screen';
import todosApi from '../api/todos'
import AppForm from '../components/forms/AppForm'
import AppFormField from '../components/forms/AppFormField'

// const todos = [
//     { id: 1, title: 'Call Ali', overdueDate: '2021-08-19 14:00', completed: true },
//     { id: 2, title: 'Call Sanaz', overdueDate: '2021-08-19 11:00', completed: false }
// ]
const TodoListScreen = ({ route }) => {

    const [todos, setTodos] = useState([])
    const [modalVisible, setModalVisible] = useState(false)

    const { item } = route.params;

    useEffect(() => {
        loadTodos();
    }, [])

    const loadTodos = async () => {
        const response = await todosApi.getTodos();
        setTodos(response.data);
    }

    return (
        <Screen style={styles.container}>
            <ListHeader item={item} />
            <TodoList todos={todos} />
            <NewTodoButton onPress={() => { setModalVisible(true); }} />
            <Modal visible={modalVisible} animationType="slide">
                <AppForm>
                    <AppFormField
                        autoCapitalize="none"
                        autoCorrect={false}
                        name="title"
                        width="100%"
                        placeholder="Title" />
                    <AppFormField
                        autoCapitalize="none"
                        autoCorrect={false}
                        name="overdueDate"
                        width="100%"
                        placeholder="Overdue Date" />
                    <Button title="Close" onPress={() => setModalVisible(false)} />
                </AppForm>
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
