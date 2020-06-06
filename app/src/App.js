import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Login from './Auth/Login.js'
import Signup from './Auth/Signup.js'

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
      </Router>
    </div>
  );
}

export default App;
