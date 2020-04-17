import React from "react";
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
  align-content: space-between;
  padding-top: 30px;
  z-index: 0;
`;

const HeaderElement = styled.div`
  align-self: flex-start;
  padding-left: 7px;
  padding-bottom: 36px;
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
  width: 285px;

  h3 {
    padding-top: 20px;
    font-size: 16px;
    font-weight: normal;
  }
  p {
    padding-top: 9px;
    font-size: 11px;
    font-weight: normal;
    color: #626271;
  }
  h1 {
    padding-top: 19px;
    font-size: 36px;
    font-weight: 600;
    color: #5c306b;
  }
`;

export default Layout;
