import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Modal, FlatList } from 'react-native';

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
  const [product, setProduct] = useState([
    {
      id: 1,
      title: 'Tênis de Caminhada Leve Confortável',
      price: '179.9',
      image:
        'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/modulo-redux/tenis1.jpg',
    },
  ]);

  const renderData = item => (
    <Item onPress={() => setVisible(true)}>
      <ItemImage source={{ uri: item.image }} />
      <LabelHolder>
        <ItemTitle>{item.title}</ItemTitle>
        <ItemPrice>{item.price}</ItemPrice>
      </LabelHolder>
    </Item>
  );

  return (
    <Container source={background}>
      <Input editable={false} value="Shoe" />
      <FlatList
        keyExtractor={item => item.id}
        data={product}
        renderItem={item => renderData(item)}
      />
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
