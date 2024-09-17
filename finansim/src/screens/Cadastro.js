import React, { useState } from 'react';
import { View, Text, TextInput, Pressable, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase';

import { estilo } from './cadastro_entrada_estilo';

export default function Cadastro() {
    const nav = useNavigation();

    const [ email_digitado, setEmail ] = useState('');
    const [ senha_digitada, setSenha ] = useState('');
    const [ senha_confirmada, setSenhaConf ] = useState('');

    const cadastro = async (email, senha, senha_confirmada) => {
        if ( senha === senha_confirmada ) {
            try {
                // Ensure that the `auth` instance is correctly passed to the function
                const userCredential = await createUserWithEmailAndPassword(auth, email, senha);
                console.log('Usuário criado:', userCredential.user);

                /* Componente de alerta com botão de confirmação */
                Alert.alert(
                    'Usuário criado',
                    'Usuário criado com sucesso!',
                    [
                        { text: 'Continuar', onPress: () => nav.navigate('Inicial') }
                    ]
                    /* Após o usuário apertar no botão será feita a navegação da tela. */
                );
            }

            catch (error) {
                console.error('Erro ao criar usuário:', error.message);
                Alert.alert('Erro ao criar usuário', 'Verifique os dados e tente novamente' )
            }
        }

        else {
            Alert.alert('Erro', 'As senhas não coincidem!')
        }       
    };
    
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