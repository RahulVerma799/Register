import React from 'react'
import { ImageBackground, View } from 'react-native'

const Background = ({children}) => {
  return (
    <View>
        <ImageBackground source={require("./back.webp")} style={{height:'100%'}}/>
   <View style={{position:'absolute'}}>
        {children}
   </View>
    </View>
    
  )
}

export default Background