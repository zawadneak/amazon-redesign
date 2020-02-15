import styled from 'styled-components/native';

export const Container = styled.ImageBackground`
  flex: 1;
  width: 100%;
  padding: 30px;
  resize-mode: cover;
  align-items: center;
  justify-content: space-evenly;
`;

export const List = styled.FlatList`
  align-content: center;
`;

export const ListBox = styled.TouchableOpacity`
  align-items: center;
  height: 300px;
  margin: 0 20px;
  width: 300px;
  background-color: #99a0b2;
  border-radius: 10px;
  elevation: 2;
  box-shadow: 2px 0px 10px rgba(0, 0, 0, 0.25);
`;

export const ProductImage = styled.Image`
  margin-top: -20px;
`;

export const ProductBrand = styled.Image`
  margin: 5px;
`;

export const Box = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  height: 160px;
  margin: 25px;
  width: 350px;
  background-color: #99a0b2;
  border-radius: 10px;
  elevation: 2;
  box-shadow: 2px 0px 10px rgba(0, 0, 0, 0.25);
`;
