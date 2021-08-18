import React from 'react'
import { StyleSheet, View } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import WelcomeScreen from '../screens/WelcomeScreen';
import LoginScreen from '../screens/LoginScreen.js'
import RegisterScreen from '../screens/RegisterScreen'

const Stack = createStackNavigator();

const AuthNavigator = () => (
    <Stack.Navigator
        screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
    </Stack.Navigator>
)

const styles = StyleSheet.create({
    container: {}
})
export default AuthNavigator;