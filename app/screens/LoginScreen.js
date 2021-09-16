import React, { useState, useContext, useRef } from 'react'
import { StyleSheet, Text } from 'react-native'
import * as Yup from 'yup';
import { useFormik } from 'formik'

import Button from '../components/Button'
import Screen from '../components/Screen';
import ErrorMessage from '../components/forms/ErrorMessage';
import AuthContext from '../context/AuthContext'
import authApi from '../api/auth'

import defaultStyles from '../config/styles'
import AppTextInput from '../components/AppTextInput';

const validationSchema = Yup.object().shape({
    username: Yup.string().required().label("Username"),
    password: Yup.string().required().min(4).label("Password")
})


const LoginScreen = () => {
    const [loginFailed, setLoginFailed] = useState(false)
    const password = useRef(null)
    const { handleBlur, handleChange, handleSubmit, errors, touched, values } = useFormik({
        validationSchema: validationSchema,
        initialValues: { username: "", password: "" },
        onSubmit: values => doSubmit(values)
    })
    const authContext = useContext(AuthContext)

    const doSubmit = async (values) => {
        // alert(`Email: ${values.username}, Password: ${values.password}`)
        const response = await authApi.login(values.username, values.password)
        if (!response.ok) return setLoginFailed(true)
        setLoginFailed(false)
        authContext.setUser(response.data)
    }

    return (
        <Screen style={styles.container}>
            <Text style={styles.logo}>TODOS</Text>
            <ErrorMessage error="Invalid username/password" visible={loginFailed} />
            <AppTextInput
                icon="email"
                placeHolder="Username"
                autoCapitalize='none'
                autoCorrect={false}
                name="username"
                keyboardAppearance='dark'
                returnKeyType='next'
                returnKeyLabel='next'
                width="100%"
                onChangeText={handleChange('username')}
                onBlur={handleBlur('username')}
                error={errors.username}
                touched={touched.username}
                onSubmitEditing={() => password.current?.focus()}
            />
            <AppTextInput
                icon="key"
                ref={password}
                placeHolder="Password"
                autoCapitalize='none'
                autoCompleteType='password'
                name="password"
                keyboardAppearance='dark'
                returnKeyType='go'
                returnKeyLabel='go'
                secureEntryKey
                width="100%"
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                error={errors.password}
                touched={touched.password}
                onSubmitEditing={() => handleSubmit()}
            />
            <Button title='Login' onPress={handleSubmit} />
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