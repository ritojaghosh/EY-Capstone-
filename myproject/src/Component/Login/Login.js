import React, {useEffect} from 'react'
import LoginForm from './LoginForm'
import './Login.css'

const Login = ({getLoggedInUser}) => {

  const [arr,setArr]= React.useState([]); 

  // useEffect(()=>{console.log("hello");
  //  fetch("http://localhost:3005/users")
  //  .then(response=>response.json())
  //  .then(data=>{setArr(data)})
  //  },[]) 

  const handleInsertIntoArray = (obj) =>{

    fetch("http://localhost:3005/users")
     .then(response=>response.json())
     .then(data=>{
       console.log(data)
       data.find((element)=>{
          if(element.email===obj.email && element.pass===obj.pass){
            console.log(element)
            const obj1 = {...element, isLoggedIn:true}
            console.log(obj1)
          }
       })
     })
     

  //  fetch("http://localhost:3005/users",{
  //    method:"POST",
  //    body:JSON.stringify(obj),
  //    headers:{
  //      "content-type":"application/json; charset=UTF-8"
  //    }
  //  })
  //  .then(response=>response.json())
  //  .then(data=>{console.log(data);
  //      setArr([...arr,obj])
  //    })
  console.log(obj)

};

const [obj,setObj] = React.useState({})

  const updateJsonServer = (object) => {
    console.log(object);
    
    fetch(`http://localhost:3002/users/${object.id}`,{
     method:"PUT",
     body:JSON.stringify(object),
     headers:{
       "content-type":"application/json; charset=UTF-8"
     }
   })
   .then(response=>response.json())
   .then(data=>{
     console.log(data)
     })
  }
 

  const findLoggedInUser = (e) =>{
    e.preventDefault();
    console.log("Findloggedin called")

    let updatedObject;

   fetch("http://localhost:3002/users")
   .then(response=>response.json())
   .then(data=>{
     let count = 0;
     data.find((element) => {
      if(element.email === obj.email && element.pass === obj.pass){
        count++;
        if(!element.isLoggedIn){
          updatedObject = {...element, isLoggedIn: true};
          console.log(updatedObject);
          updateJsonServer(updatedObject);
          getLoggedInUser(updatedObject);
        }else{
          getLoggedInUser(element);
        }
        
      }else if(element.email === obj.email && element.pass !== obj.pass){
        count++;
        alert("You have entered an incorrect password!!! Please try again");
      }
     })

     if(count===0){
      alert("No account found with the credentials provided")
    }


   })

  }

  const handleUserInput=(event)=>{
    setObj({...obj,[event.target.name]:event.target.value})
  }

  return (
    <div>
     
      <div class="login-bg-image">
      <div class="login-container">
       <div class="login-left">
          <h2>Not on Pawmzon yet?</h2>
          <a class="login-anchor" href="#"><button>Sign Up</button></a> 
       </div>
       <div class="login-right">
         {/* <LoginForm addIntoArray={handleInsertIntoArray}/> */}
         <form id="loginform-form1" onSubmit={findLoggedInUser}>
          <h1 id="loginform-login">Login</h1>
          <h4 id="loginform-welcome">Welcome, we missed you!</h4>
          <input type="email" name="email" id="loginform-field1" placeholder="Enter Your Email or Phone Number" onChange={handleUserInput}/>
          <input type="password" name="pass" id="loginform-field1" placeholder="Enter your Password" onChange={handleUserInput}/> 
          <button id="loginform-login-button">Login</button> 
          <a href="#" id="loginform-a-tag"><h4 id="loginform-forgot-pass">Forgot Your Password?</h4></a> 
        </form>
       </div>
      </div>
    </div>   
    </div>
   
  )
}

export default Login;