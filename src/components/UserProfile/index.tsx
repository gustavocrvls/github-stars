import { useEffect, useState } from 'react';
import { FiStar, FiUsers } from 'react-icons/fi';
import { useRepositories } from '../../hooks/useRepositories';
import { useUser } from '../../hooks/useUser';
import { api } from '../../services/api';
import { Container } from './styles';

interface IUser {
  avatar_url: string;
  bio: string;
  followers: number;
  following: number;
  html_url: string;
  name: string;
  login: string;
}

export function UserProfile(): JSX.Element {
  const [user, setUser] = useState<IUser>({} as IUser);
  const { starreds } = useRepositories();
  const { login } = useUser();

  useEffect(() => {
    async function loadUserData(): Promise<void> {
      const response = await api.get<IUser>(`/users/${login}`);

      setUser(response.data);
    }

    loadUserData();
  }, []);

  return (
    <Container>
      <img src={user.avatar_url} alt="Avatar" />
      <h2>{user.name}</h2>
      <h3>{`@${user.login}`}</h3>
      <p>{user.bio}</p>
      <div className="profile-social">
        <FiUsers size="16" />
        <div>
          <strong>{user.followers}</strong>
          <span>followers</span>
        </div>

        <span>•</span>

        <div>
          <strong>{user.following}</strong>
          <span>following</span>
        </div>

        <span>•</span>

        <div>
          <FiStar size="16" />
          <strong>{starreds}</strong>
        </div>
      </div>
    </Container>
  );
}
