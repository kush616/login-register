import React from 'react'
import { useState } from 'react';
import {Link} from 'react-router-dom';




import Button from '@material-ui/core/Button'
import EmailIcon from '@material-ui/icons/Email';
import LockIcon from '@material-ui/icons/Lock';
import Input from '@material-ui/core/Input'
import TextField from '@material-ui/core/TextField'
import * as EmailValidator from 'email-validator';

import Home from "../components/Home"


import "./styles/Register.css"


import AppInput from "./common/Input"


export default function Test() {
  //for login ,, email and pass

const [email,setEmail]= useState("")
const [pass,setPass]=useState("")



// to check if the user is valid user not by comparing the inputted data and stored data
const validUser=()=>{
  var input
input=JSON.stringify({Email:email,Pass:pass})

  const user=localStorage.getItem('database')


return (user===input)









}




  return (
   
    <div className="login-box">
     

      <div className="login-title">
        
      LOG IN
      
      </div>
      <div  className="border"/>
      
<div className="input-section">


  {/*  input email and pass ui*/}

  <AppInput   Value={email} onchange={setEmail} type="" Icon_name={<EmailIcon  style={{color:"white",fontSize:20}} />} Placeholder="Enter Email"/>
 
  

    <AppInput   Value={pass} onchange={setPass} Icon_name={<LockIcon  style={{color:"white",fontSize:20}} />} type="password" Placeholder="Enter Password"/>
   


        </div>
         {/*  link to home .. if user valid takes to home if not user is brought back to login*/}
      <Link to={{pathname:"/home",state:{auth:validUser(),Email:email}}} style={{textDecoration:'none'}} >
        <Button type="submit" variant="contained" color="primary" className="register-button" style={{width:"80%"}}>
  Login
</Button>
</Link>

<div className="foot"><p className="Nreg">Not Registered...</p><Link to={{pathname:'/register'}}>
       <p> <u>Register</u></p>
      </Link></div>
    </div>
    
    
  )
}
