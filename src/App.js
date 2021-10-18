import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, } from 'react-router-dom';
import Home from './components/Home/Home';
import Services from './components/Services/Services';
import AboutUs from './components/AboutUs/AboutUs';
import HealthyEating from './components/HealthyEating/HealthyEating';
import NotFound from './components/NotFound/NotFound';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import YogaAll from './components/YogaAll/YogaAll';
import YogaDetails from './components/YogaDetails/YogaDetails';
import initializeAuthentication from './Firebase/firebase.initialize';
import AuthProvider from './Context/AuthProvider';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

initializeAuthentication();

function App() {
  return (
    <div className="App">

      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path='/'>
              <Home></Home>
            </Route>
            <Route exact path='/home'>
              <YogaAll></YogaAll>
            </Route>
            <Route exact path='/yogaall'>
              <YogaAll></YogaAll>
            </Route>

            <Route path='/yoga/:yogaId'>
              <YogaDetails></YogaDetails>
            </Route>

            {/* <Route path='/services'>
              <YogaAll></YogaAll>
            </Route> */}

            <PrivateRoute path='/services'>
              <YogaAll></YogaAll>
            </PrivateRoute>

            <Route path='/healthyeating'>
              <HealthyEating></HealthyEating>
            </Route>

            <Route path='/aboutus'>
              <AboutUs></AboutUs>
            </Route>

            <Route path='/login'>
              <Login></Login>
            </Route>
            <Route path='/register'>
              <Register></Register>
            </Route>

            {/* <Route path='/notfound'>
            <NotFound></NotFound>
          </Route> */}

            <Route path='*'>
              <NotFound></NotFound>
            </Route>

          </Switch>

          <Footer></Footer>

        </Router>
      </AuthProvider>


    </div>
  );
}

export default App;
