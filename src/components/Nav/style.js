import styled from 'styled-components';

export const NavContainer = styled.div`
  background-color: var(--color-white);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  height: 80px;
  position: fixed;
  bottom: 0;
  width: 100vw;

  a {
    text-decoration: none;
    color: var(--color-black);
  }

  `;

export const NavItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;

  .icon {
    font-size: 25px;
  }

  h3 {
    font-size: 15px;
  }

  &:hover{
    color: var(--color-pink-secundary);
  }
`;
