import styled from 'styled-components/native';

export const Container = styled.View`
  height: 50px;
  background-color: #394050;
  align-items: center;
  justify-content: center;
`;

export const Holder = styled.View`
  height: 100%;
  width: 350px;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
`;

export const Logo = styled.Image`
  height: 35px;
  width: 30px;
`;

export const Label = styled.Text`
  margin: 5px;
`;

export const ModalContainer = styled.ImageBackground`
  flex: 1;
  padding: 30px;
  align-items: center;
`;

export const CartHolder = styled.View`
  background-color: #99a0b2;
  width: 350px;
  height: auto;
  padding: 20px;
  border-radius: 4px;
`;

export const Box = styled.View`
  height: 100px;
  width: 230px;
  align-items: center;
  flex-direction: row;
  margin: 5px 0px;
`;
export const ItemImage = styled.Image`
  height: 90px;
  width: 90px;
  border-radius: 5px;
`;

export const ItemName = styled.Text`
  font-size: 15px;
  margin-left: 5px;
  font-weight: bold;
`;

export const ItemAmount = styled.TextInput`
  height: 40px;
  width: 40px;
  margin: 0 5px;
  border-radius: 5px;
  background-color: #fff;
`;

export const ItemPrice = styled.Text`
  margin: 5px;
`;

export const TotalLabel = styled.Text`
  margin: 10px 0;
`;

export const Minus = styled.TouchableOpacity``;

export const Plus = styled.TouchableOpacity``;
