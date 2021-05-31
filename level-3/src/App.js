import './App.css';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import UserLayout from './layout/UserLayout'
import Nav from './component/Nav'


function App() {
  return (

    <Router>
      <Nav />
      <Switch>
        <Route path="/user" render={(props) => <UserLayout {...props} />} />
        <Redirect from="/" to="/user/shop" />
      </Switch>
    </Router>
  );
}

const Home = () => (
  <div>
    <div>
      <h4>
        This is home page
      </h4>
    </div>
  </div>
)


export default App;