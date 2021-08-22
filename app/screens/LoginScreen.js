import React, { useContext } from 'react'
import { StyleSheet, View } from 'react-native'
import Button from '../components/Button'
import Screen from '../components/Screen';

import AuthContext from '../context/AuthContext'
import AppForm from './../components/forms/AppForm';
import AppFormField from './../components/forms/AppFormField';

const LoginScreen = () => {
    const authContext = useContext(AuthContext)
    const handleSubmit = () => {
        const user = { email: 'soodeh@a.com', password: '123' }
        authContext.setUser(user)
    }

    return (
        <Screen style={styles.container}>
            <AppForm>
                <AppFormField name="username" width="100%" />
                <AppFormField name="password" width="100%" />
                <Button title="login"
                    onPress={() => handleSubmit()} />
            </AppForm>
        </Screen>
    );
}

const styles = StyleSheet.create({
    container: {}
})
export default LoginScreen;