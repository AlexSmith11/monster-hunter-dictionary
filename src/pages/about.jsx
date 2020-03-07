import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap'
import { useRouteMatch } from 'react-router-dom';

/**
 * About page
 */
const About = () => {
    let match = useRouteMatch;

    return (
        <div>
            <h1>About Page</h1>
            <p>Some stuff here about the app.</p>
        </div>
    );
}

export default About;