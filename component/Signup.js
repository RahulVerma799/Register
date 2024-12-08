import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import Background from './Background';
import { darkGreen } from './Constant';
import Field from './Field';
import Btn from './Btn';

const Signup = (props) => {
  return (
    <Background>
      <View style={{ alignItems: 'center', width: 460 }}>
        <Text style={{ color: 'white', fontSize: 65, fontWeight: 'bold' }}>
          Signup
        </Text>
        <View
          style={{
            backgroundColor: 'white',
            height: 700,
            width: 460,
            borderTopLeftRadius: 130,
            paddingTop: 100,
            alignItems: 'center',
          }}
        >
          <Text style={{ fontSize: 40, color: darkGreen, fontWeight: 'bold' }}>
            Welcome
          </Text>

          <Text
            style={{
              color: 'grey',
              fontSize: 19,
              fontWeight: 'bold',
              marginBottom: 20,
            }}
          >
            Signup to your account
          </Text>

          <Field placeholder="First Name" />
          <Field placeholder="Second Name" />
          <Field placeholder="Mobile" keyboardType="number-pad" />
          <Field placeholder="Email" keyboardType="email-address" />
          <Field placeholder="Password" secureTextEntry={true} />

          <Btn
            textColor="white"
            bgcolor={darkGreen}
            btnlabel="Signup"
            Press={() => console.warn('Signed up')}
          />

          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 20,
            }}
          >
            <Text>Already have an Account?</Text>
            <TouchableOpacity
              onPress={() => props.navigation.navigate('Login')}
            >
              <Text
                style={{ color: darkGreen, fontWeight: 'bold', marginLeft: 5 }}
              >
                Login
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Background>
  );
};

export default Signup;
