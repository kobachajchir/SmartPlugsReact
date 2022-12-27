import "./Home.css";
import { Container, Row, Col, Card, ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import { BsCalendarWeek, BsToggle2Off, BsToggle2On } from "react-icons/bs";
import { RxTimer } from "react-icons/rx";
import React, { useContext } from "react";
import { useEffect } from "react";
import { PlugsContext } from "../../App";
import image from "./../../assets/images/testImage.jpg";

export default function Home() {
  const contextVal = useContext(PlugsContext);
  return (
    <Container>
      <Row>
        <Col>
          <h3 className="sectionTitle">Estado de los enchufes</h3>
        </Col>
      </Row>
      <Row className="cardsContainer">
        {contextVal.getPlugs().map((plug, index) => (
          <Col
            key={"card" + plug.id}
            xs={12}
            md={3}
            className="justify-content-center d-flex"
          >
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={image} />
              <Card.Body>
                <Card.Title>{plug.name}</Card.Title>
                {plug.mode === "manual" ? (
                  <Card.Text>
                    {plug.state == "on" ? (
                      <BsToggle2Off size={25} />
                    ) : (
                      <BsToggle2On size={25} />
                    )}
                  </Card.Text>
                ) : plug.mode == "timer" ? (
                  <>
                    <Card.Text className="modeTitle">
                      <RxTimer size={25} />
                    </Card.Text>
                    <Card.Text className="modeData">
                      Apagar en: {plug.timerTime}
                    </Card.Text>
                  </>
                ) : (
                  <>
                    <Card.Text>
                      <BsCalendarWeek size={25} />
                    </Card.Text>
                    <Card.Text className="modeData">
                      Encendido: {plug.programOn}
                    </Card.Text>
                    <Card.Text className="modeData">
                      Apagado: {plug.programOff}
                    </Card.Text>
                    <Card.Text className="modeData">
                      Dias: {plug.programDays}
                    </Card.Text>
                  </>
                )}
              </Card.Body>
              <Card.Body className="linkDiv">
                <Card.Link as={Link} to={"./plugData/" + plug.id} href="#">
                  Configurar enchufe
                </Card.Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}
