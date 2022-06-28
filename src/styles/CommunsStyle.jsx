import styled from 'styled-components';

export const TopContainer = styled.div`
  height: 100px;
  background-color: var(--color-black);
  border-bottom-right-radius: 40px;
  color: var(--color-white);

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  position: relative;

  div {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    #backItem {
      position: absolute;
      font-size: 30px;
      left: 25px;
      top: 32px;
      cursor: pointer;
      color: var(--color-white);

      a {
        text-decoration: none;
      }

      &:hover {
        color: var(--color-pink-secundary);
      }
    }

    h2 {
      font-size: 22px;
    }
  }
`;

export const TextTop = styled.div`
  padding: 40px 0 40px 30px;

  h3 {
    font-size: 16px;
  }
`;

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
    border: 2px double var(--color-pink-secundary);
  }
`;

