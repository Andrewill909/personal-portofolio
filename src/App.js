//* React
import * as React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
//* pages and components
import Preloader from './components/Preloader';
import Navbar from './components/Navbar';
import Home from './pages/Home';
//* styling
import './styles/tailwind.css';
import './styles/custom.css';

function App() {

  let [load, setLoad] = React.useState(true);

  React.useEffect(() => {
    let load = setTimeout(() => {
      setLoad(false);
    }, 1500);

    return () => {
      clearTimeout(load);
    }
  }, []);

  return (
    <Router>
        <Preloader isLoad={load}/>
        <div className="App" id={load ? "no-scroll" : "scroll"}>
          <Navbar/>
          <Switch>
              <Route to="/" exact component={Home}/>
          </Switch>
        </div>
    </Router>
  );
}

export default App;
