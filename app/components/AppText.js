import React from 'react'
import { StyleSheet,Text } from 'react-native'
import {AppLoading} from 'expo'
import { useFonts, Roboto_400Regular,Roboto_100Thin,Roboto_700Bold } from '@expo-google-fonts/roboto'

import defaultStyles from '../config/styles'
const AppText = ({ children, style, ...otherProps }) => {

    let [fontsLoaded, error] = useFonts({
        Roboto_400Regular,
        Roboto_700Bold,
        Roboto_100Thin,
      })
      
    //   if (!fontsLoaded)
    //   {
    //     return <AppLoading />
    //   }

    return (
        <Text style={[defaultStyles.text, style, styles.text2]} {...otherProps}>
            {children}
        </Text>
    )
}

const styles = StyleSheet.create({
    text2:{
        fontFamily:"Roboto_400Regular"
    }
})


export default AppText
