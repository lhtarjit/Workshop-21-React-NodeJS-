import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 400px;
  background: #fff;
  border: 1px solid #dddfe2;
  box-shadow: 0 2px 4px rgb(0 0 0 / 10%), 0 8px 16px rgb(0 0 0 / 10%);
  border-radius: 8px;
  padding: 1rem;
  align-items: center;
  text-align: center;
  @media (max-width: 900px) {
    width: 100%;
  } ;
`;

const Input = styled.input`
  border-radius: 8px;
  border: 2px solid #dddfe2;
  outline: none;
  color: #1d2129;
  margin: 0.5rem 0;
  padding: 0.5rem 0.75rem;
  width: 90%;
  font-size: 1rem;
  @media (max-width: 900px) {
    width: 100%;
  }
`;

const Button = styled.button`
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

const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };
  return (
    <Container>
      {console.log(user)}
      <h1>Login</h1>
      <Input
        type="text"
        name="email"
        value={user.email}
        placeholder="Enter your Email"
        onChange={handleChange}
      />
      <Input
        type="password"
        name="password"
        value={user.password}
        placeholder="Enter your Password"
        onChange={handleChange}
      />
      <Button>Login</Button>
      <div>or</div>
      <Button> Register</Button>
    </Container>
  );
};
export default Login;
