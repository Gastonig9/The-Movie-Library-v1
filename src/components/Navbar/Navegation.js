import React from "react";
import { Navbar, Container, Nav } from 'react-bootstrap';



export default function Navegation() {
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">
                        <img
                            alt=""
                            src="https://i.ibb.co/9r138SL/pngtree-film-logo-design-template-vector-isolated-illustration-png-image-1693431.jpg"
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                        />{' '}
                        The Movie Library
                    </Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href='/categories/Action'>Action</Nav.Link>
                        <Nav.Link href='/categories/Adventure'>Adventure</Nav.Link>
                        <Nav.Link href='/categories/Drama'>Drama</Nav.Link>
                        <Nav.Link href='/categories/Thriller'>Thiller</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    )
}