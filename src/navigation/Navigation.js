import React from 'react'
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import StartingScreen from '../screens/StartingScreen';
import ChatScreen from '../screens/ChatScreen';

const Stack=createNativeStackNavigator();


export default function HomeNavigation() {
  return (
    <Stack.Navigator>
        <Stack.Screen name="start" component={StartingScreen} 
        options={{headerShown:false}} />
        <Stack.Screen name="chat" component={ChatScreen} />
    </Stack.Navigator>
  )
}