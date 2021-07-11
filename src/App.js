//* React
import * as React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
//* pages and components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
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

  let [isBlurred, setIsBlurred] = React.useState(false);

  React.useEffect(() => {
    Aos.init({duration: 1000});
    Aos.refresh();
  },[]);

  let handleScroll = () => {
    if(window.scrollY > 20)
      setIsBlurred(true);
    else
      setIsBlurred(false);
  }

  window.addEventListener('scroll', handleScroll);

  return (
    <Router>
        <div className="font-sans">
          <Navbar isBlurred={isBlurred}/>
          <Switch>
              <Route to="/" exact component={Home}/>
          </Switch>
          <Footer/>
          <Particle/>
        </div>
    </Router>
  );
}

export default App;
