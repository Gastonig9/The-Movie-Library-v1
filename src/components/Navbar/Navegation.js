import React from "react";
import "./Navegation.css"
import MovieWidget from "../MovieWidget/MovieWidget";
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { useContext } from "react";
import { cartContext } from "../../context/cartContext";



export default function Navegation() {
    const { cart } = useContext(cartContext);
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
                        <span className="titleWeb">The Movie Library</span>
                    </Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Item>
                            <Link className="nav-link text-light" to="/">Home</Link>
                        </Nav.Item>

                        <Nav.Item>
                            <Link className="nav-link text-light" to='/categories/Action'>Action</Link>
                        </Nav.Item>

                        <Nav.Item>
                            <Link className="nav-link text-light" to='/categories/Adventure'>Adventure</Link>
                        </Nav.Item>

                        <Nav.Item>
                            <Link className="nav-link text-light" to='/categories/Drama'>Drama</Link>
                        </Nav.Item>

                        <Nav.Item>
                            <Link className="nav-link text-light" to='/categories/Thriller'>Thriller</Link>
                        </Nav.Item>

                        <Link className="text-decoration-none" to="/widget">
                            <MovieWidget imageURL="https://cdn-icons-png.flaticon.com/512/107/107831.png" inCart={cart.length} />
                        </Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    )
}