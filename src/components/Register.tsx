import React from 'react'
import { useState } from 'react';
import {Link} from 'react-router-dom';

import Button from '@material-ui/core/Button'
import EmailIcon from '@material-ui/icons/Email';
import LockIcon from '@material-ui/icons/Lock';
import Input from '@material-ui/core/Input'
import TextField from '@material-ui/core/TextField'
import * as EmailValidator from 'email-validator';



import "./styles/Register.css"


import AppInput from "./common/Input"


export default function Test() {
// states to assign email password and confirm password
const [email,setEmail]= useState("")
const [pass,setPass]=useState("")
const [con_pass,setCon_pass]=useState('')

//check if email is valid with validator
const valid_email=()=>{
  
  return EmailValidator.validate(email)
}
// check if the confirm pass matches with password .. the case is that the password must be valid first
const pass_match=()=>{
   return (pass===con_pass? true: false)

}

// validates the password
var passwordValidator = require('password-validator');
var schema = new passwordValidator();
schema
.is().min(8)                                    // Minimum length 8
.has().lowercase()                       //has alphabet
.has().digits(1)                                // Must have at least 1 digits


const valid_pass=()=>{
  return schema.validate(pass)
}
 

const handleRegister=()=>{
  //if pass is valid , email is valid and confirm pass matches with pass then it registers
  
  
  if (valid_pass() && valid_email() && pass_match() && email !== "" && pass !=="")
  {
    localStorage.setItem('database',JSON.stringify({Email:email,Pass:pass}))
    alert("Successful")
setEmail('')
setPass('')

  }
  else{
    alert("Unsucessful")
  }




}




  return (
    <form onSubmit={handleRegister}>
    <div className="login-box">
     

      <div className="login-title">
        
      REGISTER
      
      </div>
      <div  className="border"/>
      
<div className="input-section">


  

  <AppInput   Value={email} onchange={setEmail} type="" Icon_name={<EmailIcon  style={{color:"white",fontSize:20}} />} Placeholder="Enter Email"/>
 
  

    <AppInput   Value={pass} onchange={setPass} Icon_name={<LockIcon  style={{color:"white",fontSize:20}} />} type="password" Placeholder="Enter Password"/>
    <AppInput   Value={con_pass} onchange={setCon_pass} Icon_name={<LockIcon  style={{color:"white",fontSize:20}} />} type="password" Placeholder="Confirm Password"/>


        </div>
        {(!pass_match())  && (!(con_pass==="")) && <text className="error">Password must match</text>}
        {(!valid_email())  && (!(email==="")) && <text className="error">Email is invalid</text>}
        {(!valid_pass())  && (!(pass==="")) && <text className="error">Password must contain 8 chars, digit,alphabet</text>}
        <Button type="submit" variant="contained" color="primary" className="register-button" style={{width:"80%"}}>
  Register
</Button>

<div className="foot"><p className="Reg">Already Registered...</p><Link to={{pathname:'/login'}}>
       <p> <u>Log In</u></p>
      </Link></div>
    </div>
    
    </form>
  )
}
