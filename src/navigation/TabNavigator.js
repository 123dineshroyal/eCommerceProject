import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useSelector } from 'react-redux';
import IconMc from 'react-native-vector-icons/MaterialCommunityIcons';
import IconAnt from 'react-native-vector-icons/AntDesign';
import { RouteName } from './RouteName';
import Profile from '../Screens/profile';
import { COLORS } from '../constants/themes';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FullProfile from '../Screens/fullProfile';
import shop from '../Screens/shop';
import Icon from 'react-native-vector-icons/Ionicons';
import FlashSaleLive from '../Screens/flashSaleLive';
import Feather from 'react-native-vector-icons/Feather';
import FlashSaleFull from '../Screens/flashSaleFull';
import StoryDots from '../Screens/storyDots';
import Live from '../Screens/live';

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator
      backBehavior={'history'}
      screenOptions={{
        tabBarStyle: {
          height: 60,
          borderTopColor: COLORS.outlineVariant,
          borderTopWidth: 1,
        },
      }}
    >
      <Tab.Screen
        name={RouteName.FULL_PROFILE_SCREEN}
        component={FullProfile}
        options={({ navigation }) => ({
          tabBarLabel: 'Home',
          tabBarShowLabel: false,
          headerShown: false,
          headerShadowVisible: false,
          // tabBarActiveBackgroundColor:COLORS.background,

          tabBarIcon: ({ focused }) => (
            <View>
              {focused ? (
                <View style={styles.tabIconContainer}>
                  <IconMc
                    name="home-outline"
                    color={COLORS.onBackground}
                    size={30}
                  />
                  &&
                  <View style={styles.tabUnderline}/>
                </View>
              ) : (
                <IconMc name="home-outline" color={COLORS.primary} size={30} />
              )}
            </View>
          ),
        })}
      />

      <Tab.Screen
        name={RouteName.SHOP_SCREEN}
        component={shop}
        options={({ navigation }) => ({
          tabBarLabel: 'heart',
          tabBarShowLabel: false,
          headerShown: false,
          headerShadowVisible: false,

          tabBarIcon: ({ focused }) => (
            <View>
              {focused ? (
                <View style={styles.tabIconContainer}>
                <IconMc
                  name="heart-outline"
                  color={COLORS.onBackground}
                  size={30}
                />&&
                <View style={styles.tabUnderline}/>
                </View>
              ) : (
                <IconMc name="heart-outline" color={COLORS.primary} size={30} />
              )}
            </View>
          ),
        })}
      />

      <Tab.Screen
        name={RouteName.FLASH_SALE_FULL_SCREEN}
        component={FlashSaleFull}
        options={({ navigation }) => ({
          tabBarLabel: 'list',
          tabBarShowLabel: false,
          headerShown: false,
          headerShadowVisible: false,

          tabBarIcon: ({ focused }) => (
            <View>
              {focused ? (
                <View style={styles.tabIconContainer}>
                <Icon
                  name="list-outline"
                  color={COLORS.onBackground}
                  size={30}
                />&&
                <View style={styles.tabUnderline}/>
                </View>
              ) : (
                <Icon name="list-outline" color={COLORS.primary} size={30} />
              )}
            </View>
          ),
        })}
      />

      <Tab.Screen
        name={RouteName.LIVE_SCREEN}
        component={Live}
        options={({ navigation }) => ({
          tabBarLabel: 'Bag',
          headerShown: false,
          tabBarShowLabel: false,
          headerShadowVisible: false,

          tabBarIcon: ({ focused }) => (
            <View>
              {focused ? (
                <View style={styles.tabIconContainer}>
                <Feather
                  name="shopping-bag"
                  color={COLORS.onBackground}
                  size={30}
                />&&
                <View style={styles.tabUnderline}/>
                </View>
              ) : (
                <Feather name="shopping-bag" color={COLORS.primary} size={30} />
              )}
            </View>
          ),
        })}
      />

      <Tab.Screen
        name={RouteName.STORY_DOTS_SCREEN}
        component={StoryDots}
        options={({ navigation }) => ({
          tabBarLabel: 'person',
          headerShown: false,
          tabBarShowLabel: false,
          headerShadowVisible: false,

          tabBarIcon: ({ focused }) => (
            <View style={styles.tabIconContainer}>
              {focused ? (
                <View>
                <Icon
                  name="person-outline"
                  color={COLORS.onBackground}
                  size={30}
                />&&
                <View style={[styles.tabUnderline,{marginLeft:5}]}/>
                </View>
              ) : (
                <Icon name="person-outline" color={COLORS.primary} size={30} />
              )}
            </View>
          ),
        })}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  tabIconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabUnderline: {
    height: 3,
    width: 20,
    backgroundColor: COLORS.onBackground,
    borderRadius: 2,
  },
});
