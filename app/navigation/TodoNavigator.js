import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import TodoListScreen from '../screens/TodoListScreen';
import TodoScreen from '../screens/TodoScreen';

const Stack = createStackNavigator();
const TodoNavigator = () => (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="TodoList" component={TodoListScreen} />
        <Stack.Screen name="Todo" component={TodoScreen} />
    </Stack.Navigator>
)

export default TodoNavigator;