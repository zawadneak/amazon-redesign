import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './routes';

import LoginModal from './components/LoginModal/index';

export default function App() {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#394050" />
      <LoginModal />
      <NavigationContainer>
        <Routes />
      </NavigationContainer>
    </>
  );
}
