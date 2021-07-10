//* React
import * as React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
//* pages and components
import Navbar from './components/Navbar';
import Particle from './components/Particle';
import Home from './pages/Home';
//* styling
import './styles/tailwind.css';
import './styles/custom.css';
//* animate
//animate
import Aos from "aos";
import "aos/dist/aos.css";

function App() {

  React.useEffect(() => {
    Aos.init({duration: 1000});
    Aos.refresh();
  },[]);

  return (
    <Router>
        <div className="font-sans">
          <Navbar/>
          <Switch>
              <Route to="/" exact component={Home}/>
          </Switch>
          <Particle/>
        </div>
    </Router>
  );
}

export default App;
