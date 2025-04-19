import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Home from '../screens/Home/Home';
import SettingsStack from './SettingsStack';
import AllProductsStack from "./AllProductsStack";

const Tab = createBottomTabNavigator();

function NavigationRoute() {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color }) => {
                    let iconName;
                    if (route.name === 'Home') {
                        iconName = focused
                            ? 'home'
                            : 'home-outline';
                    }
                    if (route.name === 'Settings') {
                        iconName = focused
                            ? 'settings'
                            : 'settings-outline';
                    }
                    if (route.name === 'Cars') {
                        iconName = focused
                            ? 'flash'
                            : 'flash-outline';
                    }
                    return <Ionicons name={iconName} size={24} color={color} />;
                },
                tabBarActiveTintColor: 'black',
                tabBarInactiveTintColor: 'gray',
                headerShown: false,
                tabBarStyle: {
                    backgroundColor: '#fff',
                    borderTopWidth: 0,
                    elevation: 0,
                    shadowColor: 'transparent',
                    height: 60,
                    paddingTop: 5,
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    borderRadius: 10,
                    marginHorizontal: 20,
                    marginBottom: 10,
                    shadowOpacity: 0.25,
                    shadowRadius: 3.5,
                    shadowOffset: {
                        width: 0,
                        height: 2,
                    },
                    shadowColor: '#000',
                    elevation: 5,
                    backgroundColor: '#fff',
                    borderTopLeftRadius: 10,
                    borderTopRightRadius: 10, 
                    borderBottomLeftRadius: 10,
                    borderBottomRightRadius: 10,
                    borderWidth: 0,
                    borderColor: 'transparent'
                },
            })}
        >
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Cars" component={AllProductsStack} />
            <Tab.Screen name="Settings" component={SettingsStack} />
        </Tab.Navigator>
    );
}

export default NavigationRoute;