import React, { useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {
    FaFacebookF,
    FaInstagram,
    FaTwitter,
    FaPinterest,
} from 'react-icons/fa';
import './App.css';
import { Navbar, Nav, Row, Col } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import { AuthContext } from '../features/Auth/AuthContext';
import Logo from '../images/logo2.png';

export default function Navbarnav() {
    const { isAuthenticated, user } = useContext(AuthContext);

    function handleLogout(e) {
        e.preventDefault();

        firebase
            .auth()
            .signOut()
            .catch(function (error) {
                console.warn(error);
            });
    }

    return (
        <>
            <Navbar
                className="sticky-top"
                collapseOnSelect
                expand="lg"
                bg="white"
                variant="light"
            >
                <Link to="/">
                    <img src={Logo} className="logo mx-auto d-block" alt="" />
                </Link>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="font-navbar mr-auto">
                        <NavLink className="nav-link" exact to="/">
                            Home
                        </NavLink>
                        <NavLink className="nav-link" exact to="/despre">
                            Despre
                        </NavLink>
                        <NavLink className="nav-link" exact to="/contact">
                            Contact
                        </NavLink>
                    </Nav>
                    <Nav>
                        <Row>
                            <Col md="auto">
                                <Nav.Link href="https://www.facebook.com/">
                                    <FaFacebookF />
                                </Nav.Link>
                            </Col>
                            <Col md="auto">
                                <Nav.Link href="https://www.instagram.com/">
                                    <FaInstagram />
                                </Nav.Link>
                            </Col>
                            <Col md="auto">
                                <Nav.Link href="https://twitter.com/">
                                    <FaTwitter />
                                </Nav.Link>
                            </Col>
                            <Col md="auto">
                                <Nav.Link href="https://ro.pinterest.com/">
                                    <FaPinterest />
                                </Nav.Link>
                            </Col>
                            <Col xs={10} lg={5}></Col>
                        </Row>
                    </Nav>
                    <Nav>
                        {isAuthenticated ? (
                            <>
                                <Nav.Item className="font">
                                    <Navbar.Text>
                                        Bine ai venit {user.email}!
                                    </Navbar.Text>
                                </Nav.Item>
                                <br></br>
                                <Nav.Item className="font">
                                    <Navbar.Text
                                        href="/"
                                        onClick={handleLogout}
                                    >
                                        {' '}
                                        Iesire
                                    </Navbar.Text>
                                </Nav.Item>
                            </>
                        ) : (
                            <>
                                <Nav.Item className="font">
                                    <NavLink
                                        className="nav-link"
                                        exact
                                        to="/login"
                                    >
                                        Autentificare
                                    </NavLink>
                                </Nav.Item>
                                <Nav.Item className="font">
                                    <NavLink
                                        className="nav-link"
                                        exact
                                        to="/register"
                                    >
                                        Inregistreaza-te
                                    </NavLink>
                                </Nav.Item>
                            </>
                        )}
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    );
}
