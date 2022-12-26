import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Home from "./components/HomeComponent/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavbarComponent from "./components/NavbarComponent/Navbar";
import { Container } from "react-bootstrap";
import "./../node_modules/bootstrap/dist/css/bootstrap.min.css";
import PlugData from "./components/PlugData/PlugData";
import Settings from "./components/SettingsComponent/Settings";
import UserSettings from "./components/UserSettingComponent/UserSettings";

function App() {
  return (
    <BrowserRouter>
      <Container fluid>
        <NavbarComponent />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/plugData" element={<PlugData />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/userSettings" element={<UserSettings />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;
