import { ButtonHTMLAttributes, ReactNode } from 'react';

export interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  readonly color?: 'primary' | 'secondary' | 'success' | 'error';
  readonly size?: 'sm' | 'md' | 'lg';
  readonly children: ReactNode | string;
}
