import styled from 'styled-components';

export const OptionsContainer = styled.div`
  background-color: var(--color-white);
  margin: 40px auto;
  width: 345px;
  height: 205px;
  border-radius: 15px;
  border-left: 6px solid var(--color-pink-primary);
  box-shadow: 1px 2px 1px #5b5b5b33;
`;

export const OptionsTopContainer = styled.div`
  border-bottom: 1.5px solid var(--color-gray);
  display: flex;
  flex-direction: row;

  padding: 0 5px 15px 5px;

  img {
    margin: 15px 0 10px 15px;
    width: 65px;
    border-radius: 15px;
    border: 1px solid var(--color-pink-primary);
  }
`;

export const Total = styled.div`
  margin: 18px 0 10px 15px;
  h6 {
    font-size: 12px;
  }
  h3 {
    font-size: 18px;
    color: var(--color-pink-primary);
    padding: 5px 0;
  }
  #total {
    font-weight: 100;
  }
`;

export const Rate = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 18px 0 10px 15px;
  border-left: 1.5px solid var(--color-gray);
  padding-left: 25px;

  h6 {
    font-size: 12px;
    font-weight: 100;
  }

  h5 {
    font-size: 13px;
  }
`;

export const OptionsBottomContainer = styled.div`
  padding-left: 25px;
  margin-top: 30px;
  position: absolute;

  h6 {
    font-size: 12px;
    font-weight: 100;

    #questionIcon {
      color: var(--color-pink-primary);
    }
  }
  #estimated {
    font-weight: 700;
  }
`;

export const FinishContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  position: relative;
  top: 70px;
  right: -120px;

  h5 {
    font-size: 13px;
  }

  a,
  #forwardIcon {
    text-decoration: none;
    cursor: pointer;
    color: var(--color-pink-primary);
  }

  #forwardIcon {
    align-items: center;
    justify-content: center;
  }
`;
