import { NavigationContainer } from '@react-navigation/native';

import React from 'react';
import start from '../Screens/Start';
import createAccount from '../Screens/createAccount';
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
import fullProfile from '../Screens/fullProfile';
import { RouteName } from './RouteName';
import shop from '../Screens/shop';
import flashSaleLive from '../Screens/flashSaleLive';
import flashSale from '../Screens/flashSale';
import flashSaleFull from '../Screens/flashSaleFull';
import live from '../Screens/live';

const Stack = createStackNavigator();

const RootNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name={RouteName.START_SCREEN} component={start} />

        <Stack.Screen
          name={RouteName.CREATE_ACCOUNT_SCREEN}
          component={createAccount}
        />

        <Stack.Screen name={RouteName.LOGIN_SCREEN} component={Login} />

        <Stack.Screen name={RouteName.PASSWORD_SCREEN} component={Password} />

        <Stack.Screen
          name={RouteName.PASSWORD_TYPING_SCREEN}
          component={passwordTyping}
        />

        <Stack.Screen
          name={RouteName.WRONG_PASSWORD_SCREEN}
          component={wrongPassword}
        />

        <Stack.Screen
          name={RouteName.PASSWORD_RECOVERY_SCREEN}
          component={passwordRecovery}
        />

        <Stack.Screen
          name={RouteName.PASSWORD_RECOVERY_CODE_SCREEN}
          component={passwordRecoveryCode}
        />

        <Stack.Screen
          name={RouteName.NEW_PASSWORD_SCREEN}
          component={newPassord}
        />

        <Stack.Screen
          name={RouteName.MAXIMUM_ATTEMPTS_SCREEN}
          component={maximumAttempts}
        />

        <Stack.Screen
          name={RouteName.HELLO_CARD_SCREEN}
          component={helloCard}
        />

        <Stack.Screen
          name={RouteName.READY_CARD_SCREEN}
          component={readyCard}
        />

        <Stack.Screen name={RouteName.PROFILE_SCREEN} component={profile} />

        <Stack.Screen
          name={RouteName.FULL_PROFILE_SCREEN}
          component={fullProfile}
        />

        <Stack.Screen name={RouteName.SHOP_SCREEN} component={shop} />

        <Stack.Screen
          name={RouteName.FLASH_SALE_LIVE_SCREEN}
          component={flashSaleLive}
        />

        <Stack.Screen
          name={RouteName.FLASH_SALE_SCREEN}
          component={flashSale}
        />

        <Stack.Screen
          name={RouteName.FLASH_SALE_FULL_SCREEN}
          component={flashSaleFull}
        />

        <Stack.Screen name={RouteName.LIVE_SCREEN} component={live} />

        {/* react native image slider show */}

        {/* react native snap carousel */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
