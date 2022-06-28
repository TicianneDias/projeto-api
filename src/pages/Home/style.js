import styled from 'styled-components';

export const HomeContainer = styled.div`
  background-color: var(--color-black);
  border-bottom-right-radius: 40px;
  color: var(--color-white);
  padding: 20px;
`;

export const HomeUser = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 5px;
  position: relative;

  h1 {
    font-size: 22px;
  }
  #credit {
    padding: 15px;
    color: var(--color-pink-primary);
    font-size: 30px;
  }

  h2 {
    font-size: 18px;
    padding-top: 15px;
    font-weight: 100;
  }

  div {
    position: absolute;
    font-size: 40px;
    color: var(--color-pink-primary);
    background-color: var(--color-gray);
    border-radius: 100%;
    top: 130px;
    cursor: pointer;

    &:hover {
      color: var(--color-pink-secundary);
    }
  }
`;

export const Notification = styled.div`
  display: flex;
  justify-content: end;

  .notificationIcon {
    cursor: pointer;
    font-size: 25px;

    &:hover {
      color: var(--color-pink-secundary);
    }
  }
`;

export const Oportunities = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  margin: 40px auto;

  @media(max-width: 990px) {
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
  }
`;

export const OportunitiesItem = styled.div`
  background-color: var(--color-white);
  box-shadow: 1px 2px 1px #1010100f;
  width: 230px;
  height: 230px;
  border-radius: 20px;
  margin: 20px auto;
  cursor: pointer;

  a {
    text-decoration: none;
    color: var(--color-black);
  }

  h4,
  h5 {
    padding-left: 20px;
  }

  h5 {
    color: var(--color-pink-secundary);
    padding-top: 20px;
  }
  
  &:hover {
    border: 1px dotted var(--color-pink-secundary);
  }

  @media(max-width: 990px) {
    margin-bottom: 50px;
  }
`;

export const MoneyIcon = styled.div`
  position: relative;
  top: 30px;
  left: 15px;
  padding-bottom: 30px;
  font-size: 50px;
`;
