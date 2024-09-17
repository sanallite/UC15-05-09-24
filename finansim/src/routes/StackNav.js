import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import BemVindo from '../screens/BemVindo';
import Cadastro from '../screens/Cadastro';
import Entrada from '../screens/Entrada';
import Inicial from '../screens/Inicial';

export default function StackNav() {
    const Pilha = createNativeStackNavigator();

    return (
        <Pilha.Navigator initialRouteName='Bem Vindo'>
            <Pilha.Screen name='Bem Vindo' component={ BemVindo } />
            <Pilha.Screen name='Cadastro' component={ Cadastro } />
            <Pilha.Screen name='Entrada' component={ Entrada } />
            <Pilha.Screen name='Inicial' component={ Inicial } />
        </Pilha.Navigator>
    )
}