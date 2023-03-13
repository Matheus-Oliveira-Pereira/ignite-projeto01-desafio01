import React from 'react';

import { Container, Logo } from './styles';
import LogoToDoList from '../../assets/Logo.png'

export const Header: React.FC = () => {
  return (
    <Container> 
        <Logo
          src={LogoToDoList}
        />
    </Container>
  );
}