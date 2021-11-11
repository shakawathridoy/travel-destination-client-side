import React from "react";
import { BrowserRouter as Router, Switch, Route,} from "react-router-dom";
import Home from "./components/Home/Home";
import Menubar from "./components/Shared/Menubar/Menubar";
import Footer from "./components/Shared/Footer/Footer";
import NotFound from "./components/NotFound/NotFound";
import Appoinment from "./components/Appoinment/Appoinment";
import SingUp from "./components/SingUp/SingUp";
import SingIn from "./components/SingIn/SingIn";
import AuthProvider from './Context/AuthContext';
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import MyBooking from "./components/MyBooking/MyBooking";
import ManageBooking from "./components/ManageBooking/ManageBooking";
import AddPlace from "./components/AddPlace/AddPlace";
    

function App() {
      return (
        <div>
          <AuthProvider>
        <Router>
          <Menubar></Menubar>
            <Switch>
              <Route exact path="/">
                <Home></Home>
              </Route>
              <Route exact path="/home">
                <Home></Home>
              </Route>
              <Route path="/booking/:id">
                <Appoinment></Appoinment>
              </Route>
              <Route exact path="/logIn">
                <SingIn></SingIn>
              </Route>
              <Route exact path="/singUp">
                <SingUp></SingUp>
              </Route>
              <PrivateRoute exact path="/myBooking">
                <MyBooking></MyBooking>
              </PrivateRoute>
              <PrivateRoute exact path="/manageBooking">
                <ManageBooking></ManageBooking>
              </PrivateRoute>
              <PrivateRoute exact path="/addPlace">
                <AddPlace></AddPlace>
              </PrivateRoute>
              <Route exact path="*">
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