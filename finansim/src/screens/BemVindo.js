import React from 'react';
import { View, Text, Image, Pressable, Alert } from 'react-native';

import { estilo } from './inicial_bem_vindo_estilo';

import Pressionaveis from '../components/Pressionaveis/Pressionaveis';

import { useNavigation } from '@react-navigation/native';

export default function BemVindo() {
    let logo = require('../assets/Finansim.png');

    const nav = useNavigation();

    const navegarTelaCadastro = () => {
        nav.navigate('Cadastro')
    }

    const navegarTelaEntrada = () => {
        nav.navigate('Entrada')
    }

    return (
        <View>
            <View>
                <Image source={ logo } style={ estilo.logo } />
            </View>
            
            <View>
                <Text>Finansim</Text>

                <Text>Administre as finanças da sua empresa facilmente com a ajuda da Finansim, aqui você terá relatórios mensais de resultados e investimentos internos, além da sua folha de pagamentos.</Text>
            </View>

            <View>
                <Pressable onPress={ navegarTelaCadastro }>
                    <Text>Cadastre-se</Text>
                </Pressable>

                <Pressable onPress={ navegarTelaEntrada }>
                    <Text>Entrar</Text>
                </Pressable>
            </View>

            <View>
                <Pressable onPress={ () => Alert.alert('Teste', 'Alerta exibido', [ { text: 'Botão', onPress: () => nav.navigate('Entrada') } ]) }>
                    <Text>Teste</Text>
                </Pressable>
            </View>
        </View>
    )
}