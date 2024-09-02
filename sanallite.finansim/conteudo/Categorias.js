import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Vendas from './Vendas';
import Compras from './Compras';
import Pagamentos from './Pagamentos';

export default function Categorias() {
    const Abas = createBottomTabNavigator();
    
    return (
        <Abas.Navigator initialRouteName='Vendas'>
            <Abas.Screen  name='Compras' component={ Compras }/>
            <Abas.Screen name='Vendas' component={ Vendas }/>
            <Abas.Screen name='Pagamentos' component={ Pagamentos }/>
        </Abas.Navigator>
    )
}