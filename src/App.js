import React from "react";
import Routes from "./routes";
import { StateProvider, Theme } from "./store";

function App() {
  return (
    <StateProvider>
      <Theme>
        <Routes />
      </Theme>
    </StateProvider>
  );
}

export default App;
