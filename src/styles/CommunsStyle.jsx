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
      cursor: pointer;

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