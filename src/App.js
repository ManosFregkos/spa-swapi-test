import './App.css';
import {Link, BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Home from './Pages/Home.js';
import People from './Pages/People';
import { CSVLink } from "react-csv";
import { useState } from 'react';




function App() {

  const [planets , setPlantes] = useState([])
  const makePlanetRequest = () => {
    fetch('https://swapi.dev/api/planets/')
    .then(response => response.json())
    .then(data => {
      setPlantes(data.results);
  });
  }


  return (
    <Router>
  <div className="App">
      <div className="container">
        <div className="row align-items-start">
          <div className="col">
            <div className="logo_box">
            LOGO HERE
            </div>
          </div>
          <div className="col">
          <div className="logo_box">
          <Link to="/films">Get Films</Link> || <Link to="/people">Get People</Link>
          </div>
        </div>
        </div>
      </div>
    </div>
    <CSVLink onClick={makePlanetRequest} className="btn btn-primary" data={planets}>Download me</CSVLink>;
    <Switch>
      <Route exact path="/films" component={Home}/> 
      <Route path="/people" component={People}/>
    </Switch>
    </Router>
    
  );
}

export default App;
