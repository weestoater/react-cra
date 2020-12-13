import React from "react";
import News from "./components/News/News";
// import Weather from "./components/Weather/Weather";
import Sports from "./components/Sports/Sports";
import Header from "./misc/Header";

function App() {
  return (
    <div className="container-fluid">
      <Header />
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
