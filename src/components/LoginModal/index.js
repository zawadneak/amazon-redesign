import React, { useState } from 'react';
import { Modal, StatusBar } from 'react-native';

import {
  Container,
  Logo,
  Box,
  Input,
  Label,
  LoginButton,
  LoginText,
  SignButton,
  SignText,
  ForgotButton,
  ForgotText,
} from './styles';
import background from '../../assets/img/Background.png';
import logo from '../../assets/img/logo.png';

export default function LoginModal() {
  const [visible, setVisible] = useState(true);

  const handleLogin = () => {
    setVisible(false);
  };

  return (
    <Modal visible={visible} style={{ flex: 1 }}>
      <StatusBar barStyle="light-content" backgroundColor="#394050" />
      <Container source={background}>
        <Logo source={logo} />
        <Box>
          <Label>Email</Label>
          <Input />
          <Label>Password</Label>
          <Input />
          <LoginButton onPress={handleLogin}>
            <LoginText>Login</LoginText>
          </LoginButton>
          <SignButton>
            <SignText>Sign up</SignText>
          </SignButton>
          <ForgotButton>
            <ForgotText>Forgot Password</ForgotText>
          </ForgotButton>
        </Box>
      </Container>
    </Modal>
  );
}
