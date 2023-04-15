import { FormEvent, useState } from 'react';
import { FiArrowRight, FiGithub } from 'react-icons/fi';
import { Container } from './styles';
import { useUser } from '../hooks/useUser';
import { api } from '../services/api';
import { useRouter } from 'next/router';

export default function Login(): JSX.Element {
  const [userLogin, setUserLogin] = useState('');

  const { setLogin } = useUser();

  const router = useRouter();

  async function getUserData(e: FormEvent) {
    e.preventDefault();

    try {
      await api.get(`users/${userLogin}`);
      setLogin(userLogin);
      router.push('/stars');
    } catch (err) {
      alert('O usuário não foi encontrado!');
    }
  }

  return (
    <Container>
      <img src="logo.svg" alt="Github Stars" />
      <h1>GitHub Stars</h1>

      <p>
        O jeito mais fácil de organizar seus repositórios salvos no GitHub :)
      </p>

      <p style={{ fontSize: '1rem' }}>
        <FiGithub />
        Comece fazendo login no seu Github
      </p>

      <form className="login" onSubmit={getUserData}>
        <input
          placeholder="Digite seu username"
          value={userLogin}
          onChange={e => setUserLogin(e.target.value)}
        />
        <button type="submit">
          <FiArrowRight />
        </button>
      </form>
    </Container>
  );
}
