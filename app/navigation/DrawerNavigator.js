import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import AppNavigator from './AppNavigator';
import AuthNavigator from './AuthNavigator';
import defaultStyles from '../config/styles'
import WelcomeScreen from '../screens/WelcomeScreen';

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => (
    <Drawer.Navigator
        screenOptions={{
            headerStyle: { backgroundColor: defaultStyles.colors.primary },
            headerTintColor: '#fff',
            activeTintColor: '#e91e63',
            headerTitleStyle: { fontWeight: 'bold' },
            itemStyle: { marginVertical: 5 },
        }}>
        <Drawer.Screen name="Todoss" options={{ drawerLabel: 'TodoList' }} component={AppNavigator} />
        <Drawer.Screen name="Signout" options={{ drawerLabel: 'Signout' }} component={WelcomeScreen} />
    </Drawer.Navigator>
)

export default DrawerNavigation;