import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import NavBar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Statistics from "./components/Statistics/Statistics";
import Info from "./components/Info/Info";
import Recent from "./components/RecentProjects/Recent";
import LogIn from "./components/LoginForm/LogIn";
import SignUp from "./components/SignupForm/LogIn";
import Team from "./components/Team/Team";

export default function App() {
    return (
        <>
            <Router>
                <NavBar/>
                <Statistics/>
                <Info/>
                <Recent/>
                <Team/>
                <Switch>
                    <Route exact path="/signUp" component={SignUp}/>
                    <Route exact path="/logIn" component={LogIn}/>
                </Switch>
            </Router>
            <Footer/>
        </>
    );
}