import styled from 'styled-components/native';

export const Container = styled.ImageBackground`
  flex: 1;
  width: 100%;
  padding: 30px;
  resize-mode: cover;
  align-items: center;
  justify-content: center;
`;

export const Profile = styled.Image`
  height: 200px;
  width: 200px;
  border-radius: 100px;
`;

export const Name = styled.Text`
  font-size: 24px;
  color: #c2c6d1;
  margin: 5px;
  margin-bottom: 100px;
`;

export const Button = styled.TouchableOpacity`
  height: 60px;
  margin: 10px;
  width: 350px;
  border-radius: 4px;
  justify-content: center;
  align-items: center;
  background-color: #99a0b2;
  flex-direction: row;
`;

export const Label = styled.Text`
  font-size: 20px;
  font-weight: bold;
`;
