import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, Pressable } from 'react-native';

export default function Dois() {
    const nav = useNavigation();

    return (
        <View>
            <Text>Tela DOIS</Text>

            <Pressable onPress={ () => nav.navigate('Um') }>
                <Text>Ir para a tela um</Text>
            </Pressable>
        </View>
    )
}