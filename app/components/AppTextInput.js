import React from 'react'
import { StyleSheet, TextInput, View } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import defaultStyles from '../config/styles'
const AppTextInput = ({ icon, width = '100%', ...otherProps }) => {
  return (
    <View style={styles.container}>
      {icon && <MaterialCommunityIcons name={icon} color={defaultStyles.colors.medium} style={styles.icon} />}
      <TextInput {...otherProps} style={[defaultStyles.text, styles.textInput]} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: defaultStyles.colors.light,
    borderColor: defaultStyles.colors.mediumlight,
    borderWidth: 1,
    borderRadius: 5,
    flexDirection: "row",
    padding: 15,
    marginVertical: 10
  },
  icon: {
    marginRight: 10
  },
  textInput: {
    width: "100%",
    height: "100%"
  }
})
export default AppTextInput;