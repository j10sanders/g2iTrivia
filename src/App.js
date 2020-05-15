import React from "react";
import Routes from "./routes";
import { StateProvider } from "./store";
import styled from "styled-components";

const AppContainer = styled.div`
  height: 100%;
`;

function App() {
  return (
    <StateProvider>
      <Routes />
    </StateProvider>
  );
}

export default App;
