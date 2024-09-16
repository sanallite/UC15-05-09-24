import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Inicial from '../screens/Inicial';
import Cadastro from '../screens/Cadastro';
import Entrada from '../screens/Entrada';

export default function StackNav() {
    const Pilha = createNativeStackNavigator();

    return (
        <Pilha.Navigator initialRouteName='Inicial'>
            <Pilha.Screen name='Inicial' component={ Inicial } />
            <Pilha.Screen name='Cadastro' component={ Cadastro } />
            <Pilha.Screen name='Entrada' component={ Entrada } />
        </Pilha.Navigator>
    )
}