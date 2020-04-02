import React from "react";
import styled from "@emotion/styled";
import { useStitchAuth } from "./StitchAuth";
import {Button} from "@staccx/bento";

Login.propTypes = {};
export default function Login() {
  const { actions } = useStitchAuth();
  return (
    
      <Layout>

          
            <ButtonRow>
              <LoginButton onClick={actions.handleAnonymousLogin}>
                Log In as a Guest User
              </LoginButton>
            </ButtonRow>
        
      </Layout>
    
  );
}
const Layout = styled.div`
  background: #eeeeee;
  height: 100%;
  padding: 20px;
`;

const LoginButton = styled(Button)`
  margin-top: 10px;
  :first-of-type {
    margin-top: 0px;
  }
`;
const ButtonRow = styled.div`
  display: flex;
  flex-direction: column;
`;