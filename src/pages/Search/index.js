import React, { useState, useEffect, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Modal } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import format from '../../util/format';

import {
  Container,
  Input,
  List,
  Item,
  LabelHolder,
  ItemImage,
  ItemTitle,
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
import server from '../../../server.json';

import background from '../../assets/img/Background.png';

export default function Search() {
  const [visible, setVisible] = useState(false);
  const [product, setProduct] = useState(server.products);
  const [modalItem, setItem] = useState([]);

  useEffect(() => {
    const data = product.map(item => ({
      ...item,
      formatedPrice: format(item.price),
    }));

    setProduct(data);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleOpen = item => {
    setItem(item);
    setVisible(true);
  };
  return (
    <Container source={background}>
      <Input editable={false} value="Shoe" />
      <List
        keyExtractor={item => item.id}
        data={product}
        renderItem={({ item }) => {
          return (
            <Item onPress={() => handleOpen(item)} id={item.id}>
              <ItemImage source={{ uri: item.image }} />
              <LabelHolder>
                <ItemTitle>{item.title}</ItemTitle>
                <ItemPrice>{item.formatedPrice}</ItemPrice>
              </LabelHolder>
            </Item>
          );
        }}
      />
      <Modal visible={visible} transparent animationType="slide">
        <ModalContainer source={background}>
          <Product source={{ uri: modalItem.image }} />
          <Title>{modalItem.title}</Title>
          <Price>{modalItem.formatedPrice}</Price>
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
