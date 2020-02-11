import React from 'react';

import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Container, Holder, Logo, Label } from './styles';
import logo from '../../assets/img/logo.png';

export default function Header() {
  const [ammout, setAmmout] = React.useState(0);
  return (
    <Container>
      <Holder>
        <Logo source={logo} />
        <TouchableOpacity style={{ flexDirection: 'row' }}>
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
    </Container>
  );
}
