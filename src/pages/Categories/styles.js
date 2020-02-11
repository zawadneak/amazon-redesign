import styled from 'styled-components/native';

export const Container = styled.ImageBackground`
  flex: 1;
  width: 100%;
  padding: 30px;
  resize-mode: cover;
  align-items: center;
  justify-content: space-around;
`;

export const Box = styled.TouchableOpacity`
  height: 90px;
  width: 350px;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  background-color: #99a0b2;
`;

export const Label = styled.Text`
  font-size: 25px;
  font-weight: 700;
`;
