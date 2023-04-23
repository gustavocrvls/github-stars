import styled from 'styled-components';
import { IButton } from './button.dto';

export const BaseButton = styled.button<IButton>`
  display: flex;
  justify-content: center;
  align-items: center;

  font-size: ${props =>
    props.size
      ? props.theme.typography.size[props.size]
      : props.theme.typography.size.md};
  font-family: ${props => props.theme.typography.familly.secondary};
  padding: 8px;
  border: 0;
  border-radius: ${props => props.theme.borderRadius};
  margin: 5px 0 0 5px;
  background-color: ${props =>
    props.color
      ? props.theme.palette[props.color].main
      : props.theme.palette.primary.main};
  color: ${props => props.theme.palette.text.negative};

  cursor: pointer;

  transition: all 0.5s;

  &:hover {
    background-color: ${props =>
      props.color
        ? props.theme.palette[props.color].dark
        : props.theme.palette.primary.dark};
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  }
  &:active {
    box-shadow: rgba(0, 0, 0, 0.24) 0px 0px 0px;
    transition: all 0.2s;
  }
`;
