import React from "react";
import "./App.css";
import {
  Route,
  BrowserRouter as Router,
  Switch,
  Redirect,
} from "react-router-dom";
import { connect } from "react-redux";
import AuthRoute from "./router/AuthRoute";
import Login from "./modules/Login";
import PropTypes from "prop-types";
import LandingPage from "./modules/LandingPage";
import DetailVideo from "./modules/DetailVideo";


function App(props) {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact={true} path="/login" component={LandingPage} />
          <Route exact={true} path='/information' component={DetailVideo}  />
          <AuthRoute isValidUser={props.isValidUser}/>
          <Route
            path="/"
            render={() => <Redirect from="/" to="/login" />}
          ></Route>
          <Redirect from="*" to="/login" />
        </Switch>
      </Router>
    </div>
  );
}

const mapStateToProps = ({ isValidUser }) => {
  return { isValidUser };
};
export default connect(mapStateToProps, null)(App);


App.defaultProps = {
  isValidUser: false,
};
App.propTypes = {
  isValidUser: PropTypes.bool,
};
