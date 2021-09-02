import React, { useContext } from 'react'
import { StyleSheet, Text } from 'react-native'
import Button from '../components/Button'
import Screen from '../components/Screen';

import AuthContext from '../context/AuthContext'
import AppForm from './../components/forms/AppForm';
import AppFormField from './../components/forms/AppFormField';
import defaultStyles from '../config/styles'


const LoginScreen = () => {
    const authContext = useContext(AuthContext)
    const handleSubmit = () => {
        const user = { email: 'soodeh@a.com', password: '123' }
        authContext.setUser(user)
    }

    return (
        <Screen style={styles.container}>
            <Text style={styles.logo}>TODOS</Text>
            <AppForm>
                <AppFormField
                    autoCapitalize="none"
                    autoCorrect={false}
                    name="username"
                    width="100%"
                    placeholder="Username" />
                <AppFormField
                    autoCapitalize="none"
                    autoCorrect={false}
                    name="password"
                    width="100%"
                    placeholder="Password"
                />
                <Button title="login"
                    onPress={() => handleSubmit()} />
            </AppForm>
        </Screen>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 30,
    },
    logo: {
        marginTop: 70,
        alignSelf: 'center',
        marginBottom: 10,
        fontSize: 30,
        fontWeight: "900",
        paddingVertical: 20,
        color: defaultStyles.colors.black,
        fontStyle: 'italic'
    }
})
export default LoginScreen;