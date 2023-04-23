import styled from 'styled-components';

export const BaseInput = styled.input`
  font-size: 14px;
  background: #fff;

  border-radius: 5px;
  border: 1px solid transparent;

  padding: 7px;

  &:hover {
    border: 1px solid ${props => props.theme.palette.primary.main};
  }

  &:focus {
    outline-style: solid;
    outline-width: 2px;
    outline-color: ${props => props.theme.palette.primary.light};
  }
`;
