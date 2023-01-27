import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { colors, fonts } from '../../../res'

const Button = ({onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.bg_Btn}>
      <Text style={styles.text_Btn}>Get-Started</Text>
    </TouchableOpacity>
  )
}


const styles = StyleSheet.create({
  bg_Btn: {
    width: 259,
    height: 50,
    backgroundColor: '#99B8C8',
    borderRadius: 20,
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 30,
  },
  text_Btn: {
    textAlign: 'center',
    color: colors.white,
    fontSize: 18,
    fontFamily: fonts.Medium
  }
})

export default Button