import React from 'react';
import { View, Text, StatusBar } from 'react-native';

import StackNav from './src/routes/StackNav';

export default function App() {
  return (
    <View>
      <StatusBar />

      <StackNav />
    </View>
  )
}