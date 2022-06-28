import React, { useState, useEffect } from 'react';
import { ContinueContainer } from './style';
import {
  ValuesContainer,
  ValuesItem,
  InputContainer,
  TopContainer,
  TextTop,
  Continue
} from '../../styles/CommunsStyle';
import { IoIosArrowBack } from 'react-icons/io';
import axios from 'axios';

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

  const handleClick = e => {
    e.preventDefault();
    window.location.replace('/Period');
  };

  return (
    <>
      <TopContainer>
        <div>
          <a href="/">
            <IoIosArrowBack id="backItem" />
          </a>
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
        <Continue onClick={handleClick}>
          <a>Continuar</a>
        </Continue>
        <h5>
          <a href="/Period">Simule pela parcela</a>
        </h5>
      </ContinueContainer>
    </>
  );
};

export default Values;
