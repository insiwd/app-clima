import React from 'react';
import { StatusBar, setStatusBarStyle } from 'expo-status-bar';

import { NavigationContainer } from '@react-navigation/native'

import Routes from './src/routes'

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar  barStyle="light-content" />
      <Routes/>
    </NavigationContainer>
  );
}

