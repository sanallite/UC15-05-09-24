import React, { useState } from 'react';
import { View, Text, TextInput, Pressable } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import { firebase } from '@react-native-firebase/auth';
import auth from '@react-native-firebase/auth';

import { estilo } from './cadastro_entrada_estilo';

/* firebase.initializeApp(); */

export default function Cadastro() {
    const nav = useNavigation();

    const [ email_digitado, setEmail ] = useState('');
    const [ senha_digitada, setSenha ] = useState('');
    const [ senha_confirmada, setSenhaConf ] = useState('');

    let mensagemErro;

    const cadastro = (email, senha, senha_confirmada) => {
        if ( senha === senha_confirmada ) {
            auth().createUserWithEmailAndPassword(email,senha)
            .then( () => {
                alert('Usuário Cadastrado');
            } )
            .catch( (err) => console.log('Ocorreu um erro: '+err) );
        }
    
        else {
            mensagemErro = 'As senhas não coincidem!';
            alert(mensagemErro);
        }
    }
    
    return (
        <View>
            <View style={ estilo.fundo_form }>
                <Text>Nome da Empresa</Text>

                <TextInput style={ estilo.caixas_texto }/>

                <Text>Nome do Usuário</Text>

                <TextInput style={ estilo.caixas_texto }/>

                <Text>E-mail</Text>
                
                <TextInput style={ estilo.caixas_texto } value={ email_digitado } onChangeText={ (novo_valor) => setEmail(novo_valor) } />

                <Text>Senha</Text>

                <TextInput style={ estilo.caixas_texto } secureTextEntry value={ senha_digitada } onChangeText={ (novo_valor) => setSenha(novo_valor) } />

                <Text>Confirmar Senha</Text>

                <TextInput style={ estilo.caixas_texto } secureTextEntry value={ senha_confirmada } onChangeText={ (novo_valor) => setSenhaConf(novo_valor) } />
            </View>

            <View>
                <Pressable style={ estilo.cadastrar_entrar } onPress={ () => cadastro(email_digitado, senha_digitada, senha_confirmada) }>
                    <Text>Cadastrar</Text>
                </Pressable>

                <Pressable>
                    <Text>Já é Cadastrado? Entre Agora</Text>
                </Pressable>
            </View>
        </View>
    )
}