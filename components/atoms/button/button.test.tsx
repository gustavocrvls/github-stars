import { renderWithProvider } from 'helpers';
import { Button } from './button';
import { theme } from 'styles';

describe('Button', () => {
  it('Should match snapshot', () => {
    const view = renderWithProvider(<Button>Button</Button>);
    expect(view).toMatchSnapshot();
  });

  describe('Prop: color', () => {
    it('Should display primary color correctly', () => {
      const view = renderWithProvider(<Button color="primary">Button</Button>);
      expect(view.getByText('Button')).toHaveStyle({
        backgroundColor: theme.palette.primary.main,
      });
    });

    it('Should display secondary color correctly', () => {
      const view = renderWithProvider(
        <Button color="secondary">Button</Button>,
      );
      expect(view.getByText('Button')).toHaveStyle({
        backgroundColor: theme.palette.secondary.main,
      });
    });

    it('Should display success color correctly', () => {
      const view = renderWithProvider(<Button color="success">Button</Button>);
      expect(view.getByText('Button')).toHaveStyle({
        backgroundColor: theme.palette.success.main,
      });
    });

    it('Should display error color correctly', () => {
      const view = renderWithProvider(<Button color="error">Button</Button>);
      expect(view.getByText('Button')).toHaveStyle({
        backgroundColor: theme.palette.error.main,
      });
    });
  });

  describe('Prop: size', () => {
    it('Should display sm font size correctly', () => {
      const view = renderWithProvider(<Button size="sm">Button</Button>);
      expect(view.getByText('Button')).toHaveStyle({
        fontSize: theme.typography.size.sm,
      });
    });

    it('Should display md font size correctly', () => {
      const view = renderWithProvider(<Button size="md">Button</Button>);
      expect(view.getByText('Button')).toHaveStyle({
        fontSize: theme.typography.size.md,
      });
    });

    it('Should display lg font size correctly', () => {
      const view = renderWithProvider(<Button size="lg">Button</Button>);
      expect(view.getByText('Button')).toHaveStyle({
        fontSize: theme.typography.size.lg,
      });
    });
  });
});
