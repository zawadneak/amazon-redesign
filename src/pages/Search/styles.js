import styled from 'styled-components/native';

export const Container = styled.ImageBackground`
  flex: 1;
  width: 100%;
  padding: 30px;
  resize-mode: cover;
  align-items: center;
  justify-content: space-evenly;
`;

export const Input = styled.TextInput`
  height: 40px;
  width: 350px;
  background-color: #fff;
  padding: 0 10px;
  border-radius: 4px;
  elevation: 2;
  box-shadow: 2px 0px 10px rgba(0, 0, 0, 0.25);
`;

export const List = styled.View`
  flex: 1;
  align-items: center;
`;

export const Item = styled.TouchableOpacity`
  height: 100px;
  width: 350px;
  margin: 20px;
  background-color: #99a0b2;
  border-radius: 4px;
  flex-direction: row;
`;

export const ItemImage = styled.Image`
  height: 100px;
  width: 90px;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
  resize-mode: stretch;
`;

export const LabelHolder = styled.View`
  flex-direction: column;
  margin-left: 10px;
`;
export const ItemTitle = styled.Text`
  font-weight: bold;
  margin-top: 10px;
`;

export const ItemBrand = styled.Text`
  margin: 0px;
`;

export const ItemPrice = styled.Text`
  margin-top: 15px;
  font-size: 20px;
`;
