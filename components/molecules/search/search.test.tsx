import { act } from 'react-dom/test-utils';
import { Search } from './search';
import { renderWithProvider } from 'helpers';

const handleField = jest.fn();
const handleSearch = jest.fn();

describe('Search', () => {
  it('Should match snapshot', () => {
    const view = renderWithProvider(
      <Search
        field="test"
        handleField={handleField}
        handleSearch={handleSearch}
      />,
    );
    expect(view).toMatchSnapshot();
  });

  it('Should use handleSearch on submit', async () => {
    const view = renderWithProvider(
      <Search
        field="test"
        handleField={handleField}
        handleSearch={handleSearch}
      />,
    );

    await act(async () => {
      const btn = await view.findByRole('button');
      btn.click();
    });

    expect(handleSearch).toHaveBeenCalledTimes(1);
  });
});
