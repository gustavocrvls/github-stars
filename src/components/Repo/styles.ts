import styled from 'styled-components';

export const Container = styled.div`
  padding: 10px;
  border-radius: ${props => props.theme.borderRadius};

  background-color: ${props => props.theme.palette.cardBackground};

  span {
    font-size: 0.8rem;
    font-family: ${props => props.theme.fonts.primary};

    a {
      text-decoration: none;
      color: ${props => props.theme.palette.primary};
    }
  }

  & + & {
    margin-top: 10px;
  }

  h2 {
    margin: 0;
  }

  p {
    font-size: 0.8rem;
    color: ${props => props.theme.palette.textSecondary};
  }

  ul {
    list-style: none;
    padding: 0;

    display: flex;

    li {
      margin: 0 5px;
    }

    .tag {
      display: flex;
      align-items: center;

      height: 30px;

      background: ${props => props.theme.palette.primary};

      border: 0;
      border-radius: ${props => props.theme.borderRadius};
      color: #fff;

      span {
        padding: 5px 5px;
      }

      button {
        height: 30px;
        width: 30px;
        padding: 5px 5px;

        display: flex;
        align-items: center;
        justify-content: center;

        border: 0;
        border-radius: 0 ${props => props.theme.borderRadius}
          ${props => props.theme.borderRadius} 0;

        background: transparent;
        color: #fff;

        transition: background-color 0.2s;

        &:hover {
          background: ${props => props.theme.palette.danger};

          cursor: pointer;
        }
      }
    }
  }
`;

export const NewTag = styled.li`
  display: flex;
  align-items: center;

  button {
    display: flex;
    align-items: center;
    justify-content: center;

    height: 30px;
    width: 30px;
    padding: 5px 5px;
    border: 0;
    border-radius: 0 ${props => props.theme.borderRadius}
      ${props => props.theme.borderRadius} 0;

    background: ${props => props.theme.palette.green};
    color: #fff;

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
      cursor: pointer;
    }
  }

  input {
    height: 30px;
    width: 70px;
    padding: 5px 5px;
    border: 1px solid ${props => props.theme.palette.textSecondary};
    border-radius: ${props => props.theme.borderRadius} 0 0
      ${props => props.theme.borderRadius};
  }
`;
