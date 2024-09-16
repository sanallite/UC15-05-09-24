import React from 'react';
import { View, Text, TextInput, Pressable } from 'react-native';

export default function Entrada() {
    return (
        <View>
            <View>
                <Text>Nome do Usuário</Text>

                <TextInput />

                <Text>Senha</Text>

                <TextInput />
            </View>

            <View>
                <Pressable>
                    <Text>Entrar</Text>
                </Pressable>

                <Pressable>
                    <Text>Faça seu Cadastro</Text>
                </Pressable>
            </View>
        </View>
    )
}