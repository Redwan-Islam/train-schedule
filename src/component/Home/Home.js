import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import {
  Col,
  Container,
  Nav,
  Navbar,
  NavDropdown,
  Row,
  Button,
  Carousel,
} from "react-bootstrap";
import train from "../../image/train.jpg";
import train1 from "../../image/train1.jpg";

const Home = () => {
  return (
    <div>
      <Container>
        <Navbar bg="light" expand="lg">
          <Navbar.Brand href="/home">Train Schedule</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav.Item>
              <Nav.Link href="/Home" className="navDesign">
                Home
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/News" className="navDesign">
                News
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link className="navDesign">
                <Link to="/Contus" id="contact">
                  FeedBack
                </Link>
              </Nav.Link>
            </Nav.Item>

            <NavDropdown
              title="Buy Ticket"
              id="nav-dropdown"
              className="mr-auto"
            >
              <NavDropdown.Item className="navDesign">
                <Link to="/Ticpur" id="dtn">
                  {" "}
                  Dhaka To Narayanganj
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item className="navDesign">
                <Link to="/Ntdticket" id="dtn">
                  Narayanganj To Dhaka
                </Link>
              </NavDropdown.Item>
            </NavDropdown>
            <Button variant="dark" id="navButton">
              <Link to="/Aboutus" id="abt">
                About Us
              </Link>
            </Button>
          </Navbar.Collapse>
        </Navbar>

        <Carousel>
          <Carousel.Item>
            <img className="d-block w-100" src={train1} alt="First slide" />
            <Carousel.Caption>
              <h3>Train 212 </h3>
              <p>Used For Dhaka To Narayanganj Route</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={train} alt="Second slide" />

            <Carousel.Caption>
              <h3>Train D-Demo </h3>
              <p>
                Used For Dhaka To Narayanganj and Narayanganj To Dhaka Route
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={train1} alt="Third slide" />
            <Carousel.Caption>
              <h3>Train 214</h3>
              <p>Used For Narayanganj To Dhaka Route.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>

        <br />
        <Row>
          <Col md={12}>
            <div>
              <Link to="/Dtn">
                <button className="button-1">Dhaka to Narayanganj</button>
              </Link>
            </div>
            <br />
            <div>
              <Link to="/Ntd">
                <button className="button-2">Narayanganj to Dhaka</button>
              </Link>
            </div>
            <div id="Footer">
              <p>&#169; All The Credit Goes To The Developer Team </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
