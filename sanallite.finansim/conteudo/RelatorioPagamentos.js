import React from 'react';
import { View, Text, SectionList } from 'react-native';
import { estilo } from '../estilo';

export default function RelatorioPagamentos() {
    const setores = [ [ 'Celulares', 120 ], [ 'Computadores', 108 ], [ 'Assistência Técnica', 97 ], [ 'Acessórios', 75 ] ];
    /* Adicione mais setores depois */
    
    let total_funcionarios = setores[0][1] + setores[1][1] + setores[2][1] + setores[3][1];
    /* Não esqueça que os índices começam em zero... */

    let valor_pago = 2000000;

    let media_salarial = valor_pago / total_funcionarios;

    const valoresReais = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    })

    function exibirNumeroF({ item }) {
        return (
            <View style={[ estilo.itensLista ]}>
                <Text style={ estilo.textos }>Número de Funcionários: {item}</Text>
            </View>
        )
    }

    function exibirTituloS({ section }) {
        return (
            <View>
                <Text style={ estilo.destaques }>{section.title}</Text>
            </View>
        )
    }

    return (
        <View style={ estilo.relatorios }>
            <View style={ estilo.resultados }>
                <Text style={ estilo.textoResultados }>Valor Total Pago em Salários</Text>
                <Text style={ estilo.textoResultados }>{ valoresReais.format(valor_pago) }</Text>
            </View>

            <View style={ estilo.resultados }>
                <Text style={ estilo.textoResultados }>Número de Colaboradores:</Text>
                <Text style={ estilo.textoResultados }>{total_funcionarios}</Text>
            </View>

            <View style={ estilo.resultados }>
                <Text style={ estilo.textoResultados }>Média Salarial:</Text>
                <Text style={ estilo.textoResultados }>{ valoresReais.format(media_salarial) }</Text>
            </View>

            <View style={ estilo.tituloLista }>
                <Text style={ estilo.textoResultados }>Setores</Text>
            </View>

            <SectionList 
                sections={[ 
                    { title: setores[0][0], data: [setores[0][1]] },
                    { title: setores[1][0], data: [setores[1][1]] },
                    { title: setores[2][0], data: [setores[2][1]] },
                    { title: setores[3][0], data: [setores[3][1]] },
                ]}
                /* A propriedade data precisa ser um vetor, pois ela percorre cada item das seções para exibir o conteúdo na tela, mesmo se tiver apenas um item, caso contrário ela retorna apenas um valor. A definição das seções também poderia ser feita utilizando a função map, para criar os objetos com title e data automáticamente, conforme o número de itens do vetor mapeado. Consulte o desafio 2 do SectionList para ver em ação. */
                
                renderItem={ exibirNumeroF }
                renderSectionHeader={ exibirTituloS }
            />
        </View>
    )
}