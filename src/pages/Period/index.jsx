import React, { useState, useEffect } from 'react';
import {
  TopContainer,
  TextTop,
  InputContainer,
  ValuesContainer,
  ValuesItem
} from '../../styles/CommunsStyle';
import { IoIosArrowBack } from 'react-icons/io';
import ContinueButton from '../../components/ContinueButton';
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

  return (
    <>
      <TopContainer>
        <div>
          <IoIosArrowBack id="backItem" />
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
      <ContinueButton />
    </>
  );
};

export default Period;
