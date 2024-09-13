import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Inicial from '../screens/Inicial';

export default function StackNav() {
    const Pilha = createNativeStackNavigator();

    return (
        <NavigationContainer>
            <Pilha.Navigator initialRouteName='Inicial'>
                <Pilha.Screen name='Inicial' component={ Inicial } />
            </Pilha.Navigator>
        </NavigationContainer>
    )
}