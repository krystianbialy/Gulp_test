import React from 'react';
import { Container, Img } from './information.styled';
import UnderConstruction from '../../images/under-construction.jpg';

export const Information = () => {
  return (
    <Container>
      <Img src={UnderConstruction} alt="#" />
    </Container>
  );
};
