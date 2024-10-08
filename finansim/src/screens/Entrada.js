import React, { useState } from 'react';
import { View, Text, TextInput, Pressable, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase';

export default function Entrada() {
    const [email_digitado, setEmail] = useState('');
    const [senha_digitada, setSenha] = useState('');

    const nav = useNavigation();


    const entrada = async (email, senha) => {
        try {
            const fazerLogin = await signInWithEmailAndPassword(auth, email, senha);
            console.log('Usuário entrou');

            Alert.alert('Entrada', 'Sessão Iniciada com o email ' +fazerLogin.user.email, [
                { text: 'Continuar', onPress: () => nav.navigate('Inicial') }
            ])
        }
        catch (error) { 
            console.log('Erro na entrada: '+error.message);
            Alert.alert('Erro na entrada', 'Verifique os campos e tente novamente')
        }
    }

    return (
        <View>
            <View>
                <Text>Nome do Usuário</Text>

                <TextInput value={ email_digitado } onChangeText={ (novo_valor) => setEmail(novo_valor) } />

                <Text>Senha</Text>

                <TextInput secureTextEntry value={ senha_digitada } onChangeText={ (novo_valor) => setSenha(novo_valor) } />
            </View>

            <View>
                <Pressable onPress={ () => entrada(email_digitado, senha_digitada) }>
                    <Text>Entrar</Text>
                </Pressable>

                <Pressable onPress={ () => nav.navigate('Cadastro') }>
                    <Text>Faça seu Cadastro</Text>
                </Pressable>
            </View>
        </View>
    )
}