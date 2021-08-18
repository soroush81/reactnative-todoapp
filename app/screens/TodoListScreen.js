import React from 'react'
import { StyleSheet, Text } from 'react-native'
import Screen from '../components/Screen';

const TodoListScreen = () => {
    return (
        <Screen style={styles.container}>
            <Text>TodoList</Text>
        </Screen>
    );
}

const styles = StyleSheet.create({
    container: {}
})
export default TodoListScreen;