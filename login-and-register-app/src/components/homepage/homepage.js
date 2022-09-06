import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 50vw;
  height: 50vh;
  border-radius: 20px;
  box-shadow: 0 0 15px 5px grey;
  background: white;
  position: relative;
  @media (max-width: 900px) {
    width: 100%;
  }
`;
const Button = styled.div`
  background: #1877f2;
  border: 1px solid #1877f2;
  color: #fff;
  font-size: 1.25rem;
  padding: 0.5rem;
  margin: 0.5rem 0;
  border-radius: 8px;
  outline: none;
  cursor: pointer;
  @media (max-width: 900px) {
    width: 100%;
  }
`;

const Homepage = ({ setLoginUser }) => {
  return (
    <Container>
      <h1>Hello Homepage </h1>
      <Button onClick={() => setLoginUser({})}>Logout</Button>
    </Container>
  );
};

export default Homepage;
