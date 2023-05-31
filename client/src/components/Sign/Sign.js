import React, {useState} from 'react'
import * as SignUpAnima from "./SignUpAnima";
import {Formik, Form, Field, ErrorMessage } from "formik";
import axios from "axios";
import './Sign.css';

function Sign() {
  const [signIn, toggle] = React.useState(true);

  const [emailReg, setEmailReg] = useState('');
  const [passwordReg, setPasswordReg] = useState('');
  const [nameReg, setNameReg] = useState('');
  
  const onSubmit = () => {

    axios.post("http://localhost:3001/signin", {
      username: nameReg,
      password: passwordReg,
      email: emailReg,
    }).then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    })
 };
  return (
    <div /* class="z-5" */>
    <SignUpAnima.Container>
      <SignUpAnima.SignUpContainer signingIn={signIn}>
        <SignUpAnima.Form>
          <SignUpAnima.Title>Create Account</SignUpAnima.Title>
          <SignUpAnima.Input type="text" onChange={(e) => {
            setNameReg(e.target.value);
          }} placeholder="Name" />
          <SignUpAnima.Input type="email" onChange={(e) => {
            setEmailReg(e.target.value);
          }} placeholder="Email" />
          <SignUpAnima.Input type="password" onChange={(e) => {
            setPasswordReg(e.target.value);
          }}placeholder="Password" />
          <SignUpAnima.Button onClick={onSubmit}>Sign Up</SignUpAnima.Button>
        </SignUpAnima.Form>
      </SignUpAnima.SignUpContainer>
      <SignUpAnima.SignInContainer signingIn={signIn}>
        <SignUpAnima.Form>
          <SignUpAnima.Title>Sign in</SignUpAnima.Title>
          <SignUpAnima.Input type="email" placeholder="Email" />
          <SignUpAnima.Input type="password" placeholder="Password" />
          <SignUpAnima.Anchor href="#">Forgot your password?</SignUpAnima.Anchor>
          <SignUpAnima.Button>Sign In</SignUpAnima.Button>
        </SignUpAnima.Form>
      </SignUpAnima.SignInContainer>
      <SignUpAnima.OverlayContainer signingIn={signIn}>
        <SignUpAnima.Overlay signingIn={signIn}>
          <SignUpAnima.LeftOverlayPanel signingIn={signIn}>
            <SignUpAnima.Title>Hello, Friend!</SignUpAnima.Title>
            <SignUpAnima.Paragraph>
              Enter your personal details and start journey with us
            </SignUpAnima.Paragraph>
            <SignUpAnima.GhostButton onClick={() => toggle(true)}>
              Sign In
            </SignUpAnima.GhostButton>
          </SignUpAnima.LeftOverlayPanel>
          <SignUpAnima.RightOverlayPanel signingIn={signIn}>
            <SignUpAnima.Title>Welcome Back!</SignUpAnima.Title>
            <SignUpAnima.Paragraph>
              To keep connected with us please login with your personal info
            </SignUpAnima.Paragraph>
            <SignUpAnima.GhostButton onClick={() => toggle(false)}>
              Sign Up
            </SignUpAnima.GhostButton>
          </SignUpAnima.RightOverlayPanel>
        </SignUpAnima.Overlay>
      </SignUpAnima.OverlayContainer>
    </SignUpAnima.Container>
    </div>
  );
}

export default Sign;