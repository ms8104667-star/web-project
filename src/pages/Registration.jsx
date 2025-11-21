import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  background: #fff;
  font-family: "Inter", sans-serif;
`;

const FormWrapper = styled.div`
  background: #fff;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
  width: 380px;
	scale: 1.2;
`;

const Title = styled.h2`
  text-align: center;
  margin-bottom: 1.5rem;
  color: #333;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.9rem;
  margin-bottom: 1rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 1rem;
  transition: border-color 0.3s ease;

  &:focus {
    outline: none;
    border-color: #43cea2;
  }
`;

const Button = styled.button`
  width: 100%;
  padding: 0.9rem;
  background: #43cea2;
  color: #fff;
  font-size: 1rem;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background: #36b08d;
  }
`;

const FooterText = styled.p`
  text-align: center;
  margin-top: 1rem;
  font-size: 0.9rem;
  color: #666;

  a {
    color: #43cea2;
    text-decoration: none;
    font-weight: 500;
  }
`;

function Registration() {
  return (
    <Container>
      <FormWrapper>
        <Title>Create Account</Title>
        <Input type="text" placeholder="Full Name" />
        <Input type="email" placeholder="Email" />
        <Input type="password" placeholder="Password" />
        <Input type="password" placeholder="Confirm Password" />
        <Button>Register</Button>
        <FooterText>
          Already have an account? <Link to='/login'>Login</Link>
        </FooterText>
      </FormWrapper>
    </Container>
  );
}

export default Registration;