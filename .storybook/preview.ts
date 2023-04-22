import { withThemeFromJSXProvider } from '@storybook/addon-styling';
import type { Preview } from '@storybook/react';
import { GlobalStyles, theme } from '../styles';
import { ThemeProvider } from 'styled-components';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export const decorators = [
  withThemeFromJSXProvider({
    themes: { light: theme },
    defaultTheme: 'light',
    Provider: ThemeProvider,
    GlobalStyles: GlobalStyles,
  }),
];

export default preview;
