import React, {useState, useEffect, userInfo} from 'react'
import './LandingPage.css'
import Header from '../Header/Header'
import Hero from '../Hero Banner/Hero'
import Category from '../Category/Category'
import News from '../News/News'
import Footer from '../Footer/Footer'
import Product from '../Products/Product'



const LandingPage = () => {

  const [currUser, setCurrUser] = useState({});

  const [products, setProducts] = useState([]);


  useEffect(() => {
    async function fetchData(){
      let products =  await fetch("http://localhost:3005/products");
      products = await products.json();
      await setProducts(products);
    }
    
    fetchData();
    
    
    fetch("http://localhost:3003/loggedInUser")
    .then(res => res.json())
    .then(data => data.find(ele => {
      if(ele.email === userInfo.email && ele.pass === userInfo.pass){
        // console.log(ele);
        setCurrUser({...ele})
      }}));

  }, [])

  return (
    <div className='landing-page-container'>
      <div class="landingPage-body">
      <Header/>
      <Hero/>
      <Category/>
      <Product info={products} currentUser={userInfo}/>
      <News/>
      <Footer/>
      </div>
    </div>
  )
}

export default LandingPage;