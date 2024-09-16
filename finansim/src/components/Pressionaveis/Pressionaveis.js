import React from 'react';
import { Pressable, Text } from 'react-native';

import { navegarTelaCadastro } from '../../controllers/navigationController';

export default function Pressionaveis(props) {
    let texto = props.texto;
    let aoPressionar = props.aoPressionar;

    return (
        <Pressable onPress={ aoPressionar }>
            <Text>{texto}</Text>
        </Pressable>
    )
}