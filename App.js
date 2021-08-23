import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";

import navigationTheme from "./app/navigation/navigationTheme";
import DrawerNavigator from './app/navigation/DrawerNavigator';
import AuthNavigator from './app/navigation/AuthNavigator';
import AuthContext from './app/context/AuthContext';
import {AppLoading} from 'expo'
import { useFonts, Roboto_400Regular,Roboto_100Thin,Roboto_700Bold } from '@expo-google-fonts/roboto'
import { Poppins_400Regular, Poppins_700Bold } from '@expo-google-fonts/poppins'
import AppText from './app/components/AppText';

export default function App() {
  const [user, setUser] = useState();
let [fontsLoaded, error] = useFonts({
  Roboto_400Regular,
  Poppins_700Bold,
})

// if (!fontsLoaded)
// {
//   return <AppLoading />
// }
  return (
    <>
      <AuthContext.Provider value={{ user, setUser }}>
        <NavigationContainer theme={navigationTheme} >
          {user ? <DrawerNavigator /> : <AuthNavigator />}
        </NavigationContainer>
      </AuthContext.Provider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
