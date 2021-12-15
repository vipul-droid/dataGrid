import React from 'react'
import FormInput from './FormInput'
import FormButton from './FormButtom'
import { BrowserRouter as Link } from "react-router-dom";
import './Login.css'

function Main() {
    return (
        <div>
            <FormInput description="Username" placeholder="Enter your username" type="text" />
            <FormInput description="Password" placeholder="Enter your password" type="password"/>
            <FormButton title="Log in">  </FormButton>
         </div>
    )
}

function Login() {
    return (
        <div className="login">
          <div id="loginform">
            <h2 id="headerTitle">Login</h2>
            <Main/>
          </div>
         </div>
    )
}

export default Login
