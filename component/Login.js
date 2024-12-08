import {Alert, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Background from './Background';
import { darkGreen } from './Constant';
import Field from './Field';
import Btn from './Btn';

const Login = (props) => {
  return (
    <Background>
        <View style={{alignItems:'center',width:460}}>
      <Text style={{color: 'white', fontSize: 65, fontWeight: 'bold'}}>
        Login
      </Text>
      <View style={{backgroundColor:"white",height:700,width:460,
        borderTopLeftRadius:130,paddingTop:100,alignItems:'center'
        }}>
                <Text style={{fontSize:40,color:darkGreen,fontWeight:'bold'}}>Welcome</Text>

                <Text style={{color:'grey', fontSize:19, fontWeight:'bold'}}>Login to your account</Text>
                <Field placeholder='Email' keyboardType={'Email-Address'}/>
                <Field placeholder='Password' secureTextEntry={true}/>

        <View style={{alignItems:'flex-end',width:'78%',paddingRight:16,marginBottom:250}}>
            <Text style={{color:darkGreen,fontWeight:'bold' ,fontSize:16}}>Forget Password ?</Text>
        </View>
        <Btn  textColor='white' bgcolor={darkGreen} btnlabel='Login' Press={()=>console.warn('loged in') }/>

            <View style={{display:'flex', flexDirection:'row', justifyContent:'space-between'}}>
                <Text>Don't Have A Account ?</Text>
                <TouchableOpacity onPress={()=>props.navigation.navigate('Signup')}>
                    <Text style={{color:darkGreen,fontWeight:'bold'}}>Signup</Text>
                </TouchableOpacity>
            </View>

      </View>
      </View>
    </Background>
  );
};

export default Login;

const styles = StyleSheet.create({});
