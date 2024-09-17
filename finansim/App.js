import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import './firebase';

import StackNav from './src/routes/StackNav';

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar />

      <StackNav />
    </NavigationContainer>
  )
}