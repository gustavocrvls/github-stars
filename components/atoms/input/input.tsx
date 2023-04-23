import { FC } from 'react';
import { IInput } from './input.dto';
import { BaseInput } from './input.styles';

export const Input: FC<IInput> = ({ ...props }) => {
  return <BaseInput {...props} />;
};
