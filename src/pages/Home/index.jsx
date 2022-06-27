import React, { useEffect, useState } from 'react';
import {
  HomeContainer,
  HomeUser,
  MoneyIcon,
  Notification,
  Oportunities,
  OportunitiesItem
} from './style';
import { IoMdNotificationsOutline } from 'react-icons/io';
import { BsArrowDownCircleFill, BsCreditCard } from 'react-icons/bs';
import { RiMoneyDollarCircleLine, RiExchangeDollarLine } from 'react-icons/ri';
import { CgArrowsExchangeAltV } from 'react-icons/cg';
import axios from 'axios';

const Home = () => {
  const [getTest, setGetTest] = useState([]);

  useEffect(() => {
    axios
      .get('https://5fpaprjjbl.execute-api.us-east-1.amazonaws.com/test')
      .then(res => setGetTest(res.data))
      .catch(err => console.log(err));
  });

  return (
    <>
      <HomeContainer>
        <Notification>
          <IoMdNotificationsOutline className="notificationIcon" />
        </Notification>
        <HomeUser>
          <h1>Olá, Usuário</h1>
          <h2>Seu crédito disponível é de</h2>
          <h1 id="credit">R$ 5.048,10</h1>
          <div>
            <BsArrowDownCircleFill />
          </div>
        </HomeUser>
      </HomeContainer>
      <Oportunities>
        <OportunitiesItem>
          <MoneyIcon>
            <RiMoneyDollarCircleLine />
          </MoneyIcon>
          <h4>Novo</h4>
          <h4>empréstimo</h4>
          <h5>Até R$ {getTest.newLoanMaxValue}</h5>
        </OportunitiesItem>
        <OportunitiesItem>
          <MoneyIcon>
            <CgArrowsExchangeAltV />
          </MoneyIcon>
          <br />
          <h4>Portabilidade</h4>
          <h5>Até R$ {getTest.portabilityMaxValue}</h5>
        </OportunitiesItem>
        <OportunitiesItem style={{opacity:0.6, cursor:'no-drop'}}>
          <MoneyIcon>
            <RiExchangeDollarLine />
          </MoneyIcon>
          <br />
          <h4>Refinanciamento</h4>
        </OportunitiesItem>
        <OportunitiesItem style={{opacity:0.6, cursor:'no-drop'}}>
          <MoneyIcon>
            <BsCreditCard />
          </MoneyIcon>
          <h4>Cartão de crédito consignado</h4>
        </OportunitiesItem>
      </Oportunities>
    </>
  );
};

export default Home;
