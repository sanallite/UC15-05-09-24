/* Teste com navegação aninhada */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Um from './screens/Um';
import Zero from './screens/Zero';

export default function App() {
    const Stack = createNativeStackNavigator()

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Zero'>
                <Stack.Screen name='Um' component={ Um }/>
                <Stack.Screen name='Zero' component={ Zero }/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}