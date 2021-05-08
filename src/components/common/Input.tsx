import React from 'react'
import Input from '@material-ui/core/Input'



import "../styles/Register.css"




interface Props{
    Value:string;
    Icon_name:object;
    Placeholder:string;
    onchange:Function;
    type:string;
}

export default function AppInput({Value, Icon_name, Placeholder,onchange,type}:Props) {
    return (
        <div className="log-block">
        <div className="logo">
       {Icon_name}
        </div>
        <Input className="login-email" type={type} placeholder={Placeholder} value={Value} onChange={(e)=>onchange(e.target.value)} />
  </div>
    )
}
