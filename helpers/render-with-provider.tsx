import { render } from '@testing-library/react';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from 'styles';

interface ProvidersWrapperProps {
  children: JSX.Element;
}

const ProvidersWrapper: React.FC<ProvidersWrapperProps> = ({ children }) => (
  <>
    {/** @ts-ignore */}
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
  </>
);

export const renderWithProvider = (component: JSX.Element, options?: any) => {
  return render(component, { wrapper: ProvidersWrapper, ...options });
};
