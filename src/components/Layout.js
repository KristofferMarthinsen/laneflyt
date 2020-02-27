import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Header from "./Header";

const Layout = ({ title, subtitle, icon, id, children }) => (
  <Wrapper>
    <HeaderElement>
      <Header title={title} id={id} />
    </HeaderElement>

    {icon && <Icon>{icon()}</Icon>}

    {subtitle && <Tekst>{subtitle()}</Tekst>}

    {children}
  </Wrapper>
);

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 150px;
`;

const HeaderElement = styled.div`
  align-self: flex-start;
  padding-left: 7px;
`;

const Icon = styled.div`
  display: flex;
  flex-direction: row;
  padding-top: 69px;
`;

const Tekst = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  width: 297px;
  padding-top: 36px;
  h3 {
    font-size: 16px;
    font-weight: normal;
  }
  p {
    padding-top: 9px;
    font-size: 11px;
    font-weight: normal;
    color: #626271;
  }
`;

export default Layout;
