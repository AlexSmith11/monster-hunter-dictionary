import React, { Component } from 'react';
import {Navbar, Nav} from 'react-bootstrap'
import { useRouteMatch } from 'react-router-dom';

/**
 * About page
 */
const About = () => {
    let match = useRouteMatch;
    
    return(
        <h1>About Page</h1>
    );
}

export default About;