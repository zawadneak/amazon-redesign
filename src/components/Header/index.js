/* eslint-disable react/jsx-one-expression-per-line */
import React, { useState } from 'react';

import { TouchableOpacity, Modal, View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  Container,
  Holder,
  Logo,
  Label,
  ModalContainer,
  CartHolder,
  Box,
  ItemImage,
  ItemName,
  ItemAmmount,
  ItemPrice,
  TotalLabel,
  Minus,
  Plus,
} from './styles';

import logo from '../../assets/img/logo.png';
import background from '../../assets/img/Background.png';
import shirt from '../../assets/img/shirt.png';

export default function Header() {
  const [ammout, setAmmout] = useState(0);
  const [cartVisible, setVisible] = useState(false);
  const [cart, setCart] = useState([
    {
      name: 'Shirt',
      brand: 'Amazon',
      price: 30,
      ammount: 1,
    },
  ]);
  const [totalprice, setTotalPrice] = useState(0);

  const clearCart = () => {
    setCart([]);
  };

  return (
    <Container>
      <Holder>
        <Logo source={logo} />
        <TouchableOpacity
          style={{ flexDirection: 'row' }}
          onPress={() => setVisible(true)}
        >
          <Label style={{ color: ammout > 0 ? '#ff9900' : '#fff' }}>
            {ammout > 0 ? ammout : ''}
          </Label>
          <Icon
            name="shopping-cart"
            color={ammout > 0 ? '#ff9900' : '#fff'}
            size={25}
          />
        </TouchableOpacity>
      </Holder>
      <Modal visible={cartVisible} animationType="slide">
        <ModalContainer source={background}>
          <Text
            style={{
              fontSize: 25,
              color: '#fff',
              fontWeight: 'bold',
              margin: 20,
            }}
          >
            <Icon name="shopping-cart" size={25} /> Cart
          </Text>
          <CartHolder>
            {cart &&
              cart.map(item => (
                <Box>
                  <ItemImage source={shirt} />
                  <View style={{ width: '100%' }}>
                    <View
                      style={{
                        width: '100%',
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                      }}
                    >
                      <ItemName>{item.name}</ItemName>
                      <ItemPrice>${item.price}</ItemPrice>
                    </View>
                    <View
                      style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        width: 300,
                      }}
                    >
                      <ItemPrice>Ammount: </ItemPrice>
                      <Plus>
                        <Icon name="minus-circle" />
                      </Plus>
                      <ItemAmmount editable={false}>{item.ammount}</ItemAmmount>
                      <Minus>
                        <Icon name="plus-circle" size={15} />
                      </Minus>
                      <TouchableOpacity
                        style={{ alignItems: 'center', marginLeft: 60 }}
                        onPress={clearCart}
                      >
                        <Icon name="trash" color="#000" size={20} />
                      </TouchableOpacity>
                    </View>
                  </View>
                </Box>
              ))}
            <View
              style={{
                borderTopWidth: 1,
                borderTopColor: '#677089',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <TouchableOpacity
                style={{
                  marginTop: 10,
                  height: 30,
                  width: 100,
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: 5,
                  backgroundColor: '#ff9900',
                }}
              >
                <Text style={{ color: '#fff' }}>Finish</Text>
              </TouchableOpacity>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <TotalLabel>Total</TotalLabel>
                <Text style={{ margin: 10, fontWeight: 'bold', fontSize: 20 }}>
                  $ {totalprice}
                </Text>
              </View>
            </View>
          </CartHolder>
          <TouchableOpacity
            style={{ margin: 20 }}
            onPress={() => setVisible(false)}
          >
            <Text
              style={{
                color: '#99a0b2',
                borderWidth: 1,
                borderColor: '#99a0b2',
                padding: 10,
                borderRadius: 5,
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              Cancel
            </Text>
          </TouchableOpacity>
        </ModalContainer>
      </Modal>
    </Container>
  );
}
