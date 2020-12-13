import React from "react";
import logo from "./logo.svg";
import "./App.scss";
import News from "./components/News/News";
// import Weather from "./components/Weather/Weather";
import Sports from "./components/Sports/Sports";

function App() {
  return (
    <div className="container-fluid">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <div className="row">
        <div className="col-sm-6">
          <div className="row">
            <News />
          </div>
        </div>
        <div className="col-sm-6">
          <div className="row">
            <Sports />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
