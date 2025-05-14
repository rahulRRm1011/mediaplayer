import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <Navbar className="bg-dark sticky-top w-100" style={{ zIndex: "5" }}>
        <Container>
          <Navbar.Brand style={{ color: " #74C0FC" }}>
            <Link to={"/"} style={{ textDecoration: "none" }}>
              <i className="fa-solid fa-music"></i> Media Player
            </Link>
          </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
