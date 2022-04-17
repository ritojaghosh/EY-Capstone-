import React, {useEffect} from 'react'
import CatCard from './CatCard';
import './Cat.css'

const Cat = () => {

  const [arr,setArr]= React.useState([]); 

  useEffect(()=>{console.log("hello");
   fetch("http://localhost:3005/data")
   .then(response=>response.json())
   .then(data=>{console.log(data)
     setArr(data)})
   },[])  


  const arr1=arr.slice().splice(0,3);
  const arr2=arr.slice().splice(-3);
  console.log(arr1)
  console.log(arr2)

  return (
    <div>
      <div class="overlay"></div>
    <div class="category">
        <h1>Cats</h1>
        <div class="container" >
            <div class="row1">
                {arr1.map((ele) => <CatCard info={ele} />)}
            </div>
            <div class="row2">
                {arr2.map((ele) => <CatCard info={ele} />)}
            </div>
            <div class="modal">
                <span class="close">&times;</span>
                
            </div>
        </div>
    </div>
    </div>
  )
}

export default Cat;