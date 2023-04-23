import { IButton } from './button.dto';
import { BaseButton } from './button.styles';

export const Button = ({ children, ...props }: IButton) => {
  return <BaseButton {...props}>{children}</BaseButton>;
};
