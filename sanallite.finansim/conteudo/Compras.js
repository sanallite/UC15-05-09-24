/* Aula 19 - Navegação entre telas, Stack Navigation - Desafio máximo, App de finanças - Tela das compras */

import React, { useState } from 'react';
import { View, Text, Switch, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import RelatorioCompras from './RelatorioCompras';
import { estilo } from '../estilo';

export default function Compras() {
    const nav = useNavigation();

    const [ estadoSwitch1, mudarEstado1 ] = useState( false );
    const [ estadoSwitch2, mudarEstado2 ] = useState( false );
    const [ estadoSwitch3, mudarEstado3 ] = useState( false );

    const mudarTela = () => {
        console.log(estadoSwitch1);
        /* Mesmo que se o estado inicial do Switch for definido como outra coisa, como o número zero, o valor de estado que é alterado alterna entre true e false */

        if ( estadoSwitch1 === true ) {
            if ( estadoSwitch2 === true || estadoSwitch3 === true  ) {
                mudarEstado2(false);
                mudarEstado3(false);
                mudarEstado1(false);
                
                alert('Selecione Apenas Uma Tela');
            }

            else {
                nav.navigate('Tela Inicial');
                
                /* O estado do Switch não será alterado após a navegação, se você voltar para essa tela vai ver que o Switch ainda está ativado. */
            }
        }
        /* Se o Switch escolhido estiver ativado e os outros desativados, será feita a navegação de tela, caso contrário, todos os Switches serão desativados até que apenas um esteja ativado. */

        else if ( estadoSwitch2 === true ) {
            if ( estadoSwitch1 === true || estadoSwitch3 === true  ) {
                mudarEstado1(false);
                mudarEstado2(false);
                mudarEstado3(false);
            }

            else {
                nav.navigate('Tela de Vendas');
            }
        }

        else if ( estadoSwitch3 === true ) {
            if ( estadoSwitch1 === true || estadoSwitch2 === true  ) {
                mudarEstado1(false);
                mudarEstado2(false);
                mudarEstado3(false);
            }

            else {
                nav.navigate('Tela de Pagamentos');
            }
        }
    }

    return (
        <View style={[ estilo.fundo, { backgroundColor: '#f95858' } ]}>
            <RelatorioCompras />
            
            <View style={ estilo.navegacao }>
                <Text style={ estilo.textoNavegacao }>Navegação</Text>

                <View style={ estilo.opcoesNavegacao }>
                    <Switch value={ estadoSwitch1 } onValueChange={ (novoValor) => mudarEstado1(novoValor) } />

                    <Text style={{ marginLeft: '1rem' }}>Ir para a Tela Inicial</Text>
                </View>

                <View style={ estilo.opcoesNavegacao }>
                    <Switch value={ estadoSwitch2 } onValueChange={ (novoValor) => mudarEstado2(novoValor) } />

                    <Text style={{ marginLeft: '1rem' }}>Ir para a Tela de Vendas</Text>
                </View>

                <View style={ estilo.opcoesNavegacao }>
                    <Switch value={ estadoSwitch3 } onValueChange={ (novoValor) => mudarEstado3(novoValor) } />
                    {/* A cada alteração de valor é chamada uma função aero, enviando um parâmetro para a função que altera o estado da variável, esse parâmetro é o novo valor do componente, nesse caso alternando entre true e false */}

                    <Text style={{ marginLeft: '1rem' }}>Ir para a tela de Pagamentos</Text>
                </View>
                
                <View style={{ alignItems: 'center' }}>
                    <Pressable onPress={ mudarTela } style={ estilo.pressable }>
                        <Text style={{ color: 'gray' }}>Continuar</Text>
                    </Pressable>
                    {/* Apenas quando o componente for pressionado que será chamada a função utilizada para fazer a navegação entre telas. */}
                </View>
            </View>
        </View>
    )
}