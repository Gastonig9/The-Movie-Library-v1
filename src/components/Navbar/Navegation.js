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
                        The Movie Library
                    </Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link className="text-dark">
                            <Link className="text-decoration-none titleMovieLink" to="/">Home</Link>
                        </Nav.Link>

                        <Nav.Link>
                            <Link className="text-decoration-none titleMovieLink" to='/categories/Action'>Action</Link>
                        </Nav.Link>

                        <Nav.Link>
                            <Link className="text-decoration-none titleMovieLink" to='/categories/Adventure'>Adventure</Link>
                        </Nav.Link>
                        
                        <Nav.Link>
                            <Link className="text-decoration-none titleMovieLink" to='/categories/Drama'>Drama</Link>
                        </Nav.Link>

                        <Nav.Link>
                            <Link className="text-decoration-none titleMovieLink" to='/categories/Thriller'>Thriller</Link>
                        </Nav.Link>
                        <Link className="text-decoration-none" to="/widget">
                        <MovieWidget imageURL= "https://cdn-icons-png.flaticon.com/512/107/107831.png" inCart={cart.length} />
                        </Link>
                        
                    </Nav>
                </Container>
            </Navbar>
        </>
    )
}