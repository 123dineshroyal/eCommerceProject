import { NavigationContainer } from '@react-navigation/native';

import React from 'react';
import start from '../Screens/Start';
import createAccount from '../Screens/createAccount'
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../Screens/Login';
import Password from '../Screens/Password';
import passwordTyping from '../Screens/passwordTyping';
import wrongPassword from '../Screens/wrongPassword';
import passwordRecovery from '../Screens/passwordRecovery';
import passwordRecoveryCode from '../Screens/passwordRecovery_Code';
import newPassord from '../Screens/newPassword';
import maximumAttempts from '../Screens/maximumAttempts';
import helloCard from '../Screens/helloCard';
import readyCard from '../Screens/readyCard';
import profile from '../Screens/profile';

const Stack = createStackNavigator();

const RootNavigator = () =>{
    return(
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown:false}}>
                
                <Stack.Screen name='StartScreen' component={start}/>

                <Stack.Screen name='createAccountScreen' component={createAccount}/>

                <Stack.Screen name='loginScreen' component={Login}/>

                <Stack.Screen name='passwordScreen' component={Password}/>

                <Stack.Screen name='Password-Typing-Screen' component={passwordTyping}/>

                <Stack.Screen name='Wrong-Password-Screen' component={wrongPassword}/>

                <Stack.Screen name='Password-Recovery-Screen' component={passwordRecovery}/>

                <Stack.Screen name='Password-Recovery-Code-Screen' component={passwordRecoveryCode}/>

                <Stack.Screen name='New-Password-Screen' component={newPassord}/>

                <Stack.Screen name='Maximum-Attempts-Screen' component={maximumAttempts}/>

                <Stack.Screen name='HelloCard-Screen' component={helloCard}/>

                <Stack.Screen name='ReadyCard-Screen' component={readyCard}/>

                <Stack.Screen name='Profile-Screen' component={profile} />
                
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default RootNavigator;