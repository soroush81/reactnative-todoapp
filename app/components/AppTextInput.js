import React, { forwardRef } from 'react'
import { StyleSheet, TextInput, View } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import defaultStyles from '../config/styles'

const AppTextInput = forwardRef(({ icon, width = '100%', error, touched, ...otherProps }, ref) => {
  const validationColor = !touched ? '#223e4b' : error ? '#FF5A5F' : '#223e4b';
  return (
    <View style={styles.container}>
      {icon && <MaterialCommunityIcons name={icon} color={validationColor} style={styles.icon} />}
      <TextInput style={[defaultStyles.text, styles.textInput]} ref={ref}  {...otherProps} />
    </View>
  );
})

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