import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import TodoScreen from '../screens/TodoScreen';
import TodoCategoriesScreen from './../screens/TodoCategories';
import TodoListScreen from './../screens/TodoListScreen';

const Stack = createStackNavigator();
const TodoNavigator = () => (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="TodoCategories" component={TodoCategoriesScreen} />
        <Stack.Screen name="TodoList" component={TodoListScreen} />
        <Stack.Screen name="Todo" component={TodoScreen} />
    </Stack.Navigator>
)

export default TodoNavigator;