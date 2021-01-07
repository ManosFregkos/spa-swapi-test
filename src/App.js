import './App.css';
import {Link, BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Home from './Pages/Home.js';
import People from './Pages/People';

function App() {
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
    <Switch>
      <Route exact path="/films" component={Home}/> 
      <Route path="/people" component={People}/>
    </Switch>
    </Router>
    
  );
}

export default App;
