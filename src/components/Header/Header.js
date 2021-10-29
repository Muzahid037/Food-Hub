import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Header.css';

const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top">
                <Container>
                    <Navbar.Brand as={Link} to="/home#home">FoodHub</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Link as={Link} to="/home#home">Home</Nav.Link>

                        {user.email &&
                            <Nav.Link as={Link} to="/addservice#addservice"> Add New Service</Nav.Link>
                        }
                        {user.email &&
                            <Nav.Link as={Link} to="/myOrders#myOrders"> My Orders</Nav.Link>
                        }
                        {user.email &&
                            <Nav.Link as={Link} to="/manageOrders#manageOrders"> Manage All Orders</Nav.Link>
                        }
                        <Nav.Link as={Link} to="/login#login">Login</Nav.Link>
                        {/* <Nav.Link as={Link} to="/register#register">Register</Nav.Link> */}
                        {user.email &&
                            <Navbar.Text>
                                Signed in as: <a href="/login#login">{user.displayName}</a>
                            </Navbar.Text>
                        }
                        {user.email &&
                            <button onClick={logOut} className="ms-2 btn-danger rounded">Logout</button>
                        }

                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>

    );
};

export default Header;