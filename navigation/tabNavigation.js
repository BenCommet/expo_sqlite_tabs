import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeScreen } from '../screens/home';
import { CalendarScreen } from '../screens/calendar';

const Tab = createBottomTabNavigator();

export default function TabNavigator(){
    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Calendar" component={CalendarScreen} />
        </Tab.Navigator>
    )
} 