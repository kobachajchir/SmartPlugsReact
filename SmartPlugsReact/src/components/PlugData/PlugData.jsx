import React, { useContext, useEffect } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { PlugsContext } from "../../App";
import image from "./../../assets/images/testImage.jpg";
import "./PlugData.css";
import { BiCheckbox } from "react-icons/bi";

export default function PlugData() {
  const { plugId } = useParams();
  const plug = useContext(PlugsContext);
  let plugData = plug.getPlug(plugId);
  let modo =
    plugData.mode === "manual"
      ? "Manual"
      : plugData.mode === "timer"
      ? "Temporizador"
      : "Programado";
  const mode = React.createRef();
  const toggleManualState = () => {
    if (plugData.state === "on") {
      console.log("Apagando");
      plug.modifyPlug(plugId, { state: "off" });
      plugData = plug.getPlug(plugId);
    } else {
      console.log("Encendiendo");
      plug.modifyPlug(plugId, { state: "on" });
      plugData = plug.getPlug(plugId);
    }
  };
  useEffect(() => {}, []);
  return (
    <Container>
      <Row>
        <Col md={6} xs={12}>
          <img src={image} alt="" />
        </Col>
        <Col md={6} xs={12} className="plugTitle">
          <h1>Plug {plugId}</h1>
        </Col>
      </Row>
      <Row className="justify-content-center d-flex">
        <Col xs={12} className="d-flex justify-content-center">
          <p className="plugState leftColumn">Estado del enchufe:</p>
          {plugData.state === "on" ? (
            <p className="plugState rightColumn fw-bold">Encendido</p>
          ) : (
            <p className="plugState rightColumn fw-bold">Apagado</p>
          )}
        </Col>
      </Row>
      <Row className="justify-content-center d-flex">
        <Col xs={12} className="d-flex justify-content-center">
          <p className="plugState leftColumn">Modo de funcionamiento actual:</p>
          <p className="plugState rightColumn fw-bold">{modo}</p>
        </Col>
      </Row>
      <Row className="justify-content-center d-flex">
        <Col xs={12} className="d-flex justify-content-center">
          <select name="mode" id="mode" defaultValue={plugData.mode} ref={mode}>
            <option value="manual">Manual</option>
            <option value="timer">Temporizador</option>
            <option value="program">Programado</option>
          </select>
        </Col>
      </Row>
      <Row>
        <Col xs={12} className="d-flex justify-content-center">
          {modo === "Manual" ? (
            <>
              <Row>
                <Col>
                  <button className="manualTurnOn" onClick={toggleManualState}>
                    <img src={image} />
                  </button>
                </Col>
              </Row>
            </>
          ) : modo === "Temporizador" ? (
            <p className="plugState fw-bold">Encender/Apagar</p>
          ) : (
            <p className="plugState fw-bold">Encender/Apagar</p>
          )}
        </Col>
      </Row>
    </Container>
  );
}
