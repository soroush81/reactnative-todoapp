import React from 'react'
import { StyleSheet, TouchableOpacity, View } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import defaultStyles from '../config/styles'
import AppText from './AppText'
const CategoryItem = ({ item, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <View>
        {item.icon &&
          <MaterialCommunityIcons style={styles.icon} name={item.icon.name} size={50} color={item.icon.iconColor} />
        }
        <AppText style={styles.label}>{item.title}</AppText>
        <AppText style={styles.subTitle}>{item.subTitle}</AppText>
      </View>
    </TouchableOpacity>

  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderRadius: 10,
    borderColor: defaultStyles.colors.mediumlight,
    width: 150,
    height: 150,
    paddingLeft: 10,
    paddingTop: 10,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    marginBottom: 20
  },
  label: {
    paddingLeft: 10,
    paddingTop: 15,
    textAlign: 'left',
    fontSize: 14,
    fontWeight: "700",
    color: defaultStyles.colors.medium
  },
  subTitle: {
    paddingLeft: 10,
    textAlign: 'left',
    color: defaultStyles.colors.mediumlight,
    fontSize: 12,
    fontWeight: "700"
  }
})
export default CategoryItem;