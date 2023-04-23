import { FormEvent } from 'react';
import { FiSearch } from 'react-icons/fi';
import { Container } from './search.styles';
import { Input } from 'components/atoms/input';
import { Button } from 'components/atoms/button';

interface Props {
  field: string;
  handleField: (search: string) => void;
  handleSearch: () => void;
}

export const Search = ({
  field,
  handleField,
  handleSearch,
}: Props): JSX.Element => {
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    handleSearch();
  };

  return (
    <Container onSubmit={handleSubmit}>
      <Input
        placeholder="ex: react"
        value={field}
        onChange={e => handleField(e.target.value)}
      />
      <Button type="submit">
        <FiSearch size="18" />
      </Button>
    </Container>
  );
};
