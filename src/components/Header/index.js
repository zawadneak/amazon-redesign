import React, { useState, useMemo, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Alert, TouchableOpacity, Modal, View, Text } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import format from '../../util/format';

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
  ItemAmount,
  ItemPrice,
  TotalLabel,
  Minus,
  Plus,
} from './styles';

import logo from '../../assets/img/logo.png';
import background from '../../assets/img/Background.png';

export default function Header() {
  const cart = useSelector(state =>
    state.cart.map(item => ({
      ...item,
      formatedSum: format(item.sumPrice),
    }))
  );

  const cartLength = useMemo(() => cart.length, [cart]);

  const [cartVisible, setVisible] = useState(false);
  const [totalprice, setTotalPrice] = useState(0);

  useEffect(() => {
    if (cartLength === 0) {
      setVisible(false);
    }
  }, [cartLength]);

  useEffect(() => {
    let total = 0;
    cart.map(item => {
      total += item.sumPrice;
    });

    setTotalPrice(format(total));
  }, [cart]);

  const dispatch = useDispatch();

  const handleRemove = id => {
    dispatch({
      type: '@cart/REMOVE',
      id,
    });
  };

  const increment = (amount, id) => {
    dispatch({
      type: '@cart/UPDATE',
      value: amount + 1,
      id,
    });
  };
  const decrement = (amount, id) => {
    dispatch({
      type: '@cart/UPDATE',
      value: amount - 1,
      id,
    });
  };

  const handleOpenCart = () => {
    if (cartLength === 0) {
      Alert.alert('Sorry', 'You cart is empty!');
    } else {
      setVisible(true);
    }
  };

  return (
    <Container>
      <Holder>
        <Logo source={logo} />
        <TouchableOpacity
          style={{ flexDirection: 'row' }}
          onPress={handleOpenCart}
        >
          <Label style={{ color: cartLength > 0 ? '#ff9900' : '#fff' }}>
            {cartLength > 0 ? cartLength : ''}
          </Label>
          <Icon
            name="shopping-cart"
            color={cartLength > 0 ? '#ff9900' : '#fff'}
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
            <Icon name="shopping-cart" size={25} />
            Cart
          </Text>
          <CartHolder>
            {cart &&
              cart.map(item => (
                <Box key={item.id}>
                  <ItemImage source={{ uri: item.image }} />
                  <View style={{ width: '100%' }}>
                    <View
                      style={{
                        width: '100%',
                      }}
                    >
                      <ItemName>{item.title}</ItemName>
                      <ItemPrice>{item.formatedSum}</ItemPrice>
                    </View>
                    <View
                      style={{
                        marginTop: -10,
                        flexDirection: 'row',
                        alignItems: 'center',
                        width: 300,
                      }}
                    >
                      <ItemPrice>Ammount: </ItemPrice>
                      <Minus onPress={() => decrement(item.amount, item.id)}>
                        <Icon
                          name="minus-circle"
                          color={item.amount === 1 ? '#677089' : '#262C39'}
                        />
                      </Minus>
                      <ItemAmount editable={false}>{item.amount}</ItemAmount>
                      <Plus onPress={() => increment(item.amount, item.id)}>
                        <Icon name="plus-circle" size={15} color="#262C39" />
                      </Plus>
                      <TouchableOpacity
                        onPress={() => handleRemove(item.id)}
                        style={{ alignItems: 'center', marginLeft: 60 }}
                      >
                        <Icon name="trash" color="#000" size={20} />
                      </TouchableOpacity>
                    </View>
                  </View>
                </Box>
              ))}
            <View
              style={{
                marginTop: 5,
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
                  {totalprice}
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
