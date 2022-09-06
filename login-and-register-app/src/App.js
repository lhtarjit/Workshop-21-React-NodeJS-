import "./App.css";
import styled from "styled-components";
import Homepage from "./components/homepage/homepage";
import Login from "./components/login/login";
import Register from "./components/register/register";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useState } from "react";

const Wrap = styled.div`
  text-align: center;
  display: flex;
  width: 100vw;
  height: 100vh;
  justify-content: center;
  align-items: center;
  background: #f0f2f5;
  font-family: Arial, Helvetica, sans-serif;
  @media (max-width: 900px) {
    width: 100%;
  }
`;

function App() {
  const [user, setLoginUser] = useState({});
  return (
    <Wrap>
      <div className="App">
        <Router>
          <Routes>
            <Route
              exact
              path="/"
              element={
                user && user._id ? (
                  <Homepage />
                ) : (
                  <Login setLoginUser={setLoginUser} />
                )
              }
            />
            <Route path="/register" element={<Register />} />
            <Route
              path="/login"
              element={<Login setLoginUser={setLoginUser} />}
            />
          </Routes>
        </Router>
        {/* <Homepage></Homepage>
        <Login></Login>
        <Register></Register> */}
      </div>
    </Wrap>
  );
}

export default App;
