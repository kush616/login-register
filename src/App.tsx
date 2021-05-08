import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


import Register from "./components/Register"
import Home from "./components/Home"
import Login from "./components/login"
import './App.css';

function App() {
  return (
    <div className="App">
     
       <Router>
         <Switch>
           {/* for routing */}

         <Route path="/" exact component={Register} />
         <Route path="/register" exact component={Register} />
          <Route path="/login" exact component={Login} />
          <Route path="/home" exact component={ Home} />
         </Switch>


       </Router>

      
    </div>
  );
}

export default App;
