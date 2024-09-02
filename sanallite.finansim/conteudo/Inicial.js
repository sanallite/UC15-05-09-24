/* Aula 19 - Navegação entre telas, Stack Navigation - Desafio máximo, App de finanças */

import React, { useState } from 'react';
import { View, Text, Pressable, Image } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { estilo } from '../estilo';

export default function Inicial() {
    const nav = useNavigation();

    const [ itemSelected, setItem ] = useState('');

    const alterarItem = (novo) => {
        setItem(novo);
    }

    const mudarTela = (selecionada) => {
        if ( selecionada != '' ) {
            nav.navigate(selecionada);
        }

        else {
            nav.navigate('Categorias');
        }
    }

    let logo = require('./asset-management.png')

    return (
        <View style={[ estilo.fundo, { backgroundColor: 'orange' } ]}>
            <View style={ estilo.cabecalhoInicial }>
                <Image source={ logo } style={ estilo.logo } />

                <Text style={ estilo.descInicial }>Administre as finanças da sua empresa facilmente através desse aplicativo. Começe pela categoria que quiser e navegue livremente pelas telas.</Text>
            </View>

            <View style={[ estilo.navegacao, { flex: 1 } ]}>


                <View style={{ alignItems: 'center' }}>
                    <Pressable onPress={ () => mudarTela(itemSelected) } style={ estilo.pressable }>
                        <Text style={{ color: 'gray' }}>Continuar</Text>
                    </Pressable>
                </View>
            </View>
        </View>
    )
}