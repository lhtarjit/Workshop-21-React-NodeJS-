import "./App.css";
import styled from "styled-components";
import Homepage from "./components/homepage/homepage";
import Login from "./components/login/login";
import Register from "./components/register/register";

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
  return (
    <Wrap>
      <div className="App">
        <Homepage />
        {/* <Login /> */}
        {/* <Register /> */}
      </div>
    </Wrap>
  );
}

export default App;
