import React, { Component } from 'react';

/**
 * Import the navbar plus any pages you want to dsplay on the navbar here
 */
import Navbar from './Components/navbar.jsx'
import Main from './pages/main';
import Dictionary from './pages/dictionary';
import About from './pages/about'

/**
 * Import router
 */
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect,
    useRouteMatch
} from "react-router-dom";

/**
 * Introduce any pathing here. 
 * The 'Dictionary' path contains all lists (topics).
 * The 'Topic' path is any specific list such as all monsters, or all weapons.
 */
export default function App() {
    return (
        <div>
            <Router>
                <Navbar/>
                <Switch>
                    <Redirect exact from="/" to="main"></Redirect>
                    <Route path="/main"><Main/></Route>
                    <Route path="/dictionary"><Dictionary/></Route>
                    <Route path="/about"><About/></Route>
                </Switch>
            </Router>
        </div>
    );
}
