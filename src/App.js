import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import {BrowserRouter as Router, Redirect, Route, Switch} from 'react-router-dom';
import About from './components/About';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar/>
        <Switch>

          <Route exact path='/'>
            <Redirect to='/projects'/>
          </Route>

          <Route exact path='/about'>
            <About/>
          </Route>

          <Route exact path='/projects'>
            <Projects/>
          </Route>

          <Route exact path='/resume'>
            <Resume/>
          </Route>

          <Route exact path='/contact'>
            <Contact/>
          </Route>

        </Switch>
        
      </Router>
    </div>
  );
}

export default App;
