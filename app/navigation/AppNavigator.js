import React from 'react'
import { StyleSheet, View } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { MaterialCommunityIcons } from "@expo/vector-icons";
import TodoNavigator from './TodoNavigator';
import AccountNavigator from './AccountNavigator';
import TodoScreen from '../screens/TodoScreen';
import NewTodoButton from './NewTodoButton';

const Tab = createBottomTabNavigator();

const AppNavigator = () => (
    <Tab.Navigator
        screenOptions={({ route }) => ({
            headerShown: false,
            tabBarIcon: ({ color, size }) => {
                const icons = {
                    Todos: 'home',
                    Account: 'account',
                };
                return <MaterialCommunityIcons name={icons[route.name]} size={size} color={color} />
            }
        })}
    >
        <Tab.Screen name="Todos" component={TodoNavigator} />
        {/* <Tab.Screen
            name="Todo"
            component={TodoScreen}
            options={
                ({ navigation }) => ({
                    tabBarButton: () => <NewTodoButton onPress={() => { navigation.navigate("Todo") }} />
                })
            }
        /> */}
        <Tab.Screen name="Account" component={AccountNavigator} />

    </Tab.Navigator>

)


const styles = StyleSheet.create({
    container: {}
})
export default AppNavigator;