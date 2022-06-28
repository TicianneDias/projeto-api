import React, { useState, useEffect } from 'react';
import { TopContainer, TextTop, ValuesContainer, ValuesItem } from './style';
import { IoIosArrowBack } from 'react-icons/io';
import axios from 'axios';

const Values = () => {
  const [getValues, setGetValues] = useState([]);

  useEffect(() => {
    axios
      .get('https://5fpaprjjbl.execute-api.us-east-1.amazonaws.com/test/values')
      .then(res => setGetValues(res.data))
      .catch(err => console.log(err));
  }, [getValues]);

  const value = getValues?.suggestionValues

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
        <ValuesItem>
          <h5>R$ {value[0]},00</h5>
        </ValuesItem>
        <ValuesItem>
          <h5>R$ {value},00</h5>
        </ValuesItem>
        <ValuesItem>
          <h5>R$ {value},00</h5>
        </ValuesItem>
        <ValuesItem>
          <h5>R$ {value},00</h5>
        </ValuesItem>
      </ValuesContainer>
    </>
  );
};

export default Values;
