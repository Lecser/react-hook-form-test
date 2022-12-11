import { Login } from "./Login/Login";
import styled from "styled-components";
import React from "react";

const AppWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 100vh;
  background-color: whitesmoke;
`;

function App() {
  return (
    <AppWrapper>
      <Login />
    </AppWrapper>
  );
}

export default App;
