import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import Button from '../components/Button'
import defaultStyles from '../config/styles'
const WelcomeScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={styles.logoContainer}>
                <Image style={styles.logo} source={require("../assets/logo.png")} />
                <Text style={styles.tagLine}>TODOS</Text>
            </View>
            <View style={styles.buttonContainer}>
                <Button title="Login" color="secondary" onPress={() => navigation.navigate("Login")} />
                <Button title="Register" color="mediumlight" />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    buttonContainer: {
        padding: 20,
        width: "100%",
    },
    container: {
        backgroundColor: defaultStyles.colors.primary,
        flex: 1,
        flexDirection: "column",
        alignItems: 'center',
        justifyContent: "flex-end",

    },
    logoContainer: {
        paddingTop: 150,
        position: "absolute",
        top: 70,
        alignItems: "center",
    },
    logo: {
        height: 70,
        width: 70,
    },
    tagLine: {
        fontSize: 25,
        fontWeight: "600",
        paddingVertical: 20,
        color: defaultStyles.colors.white
    }
})
export default WelcomeScreen;