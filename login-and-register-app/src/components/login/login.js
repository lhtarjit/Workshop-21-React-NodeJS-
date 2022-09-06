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
  }
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
  }
`;

const Login = ({ setLoginUser }) => {
  const navigate = useNavigate();
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
  const login = () => {
    axios.post("http://localhost:9002/login", user).then((res) => {
      alert(res.data.message);
      setLoginUser(res.data.user);
      navigate("/");
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
      <Button onClick={login}>Login</Button>
      <div>or</div>
      <Button onClick={() => navigate("/register")}> Register</Button>
    </Container>
  );
};
export default Login;
