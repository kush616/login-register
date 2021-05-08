import React from 'react'
import {Redirect, RouteComponentProps} from 'react-router-dom' 

import {Link} from 'react-router-dom';




import Button from '@material-ui/core/Button'




interface p{
    auth:boolean;
}
export default function Home(props:RouteComponentProps<{}, any, p | any>) {

   
console.log(props)



if(!(props.location.state.auth || typeof(props.location.state)=== 'undefined') )
{
  
    return <Redirect to="/login"></Redirect>
}



    return (
        <div className="hello-box">
           <h1> Hello {props.location.state.Email}</h1>
           <Link to={{pathname:"/login"}} style={{textDecoration:'none'}} >
        <Button type="submit" variant="contained" color="primary" className="register-button" style={{width:"80%"}}>
  LogOut
</Button>
</Link>
        </div>
    )
}
