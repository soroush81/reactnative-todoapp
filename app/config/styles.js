import { Platform } from 'react-native'
import colors from "./colors"
import { Roboto_400Regular } from '@expo-google-fonts/roboto'
  
export default {
    colors,
    text: {
        color: colors.dark,
        fontSize: 18,
        fontFamily: Platform.OS === "android" ? "Roboto_400Regular" : 'Avenir'
    }
}