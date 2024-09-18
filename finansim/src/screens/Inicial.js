import React from 'react';
import { View, Text } from 'react-native';
import { auth } from '../../firebase';
import { useNavigation } from '@react-navigation/native';

export default function Inicial() {
    const nav = useNavigation();

    if ( !auth.currentUser ) {
        nav.navigate('BemVindo')
    }

    return (
        <View>
            <View>
                <Text>Finansim</Text>
            </View>
        </View>
    )
}