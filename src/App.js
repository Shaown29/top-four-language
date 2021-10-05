import logo from './logo.svg';
import './App.css';
import Home from './Components/Home/Home';
import { BrowserRouter as Router, NavLink } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Services from './Components/Services/Services';
import AboutUs from './Components/AboutUs/AboutUs';
import Description from './Components/Description/Description';
import NotFound from './Components/NotFound/NotFound';


function App() {
  
  return (
    <div className="App">
     
    
     <Router>
     <nav className="nav bg-dark justify-content-center h-25">
            <NavLink className="nav-link text-white" aria-current="page" to="/home">Home</NavLink>
            <NavLink className="nav-link text-white" to="/services">Services</NavLink>
            <NavLink className="nav-link text-white" to="/about">About us</NavLink>
            <NavLink className="nav-link text-white" to="/description">Description</NavLink>
     </nav>
      <Switch>
       <Route exact path="/">
          <Home></Home>
        </Route>
        <Route path="/home">
          <Home></Home>
        </Route>
        <Route path="/services">
          <Services></Services>
        </Route>
        <Route path="/about">
          <AboutUs></AboutUs>
        </Route>
        <Route path="/description">
          <Description></Description>
        </Route>
        <Route path="*">
          <NotFound></NotFound>
        </Route>
        </Switch>
     </Router>
    </div>
  );
}

export default App;
