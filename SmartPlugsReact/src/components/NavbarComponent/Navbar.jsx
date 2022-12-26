import "./Navbar.css";
import {
  Button,
  Container,
  Nav,
  NavDropdown,
  Navbar,
  Overlay,
} from "react-bootstrap";
import { BsPlugFill } from "react-icons/bs";
import {
  RiSettings3Fill,
  RiUser3Fill,
  RiUserSettingsFill,
  RiUserShared2Fill,
} from "react-icons/ri";
import { BiArrowBack } from "react-icons/bi";
import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import React, { useState, useRef } from "react";

const IconSize = 25;

export default function NavbarComponent() {
  const [show, setShow] = useState(false);
  const target = useRef(null);
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand as={Link} to={"/"}>
          React-Bootstrap
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Link to={"/plugData"} className="nav-link align-items-center">
              <BsPlugFill size={IconSize} />
            </Link>
            <Link to={"/settings"} className="nav-link align-items-center">
              <RiSettings3Fill size={IconSize} />
            </Link>
          </Nav>
          <Nav>
            <div className="nav-link  align-items-center">
              <Button
                className="iconMenuNav nav-link userMenuItem"
                style={{ transition: "unset" }}
                ref={target}
                onClick={() => setShow(!show)}
              >
                {!show ? (
                  <FaUser size={IconSize} color="rgba(255, 255, 255, 0.55)" />
                ) : (
                  <BiArrowBack
                    size={IconSize}
                    color="rgba(255, 255, 255, 0.55)"
                  />
                )}
              </Button>
              {show && (
                <>
                  <Link
                    to={"/settings"}
                    className="nav-link align-items-center userMenuItem"
                  >
                    <RiUserSettingsFill
                      size={IconSize}
                      className="userMenuItem"
                      color="rgba(255, 255, 255, 0.55)"
                      height="56px"
                    />
                  </Link>
                  <Link
                    to={"/settings"}
                    className="nav-link align-items-center userMenuItem"
                  >
                    <RiUserShared2Fill
                      size={IconSize}
                      className="userMenuItem"
                      color="rgba(255, 255, 255, 0.55)"
                    />
                  </Link>
                </>
              )}
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
