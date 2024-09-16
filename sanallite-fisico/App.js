import React, { useState } from 'react';

import { View, Text, TextInput, Pressable } from 'react-native';

import { createUserWithEmailAndPassword } from 'firebase/auth';

import './firebase';
import { auth } from './firebase';

export default function App() {
  const [ email_d, setEmail ] = useState('');
  const [ senha_d, setSenha ] = useState('');

const cadastro = async (email, password) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    console.log('User registered:', userCredential.user);
  } catch (error) {
    console.error('Error registering user:', error.message);
  }
};


  return (
    <View>
        <Text>Teste</Text>
        <TextInput placeholder='email' value={ email_d } onChangeText={ (novo) => setEmail(novo) } />
        <TextInput secureTextEntry placeholder='password' value={ senha_d } onChangeText={ (novo) => setSenha(novo) } />

        <Pressable onPress={ () => cadastro(email_d, senha_d) }>
          <Text>Cadastrar</Text>
        </Pressable>
    </View>
  )
}