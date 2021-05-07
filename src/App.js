import bridge from './assets/logobridge.png';
import './App.css';
import React, { Component } from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import admin from './components/admin'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <div className="bridge-logo"> <img src={bridge}></img> <a class="navbar-brand" >Shop Bridge</a></div>
          <a class="navbar-brand" href="/admin">Add Item</a>

        </nav>

        <div></div>
        <Router>
          <Switch>
            <Route path="/admin" component={admin} />
          </Switch>
        </Router>
      </header>

    </div>
  );

}

export default App;
