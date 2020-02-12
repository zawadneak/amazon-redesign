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

export const ModalContainer = styled.View`
  width: 400px;
  margin-top: 60px;
  align-items: center;
  background-color: #394050;
  border-radius: 10px;
  elevation: 5;
  margin: auto auto;
  padding: 50px;
`;

export const Product = styled.Image`
  height: 300px;
  width: 300px;
  border-radius: 4px;
`;
export const Title = styled.Text`
  margin-top: 15px;
  font-size: 24px;
  color: #eeeff2;
  font-weight: bold;
  width: 350px;
`;
export const Brand = styled.Text`
  font-size: 18px;
  width: 350px;
  color: #eeeff2;
`;
export const Price = styled.Text`
  font-size: 20px;
  width: 350px;
  color: #eeeff2;
  font-size: 36px;
`;

export const ButtonHolder = styled.View`
  width: 350px;
  margin: 10px
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
`;

export const AddToCartButton = styled.TouchableOpacity`
  height: 50px;
  width: 120px;
  background-color: #394050;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-width: 2px;
  border-radius: 4px;
  border-color: #99a0b2;
`;

export const CartLabel = styled.Text`
  font-size: 20px;
  color: #99a0b2;
  margin: 5px;
  margin-left: 10px;
`;

export const BuyButton = styled.TouchableOpacity`
  height: 50px;
  width: 120px;
  background-color: #ff9900;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
`;

export const BuyLabel = styled.Text`
  font-size: 20px;
  color: #fff;
`;

export const CancelButton = styled.TouchableOpacity`
  font-size: 20px;
  color: #fff;
`;

export const Label = styled.Text`
  font-size: 20px;
  color: #99a0b2;
  margin-top: 10px;
`;
