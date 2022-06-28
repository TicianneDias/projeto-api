import React, { useState, useEffect } from 'react';
import { TopContainer, TextTop } from '../../styles/CommunsStyle';
import {
  OptionsTopContainer,
  OptionsContainer,
  Rate,
  Total,
  OptionsBottomContainer,
  FinishContainer
} from './style';
import IMG from '../../assets/image/logo.png';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { AiOutlineQuestionCircle } from 'react-icons/ai';
import axios from 'axios';

const Simulation = () => {
  const [getSimulation, setGetSimulation] = useState([]);

  useEffect(() => {
    axios
      .get(
        'https://5fpaprjjbl.execute-api.us-east-1.amazonaws.com/test/simulation'
      )
      .then(res => setGetSimulation(res.data))
      .catch(err => console.log(err));
  });

  return (
    <>
      <TopContainer>
        <div>
          <a href="/Period">
            <IoIosArrowBack id="backItem" />
          </a>
          <h2>Opções</h2>
        </div>
      </TopContainer>
      <TextTop>
        <h3>Escolha um banco.</h3>
      </TextTop>
      <OptionsContainer>
        <OptionsTopContainer>
          <img src={IMG} alt="" />
          <Total>
            <h6>{getSimulation.numberOfInstallments} parcelas de</h6>
            <h3>R$ {getSimulation.installmentValue}</h3>
            <h6 id="total">Total de {getSimulation.contractValue}</h6>
          </Total>
          <Rate>
            <h6>com taxa de</h6>
            <h5>{getSimulation.rate}% a.m.</h5>
          </Rate>
        </OptionsTopContainer>
        <OptionsBottomContainer>
          <h6>
            Previsão de pagamento <AiOutlineQuestionCircle id="questionIcon" />
          </h6>
          <h6 id="estimated">
            {getSimulation.nearEstimatedDate} a {getSimulation.fatEstimatedDate}
          </h6>
        </OptionsBottomContainer>
        <FinishContainer>
          <h5>
            <a href="/">Contratar</a>
          </h5>
          <IoIosArrowForward id="forwardIcon" />
        </FinishContainer>
      </OptionsContainer>
    </>
  );
};

export default Simulation;
