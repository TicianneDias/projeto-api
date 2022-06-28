import React, { useState, useEffect } from 'react';
import {
  ValuesContainer,
  ValuesItem,
  InputContainer,
  ContinueContainer
} from './style';
import { TopContainer, TextTop } from '../../styles/CommunsStyle';
import { IoIosArrowBack } from 'react-icons/io';
import axios from 'axios';
import ContinueButton from '../../components/ContinueButton';

const Values = () => {
  const [getValues, setGetValues] = useState([]);
  const [getMax, setGetMax] = useState([]);
  const [getMin, setGetMin] = useState([]);

  useEffect(() => {
    axios
      .get('https://5fpaprjjbl.execute-api.us-east-1.amazonaws.com/test/values')
      .then(({ data }) => {
        setGetValues(data.suggestionValues);
        setGetMin(data.min);
        setGetMax(data.max);
      });
  }, []);

  return (
    <>
      <TopContainer>
        <div>
          <IoIosArrowBack id="backItem" />
          <h2>Valores</h2>
        </div>
      </TopContainer>
      <TextTop>
        <h3>De quanto você precisa?</h3>
      </TextTop>
      <ValuesContainer>
        {getValues.map(values => {
          return (
            <ValuesItem key={values}>
              <h5>R$ {values},00</h5>
            </ValuesItem>
          );
        })}
      </ValuesContainer>
      <InputContainer>
        <h4>Outro valor</h4>
        <input
          type="number"
          placeholder="R$ 00,00"
          min={getMin}
          max={getMax}
          step="50"
          style={{
            width: 'auto',
            border: 'none',
            backgroundColor: 'var(--color-gray)',
            fontSize: '16px',
            borderBottom: '1px solid gray',
            textAlign: 'center'
          }}
        />
      </InputContainer>
      <ContinueContainer>
      <ContinueButton />
        <h5>
          <a href="">Simule pela parcela</a>
        </h5>
      </ContinueContainer>
    </>
  );
};

export default Values;
