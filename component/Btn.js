import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const Btn = ({btnlabel,bgcolor,textCoor,Press}) => {
  return (
   
    <TouchableOpacity onPress={Press} style={{backgroundColor:bgcolor,alignItems:'center',marginVertical:5, borderRadius:100,width:350}}>
        <Text style={{color:textCoor,fontSize:28,fontWeight:'bold'}}>{btnlabel}</Text>
    </TouchableOpacity>
  )
}

export default Btn

const styles = StyleSheet.create({})