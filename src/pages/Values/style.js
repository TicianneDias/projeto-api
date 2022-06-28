import styled from 'styled-components';

export const ValuesContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;

  @media (max-width: 730px) {
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
  }
`;

export const ValuesItem = styled.div`
  width: 165px;
  height: 58px;
  background-color: var(--color-white);
  border-radius: 15px;
  box-shadow: 1px 2px 1px #5b5b5b33;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &:hover {
    border: 1px dotted var(--color-pink-secundary);
  }

  `;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 35px 0;
  
  h4 {
    font-size: 16px;
    margin-right: 20px;
  }
  `;

export const ContinueContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  margin-bottom:110px;

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