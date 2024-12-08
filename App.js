
import { createComponentForStaticNavigation, NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Home from './component/Home';
import Signup from './component/Signup';
import Login from './component/Login';

const Stack=createNativeStackNavigator();


const App=()=>{

  return(
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown:false}}>
            <Stack.Screen name='Home' component={Home}/>
            <Stack.Screen name='Signup' component={Signup}/>
            <Stack.Screen name='Login' component={Login}/>
        </Stack.Navigator>
        <View>
          <Text>Home Application</Text>
        </View>

      </NavigationContainer>
  )
};


export default App;
