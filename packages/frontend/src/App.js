import './App.css';
import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom';
import Superheroes from './pages/Superheroes';
import Counter from './pages/Counter';

function App() {
  return(
    <Router>
      <nav>
        <ul>
          <li>
            <Link to='/'>Counter</Link>
          </li>
          <li>
            <Link to='/superheroes'>Superheroes</Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route path="/counter" component={Counter}/>
        <Route path="/chat" component={Chat}/>
        <Route path="/superheroes" component={Superheroes} />
      </Switch>
    </Router>
  )
}


export default App;
