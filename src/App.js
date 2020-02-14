import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import Routes from './routes';

import Header from './components/Header/index';
import LoginModal from './components/LoginModal/index';

import store from './store/index';

export default function App() {
  return (
    <>
      <Provider store={store}>
        <StatusBar barStyle="light-content" backgroundColor="#394050" />
        <LoginModal />
        <NavigationContainer>
          <Header />
          <Routes />
        </NavigationContainer>
      </Provider>
    </>
  );
}
