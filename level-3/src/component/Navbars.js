
import { Link } from 'react-router-dom'
import React, { Component } from "react";
import { useLocation } from "react-router-dom";
import { Navbar, NavDropdown, Nav, Form, Button, FormControl } from "react-bootstrap";

function Navbars() {
    const location = useLocation();
    const mobileSidebarToggle = (e) => {
        e.preventDefault();
        document.documentElement.classList.toggle("nav-open");
        var node = document.createElement("div");
        node.id = "bodyClick";
        node.onclick = function () {
            this.parentElement.removeChild(this);
            document.documentElement.classList.toggle("nav-open");
        };
        document.body.appendChild(node);
    };

    const getBrandText = () => {
        // for (let i = 0; i < routes.length; i++) {
        //     if (location.pathname.indexOf(routes[i].layout + routes[i].path) !== -1) {
        //         return routes[i].name;
        //     }
        // }
        return "Brand";
    };
    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="/user/chart">
                            <li>Chart</li>
                    </Nav.Link>
                    <Nav.Link href="/user/shop">
                            <li>Shop</li>
                    </Nav.Link>
                    <Nav.Link href="/user/about">
                            <li>About</li>
                    </Nav.Link>
                    <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-success">Search</Button>
                </Form>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default Navbars;
