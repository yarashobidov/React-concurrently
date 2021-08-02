import 'bootstrap/dist/css/bootstrap.css'
import Home from './components/pages/Home'
import About from './components/pages/About'
import Contact from './components/pages/Contact'
import Navbar from './components/layout/Navbar'
import { Switch, Route} from 'react-router-dom'
import NotFound from './components/pages/NotFound'
import AddUser from './components/users/AddUser'
import EditUser from './components/users/EditUser'
import User from './components/users/User'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/users/add" component={AddUser} />
        <Route path="/users/edituser/:id" component={EditUser} />
        <Route path="/users/:id" component={User} />
        <Route component={NotFound}  />
      </Switch>
    </div>
  );
}

export default App;
