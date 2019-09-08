import React from 'react';

import { Container } from './styles';
import Logo from '../../assets/images/logo.svg';

export default function Header() {
  return (
    <Container>
      <img src={Logo} alt="RocketShoes" />
    </Container>
  );
}
