import styled from 'styled-components/native';

export const Container = styled.ImageBackground`
  flex: 1;
  width: 100%;
  padding: 30px;
  resize-mode: cover;
  align-items: center;
  justify-content: space-evenly;
`;

export const Logo = styled.Image``;

export const Box = styled.View``;

export const Input = styled.TextInput`
  height: 40px;
  width: 350px;
  border-radius: 4px;
  background-color: #ffff;
  padding: 0 10px;
  margin-bottom: 30px;
`;

export const Label = styled.Text`
  font-size: 14px;
  color: #ffff;
  margin-bottom: 5px;
`;

export const LoginButton = styled.TouchableOpacity`
  height: 50px;
  width: 350px;
  background-color: #ff9900;
  border-radius: 4px;
  margin-top: 40px;
  align-items: center;
  justify-content: center;
`;

export const LoginText = styled.Text`
  color: #fff;
`;

export const SignButton = styled.TouchableOpacity`
  height: 50px;
  width: 350px;
  background-color: #191c23;
  border-radius: 4px;
  margin-top: 40px;
  align-items: center;
  justify-content: center;
  border-width: 2px;
  border-color: #ff9900;
`;

export const SignText = styled.Text`
  color: #ff9900;
`;

export const ForgotButton = styled.TouchableOpacity`
  height: 50px;
  width: 350px;
  background-color: #191c23;
  border-radius: 4px;
  margin-top: 20px;
  align-items: center;
  justify-content: center;
`;

export const ForgotText = styled.Text`
  color: #ff9900;
`;
