import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import "./Header.css";
import logo from "../../../images/logo.png";
import { Link, NavLink } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

const Header = () => {
  const { user, handleLogout } = useAuth();
  return (
    <>
      <Navbar bg="light" sticky="top" expand="lg" className="p-0">
        <Container>
          <Navbar.Brand as={Link} to="/">
            <img className="logo" src={logo} alt="" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto d-flex align-items-center">
              <Nav.Link
                as={NavLink}
                activeClassName="nav-selected"
                className="nav-link"
                to="/home"
              >
                Home
              </Nav.Link>
              <Nav.Link
                as={NavLink}
                activeClassName="nav-selected"
                className="nav-link"
                to="/dontaion"
              >
                Donation
              </Nav.Link>
              <Nav.Link
                as={NavLink}
                activeClassName="nav-selected"
                className="nav-link"
                to="/events"
              >
                Events
              </Nav.Link>
              <Nav.Link
                as={NavLink}
                activeClassName="nav-selected"
                className="nav-link"
                to="/blog"
              >
                Blog
              </Nav.Link>
              {user?.email ? (
                <Nav.Link as={Link} className="nav-link" to="/login">
                  <Button
                    onClick={handleLogout}
                    className="outline-btn px-4"
                    variant=""
                  >
                    Log Out
                  </Button>
                </Nav.Link>
              ) : (
                <Nav.Link as={Link} className="nav-link" to="/login">
                  <Button className="outline-btn px-4" variant="">
                    Register
                  </Button>
                </Nav.Link>
              )}
              <Nav.Link as={Link} className="nav-link" to="/admin">
                <Button className="px-4" variant="dark">
                  Admin
                </Button>
              </Nav.Link>
              {user?.photoURL && (
                <img className="profile-img" src={user?.photoURL} alt="" />
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
