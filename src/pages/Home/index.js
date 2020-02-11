import React from 'react';

import { Image } from 'react-native';
import {
  Container,
  List,
  ListBox,
  ProductImage,
  ProductBrand,
  Box,
} from './styles';

import background from '../../assets/img/Background.png';
import watch from '../../assets/img/watch.png';
import brand from '../../assets/img/apple.png';
import prime from '../../assets/img/prime.png';
import sales from '../../assets/img/sales.png';

export default function Login() {
  const renderData = item => (
    <ListBox>
      <ProductImage source={watch} />
      <ProductBrand source={brand} />
    </ListBox>
  );

  return (
    <Container source={background}>
      <List
        keyExtractor={item => item.name}
        horizontal
        showsHorizontalScrollIndicator={false}
        data={[{ name: 'Watch' }, { name: 'Watch2' }, { name: 'Watch3' }]}
        renderItem={item => renderData(item)}
      />
      <Box>
        <Image source={prime} />
      </Box>
      <Box>
        <Image source={sales} style={{ height: 180 }} />
      </Box>
    </Container>
  );
}
