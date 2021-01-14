// import logo from './logo.svg';
// import schulich from '/schulich.png';
import './App.css';
import "bulma/css/bulma.css";
import Nav from './Nav';
import AllOutlines from './AllOutlines';
import CreateOutline from './CreateOutline';
import Home from './Home';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {useReducer,useState} from "react";
import ReactDOM from 'react-dom'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCheckSquare, faCoffee, faTrash, faSave, faPlus, faMinus} from '@fortawesome/free-solid-svg-icons'

library.add(faCheckSquare, faCoffee, faTrash, faSave, faPlus, faMinus)


function App() {
  
  

  return (
    <Router>
      <div>
        <Nav></Nav> 
        {/* we want the nav bar to be across all the pages, while we want the other components 
        to render accordint to the url route */}
        <Switch>
          <Route path = "/" exact component={Home}/>
          <Route path = "/all_outlines" component={AllOutlines}/>
          <Route path = "/create_outline" component={CreateOutline}/>
        </Switch>
      </div>
  </Router>
  );
}

export default App;
