import React,{useState} from 'react'
import { StyleSheet,TouchableWithoutFeedback,View } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import defaultStyles from '../config/styles'
const CheckBox = ({value,onChange}) => {

    const handleChange = () => {
        setCheckBox(!checkBox); 
        onChange();
    }
    

  const [checkBox, setCheckBox] = useState(value)
  return (
    <TouchableWithoutFeedback onPress={handleChange}>
        <View style={styles.container}>
            {
                checkBox && 
                    <MaterialCommunityIcons 
                        style={styles.checkBox} 
                        name="checkbox-marked" 
                        size={25} 
                        color={defaultStyles.colors.secondary} 
                    />
            }
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
    left:0,
    flex:1
  }
})
export default CheckBox;