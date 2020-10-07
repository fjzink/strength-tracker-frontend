import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ResponsiveDrawer from './components/ResponsiveDrawer';
import { Home } from './components/Home';
import { Exercises } from './components/Exercises';
import { Plans } from './components/Plans';

function App() {
  return (
    <div className='App'>
      <Router>
        <ResponsiveDrawer>
          <Switch>
            <Route path='/plans'>
              <Plans />
            </Route>
            <Route path='/exercises'>
              <Exercises />
            </Route>
            <Route path='/'>
              <Home />
            </Route>
          </Switch>
        </ResponsiveDrawer>
      </Router>
    </div>
  );
}

export default App;
