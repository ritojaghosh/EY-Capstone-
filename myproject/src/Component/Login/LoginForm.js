import React from 'react'
import './LoginForm.css'

const LoginForm = (props) => {

  const [obj,setObj] = React.useState({})

  const handleSubmitForm=(event)=>{
     event.preventDefault();
     props.addIntoArray(obj);
    //  setArr([...arr,obj])
  }

  const handleUserInput=(event)=>{
      console.log(event.target.name, event.target.value)
      setObj({...obj,[event.target.name]:event.target.value})
  }

  return (
    <div>
      <form id="loginform-form1" onSubmit={handleSubmitForm}>
          <h1 id="loginform-login">Login</h1>
          <h4 id="loginform-welcome">Welcome, we missed you!</h4>
          <input type="email" name="email" id="loginform-field1" placeholder="Enter Your Email or Phone Number" onChange={handleUserInput}/>
          <input type="password" name="pass" id="loginform-field1" placeholder="Enter your Password" onChange={handleUserInput}/> 
          <button id="loginform-login-button">Login</button> 
          <a href="#" id="loginform-a-tag"><h4 id="loginform-forgot-pass">Forgot Your Password?</h4></a> 
        </form>
    </div>
  )
}

export default LoginForm;