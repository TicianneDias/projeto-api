import React from 'react';
import { TopContainer } from '../../styles/CommunsStyle';
import { IoIosArrowBack } from 'react-icons/io';
import IMG404 from '../../assets/image/404Error.jpg';
import { ErrorContainer } from './style';

const Page404 = () => {
  return (
    <>
      <TopContainer>
        <div>
          <a href="/">
            <IoIosArrowBack id="backItem" />
          </a>
          <h2>Página Não Encontrada</h2>
        </div>
      </TopContainer>
      <ErrorContainer>
        <img src={IMG404} alt="Imagem de erro de página não encontrada" />
      </ErrorContainer>
    </>
  );
};

export default Page404;
