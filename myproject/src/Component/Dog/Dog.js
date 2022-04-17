import React, {useEffect} from 'react'
import DogCard from './DogCard';
import './Dog.css'

const Dog = () => {
  
  const [arr,setArr]= React.useState([]); 

  useEffect(()=>{console.log("hello");
   fetch("http://localhost:3005/dogs")
   .then(response=>response.json())
   .then(data=>{console.log(data)
     setArr(data)})
   },[])  

// fetch("http://localhost:3002/data")
// .then(response => (response.json()))
// .then(data=>
//    console.log(data)
// )
let arr1;
let arr2;

if(arr.length>3){
   arr2=arr.slice().splice(-3);
}else{
   arr1=arr.slice().splice(0,3);
}
  
  
  console.log(arr1)
  console.log(arr2)
  return (
    <div>
      <div class="dog-main-div">
      <div class="overlay"></div>
    <div class="category">
        <h1>Dogs</h1>
        <div class="container" >
          {arr.length>3 ? (
               <div class="row2">
               {arr2.map((ele) => <DogCard info={ele} />)}
           </div>
          ):(
            <div class="row1">
            {arr1.map((ele) => <DogCard info={ele} />)}
        </div>
          )} 
            
           
            {/* <div class="modal">
                <span class="close">&times;</span>
                
            </div> */}
        </div>
    </div>
    </div>
    </div>
  )
}

export default Dog