import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom'
import {User,Games,UserGames} from './Pages'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <User />
        </Route>
        <Route path="/games">
          <Games />
        </Route>
        <Route path="/user-game">
          <UserGames />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
