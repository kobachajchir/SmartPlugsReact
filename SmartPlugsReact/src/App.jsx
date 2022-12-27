import Home from "./components/HomeComponent/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavbarComponent from "./components/NavbarComponent/Navbar";
import { Container } from "react-bootstrap";
import "./../node_modules/bootstrap/dist/css/bootstrap.min.css";
import PlugData from "./components/PlugData/PlugData";
import Settings from "./components/SettingsComponent/Settings";
import UserSettings from "./components/UserSettingComponent/UserSettings";
import PlugsProvider from "./providers/PlugsProvider";
import React, { useState, createContext, StrictMode } from "react";
import "./App.css";
import { useEffect } from "react";

const plugs = [
  {
    id: 1,
    name: "Enchufe 1",
    state: "on",
    mode: "timer",
    settedDate: "00/00/0000",
    settedTime: "00:00",
    timerTime: "00:00",
    programOn: "00:00",
    programOff: "00:00",
    programDays: "Lunes, Martes, Miercoles, Jueves, Viernes, Sabado, Domingo",
    programState: "on",
  },
  {
    id: 2,
    name: "Enchufe 2",
    state: "on",
    mode: "manual",
    settedDate: "00/00/0000",
    settedTime: "00:00",
    timerTime: "00:00",
    programOn: "00:00",
    programOff: "00:00",

    programDays: "Lunes, Martes, Miercoles, Jueves, Viernes, Sabado, Domingo",
    programState: "on",
  },
  {
    id: 3,
    name: "Enchufe 3",
    state: "on",
    mode: "program",
    settedDate: "00/00/0000",
    settedTime: "00:00",
    timerTime: "00:00",
    programOn: "00:00",
    programOff: "00:00",
    programDays: "Lunes, Martes, Miercoles, Jueves, Viernes, Sabado, Domingo",
    programState: "on",
  },
  {
    id: 4,
    name: "Enchufe 4",
    state: "off",
    mode: "manual",
    settedDate: "00/00/0000",
    settedTime: "00:00",
    timerTime: "00:00",
    programOn: "00:00",
    programOff: "00:00",
    programDays: "Lunes, Martes, Miercoles, Jueves, Viernes, Sabado, Domingo",
    programState: "on",
  },
];

export const PlugsContext = createContext(plugs);

function App() {
  const [plugsState, setPlugs] = useState(plugs);
  return (
    <PlugsProvider initialState={plugsState}>
      <BrowserRouter>
        <Container fluid>
          <NavbarComponent />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/plugData/:plugId" element={<PlugData />} />
            <Route exact path="/settings" element={<Settings />} />
            <Route exact path="/userSettings" element={<UserSettings />} />
          </Routes>
        </Container>
      </BrowserRouter>
    </PlugsProvider>
  );
}

export default App;
