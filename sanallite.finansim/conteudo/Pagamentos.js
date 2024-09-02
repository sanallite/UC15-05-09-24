import React from 'react';
import { View } from 'react-native';
import RelatorioPagamentos from './RelatorioPagamentos';
import { estilo } from '../estilo';

export default function Pagamentos() {
    return (
        <View style={[ estilo.fundo, { backgroundColor: '#7188ea' } ]}>
            <RelatorioPagamentos />
        </View>
    )
}