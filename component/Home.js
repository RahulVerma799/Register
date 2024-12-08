import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Background from './Background'

import { darkGreen } from './Constant'
import Btn from './Btn'

const Home = (props) => {
  return (
    <Background>
          <View style={{marginHorizontal:40,marginVertical:100}}>
          <Text style={{color:'white', fontSize:30, textAlign:'center'}}>Lets start</Text>
      <Text style={{color:'white',fontSize:40}}>start</Text>

          <Btn btnlabel={'Login'} bgcolor={darkGreen} textCoor='white' Press={()=>props.navigation.navigate('Login')}/>
          <Btn btnlabel={'Signup'} bgcolor='white' textCoor='darkGreen' Press={()=>props.navigation.navigate('Signup')}/>
          </View>
    </Background>
  )
}

export default Home

const styles = StyleSheet.create({})