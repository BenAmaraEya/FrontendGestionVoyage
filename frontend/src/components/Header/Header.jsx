import React, { useRef, useEffect } from "react";
import { Container, Row, Col, Button } from 'reactstrap';
import { NavLink, Link } from 'react-router-dom';
import logo from '../../assets/images/logo.png';
import './Header.css';

const Header = () => {
  const headerRef = useRef(null);

  return (
    <header className="header" ref={headerRef}>
      <Container>
        <Row className="align-items-center justify-content-between">
          <Col xs="4">
            <div className="logo">
              <img src={logo} alt="Logo" width="100%" />
            </div>
          </Col>
          <Col xs="4">
            <ul className="menu">
              <li className="nav__item">
                <NavLink to="/home">Home</NavLink>
              </li>
              <li className="nav__item">
                <NavLink to="/about">About</NavLink>
              </li>
              <li className="nav__item">
                <NavLink to="/tours">Tours</NavLink>
              </li>
            </ul>
          </Col>
          <Col xs="4">
            <div className="nav__btns">
              <Button className="btn secondary__btn">
                <Link to="/Login">Login</Link>
              </Button>
              <Button className="btn primary__btn">
                <Link to="/Register">Register</Link>
              </Button>
              <span className="mobile__menu">
                <i className="ri-menu-line"></i>
              </span>
            </div>
          </Col>
        </Row>
      </Container>
    </header>
  );
};

export default Header;
