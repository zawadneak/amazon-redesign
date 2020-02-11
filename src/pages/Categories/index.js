import React from 'react';

import { Container, Box, Label } from './styles';

import background from '../../assets/img/Background.png';

export default function Categories() {
  return (
    <Container source={background}>
      <Box>
        <Label>Eletronics</Label>
      </Box>
      <Box>
        <Label>Books</Label>
      </Box>
      <Box>
        <Label>Sport</Label>
      </Box>
      <Box>
        <Label>Home</Label>
      </Box>
      <Box>
        <Label>Health</Label>
      </Box>
      <Box>
        <Label>Clothing</Label>
      </Box>
      <Box>
        <Label>Others</Label>
      </Box>
    </Container>
  );
}
