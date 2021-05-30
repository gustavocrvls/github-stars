import styled from 'styled-components';

export const Container = styled.div`
  max-width: 400px;

  img {
    border-radius: 50%;
    width: 200px;
    border: 6.4px solid ${props => props.theme.palette.primary};
    border-top-color: ${props => props.theme.palette.primary};
  }

  h2 {
    margin-bottom: 0;
  }

  h3 {
    color: ${props => props.theme.palette.textSecondary};
    margin-top: 0;
  }
`;
