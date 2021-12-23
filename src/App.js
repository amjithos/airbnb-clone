import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Dashboard from "./admin/Dashboard";
import Navbar from './components/Navbar'
import Homepage from "./pages/Homepage";
import Host from "./pages/Host";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Switch>
        
          <Route exact path="/">
            <Homepage/>
          </Route>

          <Route path="/host">
            <Host/>
          </Route>
    
          <Route path="/admin">
            <Dashboard/>
          </Route>

        </Switch>
      </Router>
    </div>
  );
}

export default App;
