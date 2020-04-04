import React from 'react';
import { Container, FooterText } from './footer.styled';

export const Footer = () => {
  const today = new Date();
  const year = today.getFullYear();

  return (
    <Container>
      <FooterText>&copy; {year} Author</FooterText>
    </Container>
  );
};
