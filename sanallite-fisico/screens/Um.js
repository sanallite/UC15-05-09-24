import React from 'react';
import { View, Text, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Um() {
    const nav = useNavigation()

    return (
        <View>
            <Text>Tela UM</Text>

            <Pressable onPress={ () => nav.goBack() }>
                <Text>Ir para a tela três</Text>
            </Pressable>
        </View>
    )
}