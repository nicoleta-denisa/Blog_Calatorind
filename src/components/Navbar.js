import React, { useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {
    FaFacebookF,
    FaInstagram,
    FaTwitter,
    FaPinterest,
} from 'react-icons/fa';
import './App.css';
import { Navbar, Nav } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import { AuthContext } from '../features/Auth/AuthContext';

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
        <div>
            <Navbar collapseOnSelect expand="lg" bg="white" variant="light">
                <Link className="font navbar-brand" exact to="/home">
                    Calatorind
                </Link>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="font mr-auto">
                        <NavLink className="nav-link" exact to="/home">
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
                        <Nav.Link href="https://www.facebook.com/">
                            <FaFacebookF />
                        </Nav.Link>
                        <Nav.Link href="https://www.instagram.com/?hl=ro">
                            <FaInstagram />
                        </Nav.Link>
                        <Nav.Link href="https://www.facebook.com/s">
                            <FaTwitter />
                        </Nav.Link>
                        <Nav.Link href="https://ro.pinterest.com/">
                            <FaPinterest />
                        </Nav.Link>

                        {isAuthenticated ? (
                            <>
                                <Nav.Item>
                                    <Navbar.Text>
                                        Welcome {user.email}!
                                    </Navbar.Text>
                                </Nav.Item>
                                <Nav.Item>
                                    <Navbar.Text
                                        href="/"
                                        onClick={handleLogout}
                                    >
                                        {' '}
                                        Logout
                                    </Navbar.Text>
                                </Nav.Item>
                            </>
                        ) : (
                            <>
                                <Nav.Item>
                                    <NavLink
                                        className="nav-link"
                                        exact
                                        to="/login"
                                    >
                                        Login
                                    </NavLink>
                                </Nav.Item>
                                <Nav.Item>
                                    <NavLink
                                        className="nav-link"
                                        exact
                                        to="/register"
                                    >
                                        Register
                                    </NavLink>
                                </Nav.Item>
                            </>
                        )}
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
}
