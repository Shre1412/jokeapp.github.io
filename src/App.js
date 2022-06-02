import React from 'react';
import AddJoke from './AddJoke';
import Home from './Home';
import {Route} from 'react-router-dom';
import NavBar from'./NavBar';
import Search from './Search';

function App() {  
  return (
    <div>
      <NavBar />
      <Route exact path = '/AddJoke' component = {AddJoke} />
      <Route exact path = '/Home' component = {Home} />
      <Route exact path = '/Search' component = {Search} />
    </div>
  );
}

export default App;