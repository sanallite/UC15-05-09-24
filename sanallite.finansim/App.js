/* Projeto Integrador Desenvolvedor Mobile - Finansim, Finanças Empresariais */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Inicial from './conteudo/Inicial';
import Categorias from './conteudo/Categorias';

export default function App() {
  const Pilha = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Pilha.Navigator initialRouteName='Tela Inicial'>
        <Pilha.Screen name='Tela Inicial' component={ Inicial }/>
        <Pilha.Screen name='Categorias' component={ Categorias } options={{ headerShown: false }}/>
      </Pilha.Navigator>
    </NavigationContainer>
  )
}