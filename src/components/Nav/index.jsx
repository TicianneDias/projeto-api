import React from 'react';
import { VscHome, VscQuestion } from 'react-icons/vsc';
import { IoDocumentsOutline } from 'react-icons/io5';
import { AiOutlineUser } from 'react-icons/ai';
import { NavContainer, NavItem } from './style';

const Nav = () => {
  return (
    <NavContainer>
      <a href="/">
        <NavItem>
          <VscHome className="icon" />
          <h3>Início</h3>
        </NavItem>
      </a>
      <a href="/Values">
        <NavItem>
          <IoDocumentsOutline className="icon" />
          <h3>Contratos</h3>
        </NavItem>
      </a>
      <a href="/">
        <NavItem>
          <VscQuestion className="icon" />
          <h3>Dúvidas</h3>
        </NavItem>
      </a>
      <a href="/">
        <NavItem>
          <AiOutlineUser className="icon" />
          <h3>Conta</h3>
        </NavItem>
      </a>
    </NavContainer>
  );
};

export default Nav;
