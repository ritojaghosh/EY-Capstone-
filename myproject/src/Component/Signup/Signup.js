import React from 'react'
import { useNavigate } from 'react-router-dom'
import  SignupForm from './SignupForm'
import './Signup.css'

const Signup = () => {
 
  const navigate= useNavigate();
  


const handleInsertIntoArray = (obj) =>{

  let timeStampedObject = {...obj, createdAt: new Date().toISOString(), cartItems:[]}

  if(timeStampedObject.role === "admin"){
    fetch("http://localhost:3004/admins")
    .then(res => res.json())
    .then(data => {
      let count = 0;
      data.find(ele => {
      if(ele.email === timeStampedObject.email){
        count++
        alert("Email Id has already been taken")
      }else if(ele.fname === timeStampedObject.fname){
        count++
        alert("First Name has already been taken")
      }
    })
    if(count === 0){
      fetch("http://localhost:3004/admins",{
      method:"POST",
      body:JSON.stringify(timeStampedObject),
      headers:{
        "content-type":"application/json; charset=UTF-8"
      }
    })
    .then(response=>response.json())
    .then(data=>{
      console.log(data);
      navigate("/admin/login")
      })
    }
  })
    
  }else{
    fetch("http://localhost:3002/users")
    .then(res => res.json())
    .then(data => {
      let count = 0;
      data.find(ele => {
      if(ele.email === timeStampedObject.email){
        count++
        alert("Email Id has already been taken")
      }else if(ele.fname === timeStampedObject.fname){
        count++
        alert("First Name has already been taken")
      }
    })
    if(count === 0){
      fetch("http://localhost:3002/users",{
      method:"POST",
      body:JSON.stringify(timeStampedObject),
      headers:{
        "content-type":"application/json; charset=UTF-8"
      }
    })
    .then(response=>response.json())
    .then(data=>{
      console.log(data);
      navigate("/user/login")
      })
    }
  })
  }
}

  return (
    <div>
       <div class="signup-bg-image">
          <div class="signup-container">
              <div class="signup-right">
                  <SignupForm addIntoArray={handleInsertIntoArray} />
              </div>
              <div class="signup-left">
                <h2>Already have an account?</h2>
              <a class="signup-login" href='#'><button>Login</button></a>
              </div>
          </div>
        </div> 
    </div>
  )
}

export default Signup;