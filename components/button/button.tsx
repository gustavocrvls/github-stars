import { ReactNode } from 'react';
import { IButton } from './button.dto';
import { BaseButton } from './button.styles';

export interface Props extends IButton {
  children: ReactNode | string;
}

export const Button = ({ children, ...props }: Props) => {
  return <BaseButton {...props}>{children}</BaseButton>;
};
