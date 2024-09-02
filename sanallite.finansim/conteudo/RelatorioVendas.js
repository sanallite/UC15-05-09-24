/* Aula 19 - Navegação entre telas, Stack Navigation - Desafio máximo, App de finanças - Componente do conteúdo da tela de vendas */

import React from 'react';
import { View, Text, FlatList, ScrollView } from 'react-native';
import { estilo } from '../estilo';

export default function RelatorioVendas() {
    let resultados = '2.020.565,22';
    let setores = [ 
        { nome: 'Celulares', resultados: '896.034,22', numero_vendas: 3000 }, 
        { nome: 'Computadores', resultados: '567.435,64', numero_vendas: 2145 },
        { nome: 'Assistência Técnica', resultados: '425.642,11', numero_vendas: 1459 },
        { nome: 'Acessórios', resultados: '131.453,25', numero_vendas: 1123 }
    ];

    let janeiro = [
        { setor: 'Celulares', resultados: 148259.33, numeroVendas: 400 },
        { setor: 'Computadores', resultados: 123800.31, numeroVendas: 340 },
        { setor: 'Assistência Técnica', resultados: 94750.43, numeroVendas: 220 },
        { setor: 'Acessórios', resultados: 43546.05, numeroVendas: 140 }
    ]

    let fevereiro = [
        { setor: 'Celulares', resultados: 252579.52, numeroVendas: 740 },
        { setor: 'Computadores', resultados: 356086.50, numeroVendas: 670 },
        { setor: 'Assistência Técnica', resultados: 89567.06, numeroVendas: 340 },
        { setor: 'Acessórios', resultados: 84704.73, numeroVendas: 240 }
    ]

    let marco = [
        { setor: 'Celulares', resultados: 466842.31, numeroVendas: 450 },
        { setor: 'Computadores', resultados: 424856.74, numeroVendas: 580 },
        { setor: 'Assistência Técnica', resultados: 54893.21, numeroVendas: 760 },
        { setor: 'Acessórios', resultados: 74651.42, numeroVendas: 520 }
    ]

    let abril = [
        { setor: 'Celulares', resultados: 724251.00, numeroVendas: 870 },
        { setor: 'Computadores', resultados: 764124.11, numeroVendas: 420 },
        { setor: 'Assistência Técnica', resultados: 346745.14, numeroVendas: 670 },
        { setor: 'Acessórios', resultados: 75411.14, numeroVendas: 120 }
    ]

    let maio = [
        { setor: 'Celulares', resultados: 174879.42, numeroVendas: 750 },
        { setor: 'Computadores', resultados: 751213.34, numeroVendas: 910 },
        { setor: 'Assistência Técnica', resultados: 721364.42, numeroVendas: 950 },
        { setor: 'Acessórios', resultados: 97514.11, numeroVendas: 460 }
    ]

    let junho = [
        { setor: 'Celulares', resultados: 324789.74, numeroVendas: 590 },
        { setor: 'Computadores', resultados: 375671.21, numeroVendas: 640 },
        { setor: 'Assistência Técnica', resultados: 37467.42, numeroVendas: 370 },
        { setor: 'Acessórios', resultados: 34568.41, numeroVendas: 310 }
    ]

    let julho = [
        { setor: 'Celulares', resultados: 367894.12, numeroVendas: 320 },
        { setor: 'Computadores', resultados: 387122.54, numeroVendas: 605 },
        { setor: 'Assistência Técnica', resultados: 87987.21, numeroVendas: 620 },
        { setor: 'Acessórios', resultados: 687896.71, numeroVendas: 550 }
    ]

    let agosto = [
        { setor: 'Celulares', resultados: 765721.11, numeroVendas: 400 },
        { setor: 'Computadores', resultados: 348744.12, numeroVendas: 390 },
        { setor: 'Assistência Técnica', resultados: 54876.41, numeroVendas: 402 },
        { setor: 'Acessórios', resultados: 641221.74, numeroVendas: 890 }
    ]

    let setembro = [
        { setor: 'Celulares', resultados: 374897.41, numeroVendas: 580 },
        { setor: 'Computadores', resultados: 98712.21, numeroVendas: 470 },
        { setor: 'Assistência Técnica', resultados: 89427.44, numeroVendas: 320 },
        { setor: 'Acessórios', resultados: 67136.74, numeroVendas: 480 }
    ]

    let outubro = [
        { setor: 'Celulares', resultados: 489721.21, numeroVendas: 370 },
        { setor: 'Computadores', resultados: 597213.57, numeroVendas: 590 },
        { setor: 'Assistência Técnica', resultados: 57542.12, numeroVendas: 440 },
        { setor: 'Acessórios', resultados: 45794.21, numeroVendas: 260 }
    ]

    let novembro = [
        { setor: 'Celulares', resultados: 1567489.41, numeroVendas: 510 },
        { setor: 'Computadores', resultados: 3678421.53, numeroVendas: 990 },
        { setor: 'Assistência Técnica', resultados: 489421.11, numeroVendas: 404 },
        { setor: 'Acessórios', resultados: 675421.75, numeroVendas: 850 }
    ]

    let dezembro = [
        { setor: 'Celulares', resultados: 875512.10, numeroVendas: 610 },
        { setor: 'Computadores', resultados: 675142.01, numeroVendas: 570 },
        { setor: 'Assistência Técnica', resultados: 278942.15, numeroVendas: 280 },
        { setor: 'Acessórios', resultados: 155472.31, numeroVendas: 250 }
    ]

    return (
        <View style={ estilo.relatorios }>
            <View style={ estilo.resultados }>
                <Text style={ estilo.textoResultados }>Valor Bruto Recebido:</Text>
                <Text style={ estilo.textoResultados }>R$ {resultados}</Text>
            </View>

            <View style={ estilo.resultados }>
                <Text style={ estilo.textoResultados }>Setor Mais Rentável:</Text>
                <Text style={ estilo.destaques }>{setores[0].nome}</Text>
                {/* Você precisa extrair o valor da propriedade que quer exibir daquele item do array, porque um objeto inteiro não vai ser exibido, exceto se você torná-lo uma string com JSON.stringfy() */}
            </View>

            <View style={ estilo.tituloLista }>
                <Text style={ estilo.textoResultados }>Setores</Text>
            </View>

            <FlatList data={ setores } keyExtractor={( item, index ) => item[index] } renderItem={ ({item}) => ( 
                <View style={ estilo.itensLista }>
                    <View>
                        <Text style={ estilo.nomeSetores }>{item.nome}</Text>
                    </View>

                    <View>
                        <Text style={ estilo.textos }>Resultados Brutos: R$ {item.resultados}</Text>
                        
                        <Text style={ estilo.textos }>Número de Vendas: {item.numero_vendas}</Text>
                    </View>
                </View>
            ) } />
            {/* Na renderização do item, é chamada uma função anônima, passado por parâmetro um objeto que contém o item, mas não apenas ele, também podendo conter o index do item por exemplo. Usando as chaves você extraí apenas o item, que é o valor do item no array fonte e envia para renderização, usando o return através dos parênteses. */}
        </View>
    )
}
