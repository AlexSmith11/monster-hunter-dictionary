import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from "react-router-dom"

class TopNav extends Component {
    render() {
        return (
            <div>
                <Navbar bg="dark" variant="dark">
                    <Navbar.Brand as={Link} to="main">MHW Dictionary</Navbar.Brand>
                    <Nav className="mr-auto">
                        {/* <Nav.Link as={Link} to="main">Home</Nav.Link> */}
                        <Nav.Link as={Link} to="dictionary">Dictionary</Nav.Link>
                        <Nav.Link as={Link} to="about">About</Nav.Link>
                    </Nav>
                </Navbar>
            </div>
        );
    }
}

export default TopNav