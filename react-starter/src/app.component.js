import React from 'react';
import { Information } from './components/information/information.component';
import { Media } from './components/media/media.component';
import { Footer } from './components/footer/footer.component';

export const App = () => {
  return (
    <>
      <Information />
      <Media />
      <Footer />
    </>
  );
};
