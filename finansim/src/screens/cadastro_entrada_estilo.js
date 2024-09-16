import { StyleSheet } from "react-native";

let corDestaquePrimaria = 'rgb(254, 152, 1)'
let corFundoSecundaria = 'rgb(204, 218, 70, 0.6)';

export const estilo = StyleSheet.create({
    fundo_form: {
        paddingVertical: 30,
        paddingHorizontal: 20,
        backgroundColor: 'white',
        margin: 20
    },

    caixas_texto: {
        padding: 10,
        borderColor: corFundoSecundaria,
        borderWidth: 1
    },

    cadastrar_entrar: {
        padding: 10,
        width: '40%',
        backgroundColor: corDestaquePrimaria
    }
})