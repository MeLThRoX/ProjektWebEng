import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Login from './Auth/Login.js'
import Signup from './Auth/Signup.js'
import Navbar from './Navigation/Navbar.js'
import Home from './Pages/Home.js'
import Movie from './Pages/Movie.js'
import Popular from './Pages/Movies/Popular.js';
import TopRated from './Pages/Movies/TopRated.js';

import './App.css'

function App() {
  return (
    <div className="App">
      <Navbar />
      <div style={{
        marginLeft: "auto",
        marginRight: "auto",
        width: "50vw",
        maxWidth: "1300px",
        minWidth: "800px"
      }}>
        <Router>
          <Route path="/home" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <Route path="/movie/:id" component={Movie} />
          <Route path="/movies/popular" component={Popular} />
          <Route path="/movies/top_rated" component={TopRated} />
        </Router>
      </div>
    </div>
  );
}

export default App;
