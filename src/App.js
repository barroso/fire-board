import 'semantic-ui-css/semantic.min.css'
import './App.css';

import { MenuBoard } from './components/MenuBoard';
import { FooterBoard } from './components/FooterBoard';
import { BodyBoard } from './components/BodyBoard';

function App() {
  return (
    <div>
      <MenuBoard />
      <BodyBoard />
      <FooterBoard />
    </div>
  );
}

export default App;
