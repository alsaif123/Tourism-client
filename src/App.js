import "bootstrap/dist/css/bootstrap.min.css";

import Home from "./component/home/Home";
import Header from "./component/Header/Header";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./component/Login/Login";
import PrivateRoute from "./component/PrivateRoute/PrivateRoute";
import NotFound from "./component/NotFound/NotFound";
import AuthProvider from "./context/AuthProvider";
import Footer from "./component/Footer/Footer";
import About from "./component/About/About";
import AddPlaces from "./component/Admin/AddPlaces";
import PlaceDetails from "./component/PlaceDetails";

function App() {
  return (
    <>
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/about">
              <About></About>
            </Route>

            <Route path="/login">
              <Login />
            </Route>
            <PrivateRoute path="/admin">
              <AddPlaces/>
            </PrivateRoute>
            <PrivateRoute path="/placeDetails/:id">
             <PlaceDetails/>
            </PrivateRoute>
            <Route path="/addPlaces">
              <AddPlaces />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </>
  );
}

export default App;
