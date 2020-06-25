import React from 'react';
import './App.css';
import {BrowserRouter, Route, Router, Switch} from "react-router-dom";
import AdminPanel from "./Pages/AdminPanel/AdminPanel";
import AdminNavigation from "./Components/AdminNavigation/AdminNavigation";

function App() {
  return (
    <div className="App">
      {
        window.location.pathname.split('/')[1] === '/AdminPanel'
            ? <AdminNavigation/>
            : null
      }
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
          </Route>
            <Route path="/AdminPanel">
                <AdminPanel/>
            </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
