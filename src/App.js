import './App.css';
import {Link, BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Home from './Pages/Home.js'

function App() {
  return (
    <Router>
  <div className="App">
      <div class="container">
        <div class="row align-items-start">
          <div class="col">
            <div className="logo_box">
            LOGO HERE
            </div>
          </div>
          <div class="col">
          <div className="logo_box">
          <Link to="/">Get Films</Link> || Get People
          </div>
        </div>
        </div>
      </div>
    </div>
    <Switch>
      <Route path="/" component={Home}> 
        <Home />
     </Route>
    </Switch>
    </Router>
    
  );
}

export default App;
