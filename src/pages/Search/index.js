import React, { useState } from 'react';
import { Modal } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  Container,
  Input,
  List,
  Item,
  LabelHolder,
  ItemImage,
  ItemTitle,
  ItemBrand,
  ItemPrice,
  ModalContainer,
  Product,
  Title,
  Brand,
  Price,
  ButtonHolder,
  AddToCartButton,
  CartLabel,
  BuyButton,
  BuyLabel,
  CancelButton,
  Label,
} from './styles';

import shirt from '../../assets/img/shirt.png';

import background from '../../assets/img/Background.png';

export default function Search() {
  const [visible, setVisible] = useState(false);

  return (
    <Container source={background}>
      <Input placeholder="What are you looking for today?" />
      <List>
        <Item onPress={() => setVisible(true)}>
          <ItemImage source={shirt} />
          <LabelHolder>
            <ItemTitle>Full Sleeves Blue Knitted Shirt</ItemTitle>
            <ItemBrand>Amazon</ItemBrand>
            <ItemPrice>$50.00</ItemPrice>
          </LabelHolder>
        </Item>
      </List>
      <Modal visible={visible} transparent animationType="slide">
        <ModalContainer source={background}>
          <Product source={shirt} />
          <Title>Full Sleeves Blue Knitted Shirt</Title>
          <Brand>Amazon</Brand>
          <Price>$50.00</Price>
          <ButtonHolder>
            <AddToCartButton>
              <Icon name="cart-plus" color="#99a0b2" size={20} />
              <CartLabel>Add</CartLabel>
            </AddToCartButton>
            <BuyButton>
              <BuyLabel>Buy</BuyLabel>
            </BuyButton>
          </ButtonHolder>
          <CancelButton onPress={() => setVisible(false)}>
            <Label>Cancel</Label>
          </CancelButton>
        </ModalContainer>
      </Modal>
    </Container>
  );
}
