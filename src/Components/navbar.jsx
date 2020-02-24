import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';

const Navbar = () => {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Navbar.brand as={link} to="Main">Home</Navbar.brand>
                <Nav className="mr-auto">
                    <Nav.Link as={Link} to="main">Main</Nav.Link>
                    <Nav.Link as={Link} to="dictionary">Dictionary</Nav.Link>
                </Nav>
            </Navbar>
        </div>
    )
}