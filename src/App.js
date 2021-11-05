import logo from './logo.svg';
import './App.css';
import {Authorization, ConfirmPassword} from "./components/Authorization/Authorization";
import React from "react";
import {Route} from "react-router-dom";
import PokemonCards from "./components/PokemonCards/PokemonCards";

function App() {
  return (
    <div className="App">
        <Route exact={true} path={'/'} render={() => <Authorization />} />
        <Route exact={true} path={'/confirm'} render={() => <ConfirmPassword /> } />
        <Route exact={true} path={'/cards'} render={() => <PokemonCards /> } />
    </div>
  );
}

export default App;
