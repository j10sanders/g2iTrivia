import React from "react";
import Routes from "./routes";
import { StateProvider } from "./store";

function App() {
  return (
    <StateProvider>
      <div>
        App
        <Routes />
      </div>
    </StateProvider>
  );
}

export default App;
