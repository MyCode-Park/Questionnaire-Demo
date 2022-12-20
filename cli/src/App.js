import React from "react";

import { BrowserRouter, Route, Switch,Redirect} from "react-router-dom";
//import { Route, Routes } from "react-router-dom";
import LoginPage from "./components/LoginPage";
import CreateAccount from "./components/CreateAccount";

function App() {
  return (
    <div>
      <BrowserRouter>
      <Switch>
        <Route exact path="/" component={LoginPage} />
        <Route exact path="/createAccount" component={CreateAccount} />
       
      </Switch>
    </BrowserRouter>
    </div>
    
  );
}

export default App;
