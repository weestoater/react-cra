import React from 'react';
import logo from "../logo.svg";

export default function Header() {
    return (
        <header className="row">
            <div className="col-sm-12 col-lg-3">
                <img src={logo} className="App-logo" alt="logo" />
            </div>
            <div className="col-sm-12 col-lg-9">
                <h1><code>ReactJs:</code> api feeds</h1>  
            </div>
        </header>
    );
}

