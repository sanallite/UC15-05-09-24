/* Aula 19 - Navegação entre telas, Stack Navigation - Desafio máximo, App de finanças - Folha de estilos */

import { StyleSheet } from 'react-native';
import RelatorioVendas from './conteudo/RelatorioVendas';

export const estilo = StyleSheet.create({
    fundo: {
        flex: 1,
    },

    cabecalhoInicial: {
        alignItems: 'center',
        backgroundColor: 'orange',
        padding: '1rem'
    },

    logo: {
        margin: '1rem',
        height: 200,
        width: 200
    },

    descInicial: {
        color: 'white',
        fontSize: '1.1rem',
        textAlign: 'center'
    },

    navegacao: {
        padding: '1rem',
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
        marginVertical: '1rem',
        marginHorizontal: '1rem',
        borderRadius: 20
    },

    pickerInicial: {
        padding: '0.625rem',
        borderColor: 'lightgray',
        borderRadius: 5,
        color: 'gray'
    },
    
    pressable: {
        backgroundColor: 'white',
        padding: '0.625rem',
        width: '45%',
        borderRadius: 5,
        alignItems: 'center',
        margin: '1rem',
        borderColor: 'lightgray',
        borderWidth: 1
    },

    relatorios: {
        flex: 1,
        padding: '1rem'
    },

    resultados: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: '1rem',
        alignItems: 'center'
    },

    textoResultados: {
        fontWeight: 'bold',
        fontSize: '1.2rem',
        color: 'white'
    },

    destaques: {
        backgroundColor: 'white',
        borderRadius: 5,
        padding: '0.625rem',
        borderColor: 'green',
        borderWidth: 1,
        color: 'green'
    },

    tituloLista: {
        alignItems: 'center',
        marginBottom: '1rem'
    },

    itensLista: {
        backgroundColor: 'white',
        marginBottom: '0.625rem',
        padding: '0.625rem',
        borderRadius: 5
    },

    nomeSetores: {
        fontSize: '1.1rem',
        fontWeight: 'bold',
        color: 'gray'
    },

    textos: {
        fontSize: '1rem',
        color: 'gray'
    },

    textoNavegacao: {
        textAlign: 'center',
        marginBottom: '0.625rem',
        fontWeight: 'bold',
        fontSize: '1rem',
        /* color: 'gray' */
    },

    opcoesNavegacao: {
        flexDirection: 'row',
        marginBottom: '0.625rem'
    },

    scrollViewContainer: {
        flex: 1
    },

    scrollNavegacao: {
        flexDirection: 'row',
        /* justifyContent: 'space-between', */
        width: '100%',
        paddingVertical: '0.625rem'
    },

    itensNavegacao: {
        marginRight: '3rem',
        /* backgroundColor: 'green', */
        flex: 1,
        textAlign: 'center'
    }
})