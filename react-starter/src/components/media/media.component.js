import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { Container, MediaIconGitHub, MediaIconLinkedin } from './media.styled';

export const Media = () => {
  return (
    <Container>
      <MediaIconGitHub href="https://github.com/krystianbialy">
        <FontAwesomeIcon icon={faGithubSquare} />
      </MediaIconGitHub>
      <MediaIconLinkedin href="https://linkedin.com/in/krystian-biały">
        <FontAwesomeIcon icon={faLinkedin} />
      </MediaIconLinkedin>
    </Container>
  );
};
