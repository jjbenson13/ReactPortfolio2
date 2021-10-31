import './App.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'
import Navbar from './components/Navbar/navbar'

function App() {
  return (
    <Router>
      <div>
        face
        <Switch>
          <Route exact path='/'>
            <Navbar />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;