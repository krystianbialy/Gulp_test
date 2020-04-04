import styled from 'styled-components';

export const Container = styled.div`
  text-align: center;
  margin-top: 30px;
`;

export const MediaIconGitHub = styled.a`
  font-size: 40px;
  color: #000;
  outline: none;
  opacity: 0.7;

  &:hover {
    opacity: 1;
  }
`;

export const MediaIconLinkedin = styled(MediaIconGitHub)`
  && {
    margin-left: 30px;
  }
`;
