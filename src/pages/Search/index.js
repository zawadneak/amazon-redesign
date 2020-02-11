import React from 'react';

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
} from './styles';

import shirt from '../../assets/img/shirt.png';

import background from '../../assets/img/Background.png';

export default function Search() {
  return (
    <Container source={background}>
      <Input placeholder="What are you looking for today?" />
      <List>
        <Item>
          <ItemImage source={shirt} />
          <LabelHolder>
            <ItemTitle>Full Sleeves Blue Knitted Shirt</ItemTitle>
            <ItemBrand>Amazon</ItemBrand>
            <ItemPrice>$50.00</ItemPrice>
          </LabelHolder>
        </Item>
      </List>
    </Container>
  );
}
