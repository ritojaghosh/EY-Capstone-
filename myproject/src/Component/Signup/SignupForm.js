import React from 'react'
import './SignupForm.css'

const SignupForm = (props) => {

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
         <form id="signupform-form1" onSubmit={handleSubmitForm}>
          <h1 id="signupform-signup">Sign Up</h1>
          <h4 id="signupform-welcome">Looking for a pet to adopt on Pawmazon?</h4>
          <input type="text" name="fname" id="signupform-field1" class="fname" placeholder="Enter your first name" onChange={handleUserInput}/>
          <input type="text" name="lname" id="signupform-field1" class="lname" placeholder="Enter your last name" onChange={handleUserInput}/> 
          <input type="email" name="email" id="signupform-field1" placeholder="Enter your Email or Phone Number" onChange={handleUserInput}/>
          <input type="password" name="pass" id="signupform-field1" placeholder="Enter your Password" onChange={handleUserInput}/> 
          <button id="signupform-login-button" >Sign Up Now!</button>
        </form>  
    </div>
  )
}

export default SignupForm