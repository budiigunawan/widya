import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

// Redux
import {Provider} from 'react-redux'
import store from './store/index'

// Pages and Component
import Home from './pages/Home'
import NewEmployee from './pages/NewEmployee'
import Navbar from './components/Navbar'

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/new'>
            <NewEmployee />
          </Route>
          <Route path='/'>
            <Home />
          </Route>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
