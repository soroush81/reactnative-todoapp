import React, { useContext } from 'react'
import { StyleSheet, View } from 'react-native'
import Button from '../components/Button'
import AuthContext from '../context/AuthContext'

const LoginScreen = () => {
    const authContext = useContext(AuthContext)
    const handleSubmit = () => {
        const user = { email: 'soodeh@a.com', password: '123' }
        authContext.setUser(user)
    }

    return (
        <View style={styles.container}>
            <Button title="login"
                onPress={() => handleSubmit()} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {}
})
export default LoginScreen;