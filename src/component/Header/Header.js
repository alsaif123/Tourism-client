import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import UseAuth from "../../hooks/useAuth";
import "./Header.css";
import { useHistory, useLocation } from "react-router";
import Button from "@restart/ui/esm/Button";

const Header = () => {
  const { user, logout } = UseAuth();
  const history = useHistory();
  const location = useLocation();
  const { from } = location.state || { from: { pathname: "/" } };
  return (
    <>
      <Navbar bg="dark" variant="dark" className="navbar">
        <Container>
          <Link className="nav-brand" to="/home">
            Tourist
          </Link>

          <Nav className="ml-auto">
            <div className="header">
              <Link to="/home">Home</Link>
              <Link to="/features">services</Link>
              <Link to="/pricing">Deals</Link>
              <Link to="/admin">Admin</Link>
              <Link to="/about">About</Link>
              
              {!user.email && <Link to="/login"><Button variant="outline-primary" className="mx-3 nav-signin-button">Sign In</Button>   </Link>}
            </div>
          </Nav>
          <Nav className="ml-auto">
            <div className="userAvatar">
              {user.email ? (
                <>
                  <img
                    src={user.photoURL}
                    alt={user.displayName}
                    title={user.displayName}
                  />
                  <span className="mx-2 text-danger">{user.displayName} </span>
                </>
              ) : (
                ""
              )}
              {user?.email && (
                <button onClick={logout} className="mx-3 btn btn-danger">
                  Log out
                </button>
              )}
            </div>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
