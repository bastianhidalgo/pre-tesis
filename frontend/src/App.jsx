import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link
} from "react-router-dom";

import Home from './pages/Home'
import QRscan from './pages/QRscanner'
import Visitas from './pages/crearVisita'
import VerVisita from './pages/verVisita'
import ModificarVisita from './pages/modificarVisita';
import InputForm from './components/InputForm';

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <Router>
          <div>
            <Switch>
              <Route exact path="/">
                <Home/>
              </Route>
              <Route path="/qr_scanner">
                <QRscan/>
              </Route>
              <Route path="/crearVisita">
              <Visitas/>
              </Route>
              <Route path="/verVisita">
              <VerVisita/>
              </Route>
              <Route path="/modificarVisita">
              <ModificarVisita/>
              </Route>
              <Route path="/InputForm">
              <InputForm/>
              </Route>
            </Switch>

          </div>
        </Router>

      </div>
    </div>
  );
}

export default App;
