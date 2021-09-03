// import React from 'react'
// import { Container, Nav, Navbar } from 'react-bootstrap'
// import { Link } from 'react-router-dom'

// const linkStyle = {
//     color: "rgba(255,255,255,.55)",
//     textDecoration: "none"
// }

// function Header() {
//     return (
//         <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
//             <Container>
//                 <Navbar.Brand href="/">Food Recipes</Navbar.Brand>
//                 <Navbar.Toggle aria-controls="responsive-navbar-nav" />
//                 <Navbar.Collapse id="responsive-navbar-nav">
//                     <Nav className="me-auto">
//                         <Nav.Link href="/">Home</Nav.Link>
//                         <Nav.Link href="/details">Ingredients</Nav.Link>
//                         <Nav.Link href="/favorites">Favorites</Nav.Link>
//                         <Link style={linkStyle} to="/">
//                             Home
//                         </Link>
//                         <Link style={linkStyle} to="/details/:id">
//                             Details
//                         </Link>
//                         <Link style={linkStyle} to="/favorites">
//                             Favorites
//                         </Link>
//                     </Nav>
//                 </Navbar.Collapse>
//             </Container>
//         </Navbar>
//     )
// }

// export default Header

import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

function Header() {


    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="/">Bite Me GOOD</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav as={Link} to="/" style={{ color: 'white', textDecoration: 'none' }}>Home</Nav>&nbsp;&nbsp;&nbsp;
                        <Nav as={Link} to="/favorites" style={{ color: 'white', textDecoration: 'none' }} >Favorites</Nav>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;