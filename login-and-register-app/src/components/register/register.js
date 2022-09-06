import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { useNavigate } from "react-router-dom";

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
  } ;
`;

const Button = styled.button`
  width: 390px;
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
  } ;
`;

const Register = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    reEnterPassword: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };
  const register = () => {
    const { name, email, password, reEnterPassword } = user;
    if (name && email && password && password === reEnterPassword) {
      //   alert("posted");
      axios.post("http://localhost:9002/register", user).then((res) => {
        alert(res.data.message);
        // console.log(res.data.message);
      });
    } else {
      alert("Invalid Input");
    }
  };

  return (
    <Container>
      {console.log("user", user)}
      <h1>Register</h1>
      <Input
        type="text"
        name="name"
        value={user.name}
        placeholder="Your Name"
        onChange={handleChange}
      />
      <Input
        type="text"
        name="email"
        value={user.email}
        placeholder="Your Email"
        onChange={handleChange}
      />
      <Input
        type="password"
        name="password"
        value={user.password}
        placeholder="Enter your Password"
        onChange={handleChange}
      />
      <Input
        type="password"
        name="reEnterPassword"
        value={user.reEnterPassword}
        placeholder="Re-enter your Password"
        onChange={handleChange}
      />
      <Button onClick={register}>Register</Button>
      <div>or</div>
      <Button onClick={() => navigate("/login")}>Login</Button>
    </Container>
  );
};

export default Register;
