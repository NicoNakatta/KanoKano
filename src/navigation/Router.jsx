import React from "react";
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Account, Home, NewAnews, News, EditNews } from '../screens';
import { Home3, UserSquare, Send2 } from 'iconsax-react-native';
import { fontType, colors } from '../theme';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function MainApp() {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarHideOnKeyboard: true,
                tabBarActiveTintColor: colors.darkPink(),
                tabBarInactiveTintColor: colors.grey(),
                tabBarStyle: {
                    paddingBottom: 10,
                    paddingTop: 10,
                    height: 60,
                },
                tabBarLabelStyle: {
                    marginTop: 5,
                    fontSize: 10,
                    fontFamily: fontType['NS-default'],
                },
            }}>
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ focused, color }) => (
                        <Home3
                            color={color}
                            variant={focused ? 'Bold' : 'Linear'}
                            size={24} />
                    ),
                    headerShown: false,
                }}
            />
            <Tab.Screen
                name="Write"
                component={NewAnews}
                options={{
                    tabBarLabel: 'Write',
                    tabBarIcon: ({ focused, color }) => (
                        <Send2
                            color={color}
                            variant={focused ? 'Bold' : 'Linear'}
                            size={24} />
                    ),
                    headerShown: false,
                }}
            />
            <Tab.Screen
                name="Account"
                component={Account}
                options={{
                    tabBarLabel: 'Account',
                    tabBarIcon: ({ focused, color }) => (
                        <UserSquare
                            color={color}
                            variant={focused ? 'Bold' : 'Linear'}
                            size={24} />
                    ),
                    headerShown: false,
                }}
            />
        </Tab.Navigator>
    );
};

const Router = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="MainApp"
                component={MainApp}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="News"
                component={News}
                options={{
                    headerShown: false,
                    animationEnabled: true,
                    animationTypeForReplace: 'pop',
                    gestureEnabled: true,
                    gestureDirection: 'horizontal',
                    ...TransitionPresets.SlideFromRightIOS,
                }}
            />
            <Stack.Screen
                name="editNews"
                component={EditNews}
                options={{
                    headerShown: false,
                    animationEnabled: true,
                    animationTypeForReplace: 'pop',
                    gestureEnabled: true,
                    gestureDirection: 'horizontal',
                    ...TransitionPresets.SlideFromRightIOS,
                }}
            />
        </Stack.Navigator>
    );
};

export default Router;