import styled from 'styled-components';

export const ContinueContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h5 {
    padding: 10px;

    a {
      color: var(--color-pink-primary);

      &:hover {
        color: var(--color-pink-secundary);
      }
    }
  }
`;
