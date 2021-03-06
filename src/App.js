import 'semantic-ui-css/semantic.min.css'
import './App.css';

import { Board } from './components/Board';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Users } from "./pages/Users";
import { About } from "./pages/About";
import { FooterBoard } from './components/FooterBoard';
import { MenuBoard } from './components/MenuBoard';

function App() {
  return (
      <Router>
        <div>
      <MenuBoard />
          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/users">
              <Users />
            </Route>
            <Route path="/">
              <Board />
            </Route>
          </Switch>
      <FooterBoard />
        </div>
      </Router>
  );
}

export default App;
