import React, { useEffect, useState } from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

/* import { MMKV } from 'react-native-mmkv'; */
import { MMKVLoader } from 'react-native-mmkv-storage';

import './firebase';

import StackNav from './src/routes/StackNav';
import Relatorios from './src/routes/Relatorios';

/* import { TurboModuleRegistry } from 'react-native';

const isTurboModuleEnabled = !!TurboModuleRegistry.get('MMKVModule');
console.log('TurboModules enabled:', isTurboModuleEnabled); */


export default function App() {
  const armazenamento = new MMKVLoader().initialize();
  
  const [ usuarioAtivo, setUsuario ] = useState(null);
  const [ carregando, setCarregando ] = useState(true);

  useEffect( () => {
      const usuarioArmazenado = armazenamento.getString('usuario');

      if ( usuarioArmazenado ) {
        setUsuario( JSON.parse(usuarioArmazenado) )
      }

      setCarregando(false);
    }, []
  )
  return (
    <NavigationContainer>
      <StatusBar />

      <StackNav />
    </NavigationContainer>
  )
}