import React from "react";
import "./App.css";
import { IntlProvider } from "react-intl";
import { useSelector } from "react-redux";
import Landing from "./Pages/Landing";
import Skills from "./Pages/Skills";
import Aboutme from "./Pages/Aboutme";

function App() {
  const LenguajeState = useSelector((state) => state.lenguaje);
  
  return (
    <div className="App">
      <IntlProvider
        locale={LenguajeState.locale}
        messages={LenguajeState.messege}
      >
        <Landing />
        <Skills />
        <Aboutme />
      </IntlProvider>
    </div>
  );
}

export default App;
