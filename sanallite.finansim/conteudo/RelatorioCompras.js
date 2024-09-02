/* Aula 19 - Navegação entre telas, Stack Navigation - Desafio máximo, App de finanças - Componente do conteúdo da tela de compras */

import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { estilo } from '../estilo';

export default function RelatorioCompras() {
    const categorias = [ {nome: 'Produtos', valor_investido: '200.999,00'},
        {nome: 'Equipamentos', valor_investido: '265.949,00'},
        {nome: 'Contratação de Serviços', valor_investido: '180.500,00'},
        {nome: 'Alimentação', valor_investido: '139.786,00'},
        {nome: 'Limpeza', valor_investido: '112.199,00'},
        {nome: 'Transporte', valor_investido: '87.633,00'}
    ];

    function renderizar({ item }) {
        return (
            <View style={ estilo.itensLista }>
                <View>
                    <Text style={ estilo.nomeSetores }>{item.nome}</Text>
                </View>

                <View>
                    <Text style={ estilo.textos }>Valor Investido: R$ {item.valor_investido}</Text>
                </View>
            </View>
        )
    }

    return (
        <View style={ estilo.relatorios }>
            <View style={ estilo.resultados }>
                <Text style={ estilo.textoResultados }>Valor Total Investido:</Text>
                <Text style={ estilo.textoResultados }>R$ 987.066,00</Text>
            </View>

            <View style={ estilo.resultados }>
                <Text style={ estilo.textoResultados }>Categoria Com Maior Gasto:</Text>
                <Text style={ estilo.destaques }>{ categorias[1].nome }</Text>
                {/* Você precisa extrair o valor da propriedade que quer exibir daquele item do array, porque um objeto inteiro não vai ser exibido, exceto se você torná-lo uma string com JSON.stringfy() */}
            </View>

            <View style={ estilo.tituloLista }>
                <Text style={ estilo.textoResultados }>Setores</Text>
            </View>

            <FlatList data={ categorias } keyExtractor={ (item) => item.nome } renderItem={ renderizar } />
        </View>
    )
}