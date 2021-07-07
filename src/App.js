//* React
import * as React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
//* pages and components
import Navbar from './components/Navbar';
import Home from './pages/Home';
//* styling
import './styles/tailwind.css';
import './styles/custom.css';

function App() {

  return (
    <Router>
        <div className="App">
          <Navbar/>
          <Switch>
              <Route to="/" exact component={Home}/>
          </Switch>
        </div>
    </Router>
  );
}

export default App;
