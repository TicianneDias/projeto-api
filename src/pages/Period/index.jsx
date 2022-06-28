import React, { useState, useEffect } from 'react';
import {
  TopContainer,
  TextTop,
  InputContainer,
  ValuesContainer,
  ValuesItem,
  Continue
} from '../../styles/CommunsStyle';
import { IoIosArrowBack } from 'react-icons/io';
import axios from 'axios';

const Period = () => {
  const [getValues, setGetValues] = useState([]);
  const [getMax, setGetMax] = useState([]);
  const [getMin, setGetMin] = useState([]);

  useEffect(() => {
    axios
      .get(
        'https://5fpaprjjbl.execute-api.us-east-1.amazonaws.com/test/installments'
      )
      .then(({ data }) => {
        setGetValues(data.suggestionInstallments.sort());
        setGetMin(data.min);
        setGetMax(data.max);
      });
  }, []);

  const handleClick = e => {
    e.preventDefault();
    window.location.replace('/Simulation');
  };

  return (
    <>
      <TopContainer>
        <div>
          <a href='/Values'>

          <IoIosArrowBack id="backItem" />
          </a>
          <h2>Período</h2>
        </div>
      </TopContainer>
      <TextTop>
        <h3>Em quanto tempo você quer pagar?</h3>
      </TextTop>
      <ValuesContainer>
        {getValues.map(values => {
          return (
            <ValuesItem key={values}>
              <h5>{values} meses</h5>
            </ValuesItem>
          );
        })}
      </ValuesContainer>
      <InputContainer>
        <input
          type="number"
          placeholder="00"
          min={getMin}
          max={getMax}
          step="12"
          style={{
            width: 'auto',
            border: 'none',
            backgroundColor: 'var(--color-gray)',
            fontSize: '16px',
            borderBottom: '1px solid gray',
            textAlign: 'center'
          }}
        />
        <h4>meses</h4>
      </InputContainer>
      <Continue onClick={handleClick}>
        <a>Continuar</a>
      </Continue>
    </>
  );
};

export default Period;
