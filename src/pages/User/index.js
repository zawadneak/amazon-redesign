import React from 'react';

import Icon from 'react-native-vector-icons/FontAwesome';
import { Container, Profile, Name, Button, Label } from './styles';

import background from '../../assets/img/Background.png';
import profile from '../../assets/img/profile.jpg';

export default function User() {
  return (
    <Container source={background}>
      <Profile source={profile} />
      <Name>Hello Lucas!</Name>
      <Button>
        <Label>My Profile</Label>
      </Button>
      <Button>
        <Label>Help</Label>
      </Button>
      <Button>
        <Label>My Orders</Label>
      </Button>
      <Button>
        <Label>Sign out</Label>
      </Button>
    </Container>
  );
}
