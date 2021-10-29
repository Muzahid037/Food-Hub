import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import AddService from './components/AddService/AddService';
// import Blogs from './components/Blogs/Blogs';
// import Doctors from './components/Doctors/Doctors';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import ManageAllOrders from './components/ManageAllOrders/ManageAllOrders';
import MyOrders from './components/MyOrders/MyOrders';
import PlaceOrder from './components/PlaceOrder/PlaceOrder';
import NotFound from './components/NotFound/NotFound';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
// import Register from './components/Register/Register';
// import ServiceDetails from './components/ServiceDetails/ServiceDetails';
import AuthProvider from './context/AuthProvider';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>

            <Route exact path="/">
              <Home></Home>
            </Route>

            <Route exact path="/home">
              <Home></Home>
            </Route>

            <Route exact path="/login">
              <Login></Login>
            </Route>

            <PrivateRoute exact path="/placeOrder/:serviceId">
              <PlaceOrder></PlaceOrder>
              {/* <ServiceDetails></ServiceDetails> */}
            </PrivateRoute>

            <PrivateRoute exact path="/addservice">
              <AddService></AddService>
              {/* <ServiceDetails></ServiceDetails> */}
            </PrivateRoute>

            <PrivateRoute exact path="/manageOrders">
              <ManageAllOrders></ManageAllOrders>
              {/* <ServiceDetails></ServiceDetails> */}
            </PrivateRoute>

        
            <PrivateRoute exact path="/myOrders">
              <MyOrders></MyOrders>
              {/* <ServiceDetails></ServiceDetails> */}
            </PrivateRoute>

            <Route path="*">
              <NotFound></NotFound>
            </Route>

          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>

      {/* <AuthProvider>

        <Router>
          <Header></Header>
          <Switch>

            <Route exact path="/">
              <Home></Home>
            </Route>

            <Route exact path="/home">
              <Home></Home>
            </Route>

            <PrivateRoute exact path="/home/:serviceId">
              <ServiceDetails></ServiceDetails>
            </PrivateRoute>

            <PrivateRoute exact path="/doctors">
              <Doctors></Doctors>
            </PrivateRoute>

            <PrivateRoute exact path="/blogs">
              <Blogs></Blogs>
            </PrivateRoute>

            <Route exact path="/login">
              <Login></Login>
            </Route>

            <Route exact path="/register">
              <Register></Register>
            </Route>

            <Route path="*">
              <NotFound></NotFound>
            </Route>

          </Switch>
          <Footer></Footer>
        </Router>

      </AuthProvider> */}
    </div>
  );
}

export default App;
