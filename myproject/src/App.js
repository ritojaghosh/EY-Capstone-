import React, {useState, useEffect} from 'react';
import { Routes, Route, useNavigate, Navigate} from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle'
// import Login from "./Component/Login/Login"
import LandingPage from './Component/Landing Page/LandingPage';
import Product from './Component/Products/Product';
import Dog from './Component/Dog/Dog'
import Cat from './Component/Cat/Cat'
import Neutral from './Component/Neutral/Neutral'
import Login from './Component/Login/Login';
import Signup from './Component/Signup/Signup';
// import Signup from './Component/Signup/Signup'
import Cart from './Component/Cart/Cart'


function App() {

  const [currUser, setCurrUser] = useState({});
    // const [cartItems, setCartItems] = useState([]);
    const navigate = useNavigate();

    console.log("CurrentUser:", currUser);

    useEffect(() => {
  
      if(Object.keys(currUser).length > 0 && currUser.isLoggedIn){
        console.log("I was called", currUser)
        navigate("/dashboard")
      }else if(Object.keys(currUser).length > 0 && !currUser.isLoggedIn){
        navigate("/user/login")
      }
    }, [JSON.stringify(currUser)])

    const getCurrUser = (userInfo) => {
      console.log(userInfo);
      
      let count = 0;

      fetch("http://localhost:3003/loggedInUser")
      .then(res => res.json())
      .then(info => {
        console.log("Get current user")
        info.find(ele => {
        if(ele.email === userInfo.email && ele.pass === userInfo.pass && ele.isLoggedIn){
          count++;
          setCurrUser({...ele});
          alert("You are already logged in! You can move to the dashboard");
        }
      })
      
      if(count === 0){
          fetch("http://localhost:3003/loggedInUser",{
            method:"POST",
            body:JSON.stringify(userInfo),
            headers:{
              "content-type":"application/json; charset=UTF-8"
            }
          })
          .then(response=>response.json())
          .then(data=>{
            setCurrUser({...data});
            console.log(currUser);
            // navigate("/dasboard")
          })
         
      }
    })
    }

    const logOutUser = (userInfo) => {
      const updatedObject = {...userInfo, isLoggedIn:false};
    fetch(`http://localhost:3002/users/${userInfo.id}`,{
     method:"PUT",
     body:JSON.stringify(updatedObject),
     headers:{
       "content-type":"application/json; charset=UTF-8"
     }
   })
   .then(response=>response.json())
   .then(data=>{
     console.log(data)
     });


     fetch(`http://localhost:3003/loggedInUser/${userInfo.id}`,{
     method:"DELETE",
     headers:{
       "content-type":"application/json; charset=UTF-8"
     }
   })
   .then(response=>response.json())
   .then(data =>{
     console.log(data);
     setCurrUser(data);
     console.log(currUser);
     navigate("/user/login");
     });
    }
 
  return (
    <>
      
    {/* <div className="App"> */}

         
        {/* </div> */}
        <Routes>

      <Route path="/" element={<Neutral/>} />

      

      <Route path="/dashboard" element={
          currUser.isLoggedIn ? 
          <LandingPage userInfo={currUser} logoutFunc={logOutUser}/> : 
          <Navigate to="/user/login" /> } />

      <Route path="/dogs" element={
          currUser.isLoggedIn ? 
          <Dog userInfo={currUser} /> : 
          <Navigate to="/user/login" /> } />

      <Route path="/cats" element={
          currUser.isLoggedIn ? 
          <Cat userInfo={currUser} /> : 
          <Navigate to="/user/login" /> } />    

      
      
      <Route path="/user/login" element={<Login getLoggedInUser={getCurrUser}/>} />
      
      
      <Route path="/cart" element={<Cart info={currUser}/>} />

      
      <Route path="/signup" element={<Signup />} />

      
    </Routes>
    {/* <LandingPage/> */}
    {/* <Neutral/> */}
    {/* <Login/> */}
    {/* <Signup/> */}
    {/* <Dog/> */}

        
    </>
  );
}

export default App;
