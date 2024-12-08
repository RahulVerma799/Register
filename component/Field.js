import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { darkGreen } from './Constant'

const Field = (props) => {
  return (
   <TextInput {...props} style={{borderRadius:100,color:darkGreen,paddingHorizontal:10,width:'80%', marginEnd:30,marginTop:30,
    backgroundColor:'rgb(220,220,220)'
   }}
   placeholderTextColor={darkGreen}
   >

   </TextInput>
  )
}

export default Field

const styles = StyleSheet.create({})