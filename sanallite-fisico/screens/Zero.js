import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Dois from './Dois';
import Tres from './Tres';

export default function Zero() {
    const Tab = createBottomTabNavigator();

    return (
        <Tab.Navigator>
            <Tab.Screen name='Dois' component={ Dois }/>
            <Tab.Screen name='Trẽs' component={ Tres }/>
        </Tab.Navigator>
    )
}