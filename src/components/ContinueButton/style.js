import styled from 'styled-components';

export const Continue = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 165px;
  height: 40px;
  background-color: var(--color-pink-primary);
  border-radius: 40px;
  padding: 20px 10px;
  cursor: pointer;
  margin: auto;
  border: none;
  color: var(--color-white);

  &:hover {
    border: 2px double  var(--color-pink-secundary);
  }
`;
