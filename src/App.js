/**
 * This is the entry file for the application.
 */

import React, { Component } from 'react';
import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
} from "react-router-dom";

/**
 * Import the navbar plus any pages you want to dsplay on the navbar
 */
import Navbar from './Components/navbar.js'

export default function App() {
    return (
        <div>
            <Router>
                <Navbar/>
                <Switch>
                    <Redirect exact from="/" to="Main"></Redirect>
                    <Route path="Main"><Main/></Route>
                    <Route path=""></Route>
                </Switch>
            </Router>
        </div>
    );
}