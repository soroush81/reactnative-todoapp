import React,{useState} from 'react'
import { StyleSheet,TouchableWithoutFeedback,View } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import defaultStyles from '../config/styles'
const CheckBox = () => {

  const [checkBox, setCheckBox] = useState()
  return (
    <TouchableWithoutFeedback onPress={() => setCheckBox(!checkBox)}>
        <View style={styles.container}>
            {checkBox && <MaterialCommunityIcons style={styles.checkBox} name="checkbox-marked" size={30} color={defaultStyles.colors.secondary} />}
        </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container:{
      alignItems:'center',
      borderWidth:1,
      borderColor:defaultStyles.colors.mediumlight,
      justifyContent:'center',
      width:25,
      height:25,
      borderRadius:3
  },
  checkBox:{
    flex:1
  }
})
export default CheckBox;