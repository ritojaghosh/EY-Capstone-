import React, {useEffect} from 'react'
import './Admin.css'


const Admin = () => {
  
const form = document.querySelector(".my-form");
const category = form.getElementsByClassName("select")[0];
const breedOrProductName = form.getElementsByClassName("breed-or-productName-input")[0];
const aboutMe = form.getElementsByClassName("about-me-input")[0];
const price = form.getElementsByClassName("price")[0];
const image = form.getElementsByClassName("image")[0];
const nameOfAnimalInput = form.getElementsByClassName("name-input")[0];
const nameOfAnimal = form.getElementsByClassName("name")[0];
const descInput = form.getElementsByClassName("description-input")[0];
const desc = form.getElementsByClassName("description")[0];

nameOfAnimalInput.style.display="none";
descInput.style.display="none";
breedOrProductName.style.display = "none";

const button = document.querySelector(".submit");

class NewElement{
    constructor(category, breedOrProductName, aboutMe, price, image, quantity, nameOfAnimal, desc){
        this.category = category;
        this.breedOrProductName = breedOrProductName;
        this.aboutMe = aboutMe;
        this.price = price;
        this.image = image;
        this.quantity = quantity;
        this.nameOfAnimal = nameOfAnimal;
        this.desc = desc;
        
    }
}

// class NewProduct{
//     constructor(category, nameOfProduct, price, image, desc, quantity){
//         this.category = category;
//         this.nameOfProduct = nameOfProduct;
//         this.price = price;
//         this.image = image;
//         this.desc = desc;
//         this.quantity = quantity;
//     }
// }


button.addEventListener("click", (e) => {
    e.preventDefault()

    const identifier = category.value.replace(" ", "").toLowerCase();

    const newItem = identifier === "products" 
    ? 
    new NewElement(category.value, breedOrProductName.value, aboutMe.value, price.value, image.value, 1) 
    : 
    new NewElement(category.value, breedOrProductName.value, aboutMe.value, price.value, image.value, 1, nameOfAnimalInput.value, descInput.value);


    console.log(identifier, `http://localhost:3005/${identifier}`)


    fetch(`http://localhost:3005/${identifier}`, {
        method: "POST",
        body: JSON.stringify(newItem),
        headers: {
            'Content-Type': 'application/json'
        },
    }).then(res => res.json())
    .then(text => console.log(text))
    .catch(err => console.log(err));
    
})  

// const [arr,setArr]= React.useState([]); 

// useEffect(()=>{console.log("hello");
// fetch("http://localhost:3005/dogs")
// .then(res => res.json())
// .then(text => {console.log(text)
//   setArr(text)})
// },[])  

fetch("http://localhost:3005/dogs")
.then(res => res.json())
.then(text => {
    console.log(text)
    const dogsArr = text;

    dogsArr.forEach(dog => {
        const dogs = document.getElementById("dogs");

        const rowOne = dogs.getElementsByClassName("rowOne")[0];
        const rowTwo = dogs.getElementsByClassName("rowTwo")[0];

        const col = document.createElement("div");
        col.setAttribute("class", "col");

        console.log(dog.id)

        const colInfo = `
            <img src="${dog.image}">
            <div class="info">
                <h3>Hi I'm ${dog.nameOfAnimal}, a ${dog.breedOrProductName}</h3>
                <h4>I will cost you around $${dog.price}</h4>
                <p>I'm ${dog.aboutMe} old.</p>
            </div>
        `;

        col.innerHTML = colInfo;

        if(rowOne.children.length < 3){
            rowOne.appendChild(col);
        }else{
            rowTwo.appendChild(col);
        }

        
        
        
    })
    
});

// fetch("http://localhost:3001/cats")
// .then(res => res.json())
// .then(text => {
//     const catsArr = text;
//     catsArr.forEach(cat => {
//         const cats = document.getElementById("cats");

//         const rowOne = cats.getElementsByClassName("rowOne")[0];
//         const rowTwo = cats.getElementsByClassName("rowTwo")[0];

//         const col = document.createElement("div");
//         col.setAttribute("class", "col");

//         const colInfo = `
//             <img src="${cat.image}">
//             <div class="info">
//                 <h3>${cat.breed} - $${cat.price}</h3>
//                 <p>I'm ${cat.age} old.</p>
//                 <span>${cat.desc}</span>
//             </div>
//         `;

//         col.innerHTML = colInfo;

//         if(rowOne.children.length < 3){
//             rowOne.appendChild(col);
//         }else{
//             rowTwo.appendChild(col);
//         }

//     })
// });

fetch("http://localhost:3005/products")
.then(res => res.json())
.then(text => {
    const productsArr = text;
    productsArr.forEach(product => {
        const products = document.getElementById("products");

        const rowOne = products.getElementsByClassName("rowOne")[0];
        const rowTwo = products.getElementsByClassName("rowTwo")[0];

        const col = document.createElement("div");
        col.setAttribute("class", "col-products");

        const colInfo = `
            <img src="${product.image}">
            <div class="info">
                <h3>${product.breedOrProductName} - $${product.price}</h3>
                <p>About Me: ${product.aboutMe}.</p>
            </div>
        `;

        col.innerHTML = colInfo;

        if(rowOne.children.length < 3){
            rowOne.appendChild(col);
        }else{
            rowTwo.appendChild(col);
        }
    })
});

document.querySelector(".add").addEventListener("click", () => {
  document.querySelector(".overlay").classList.add("active");
  document.querySelector(".form").classList.add("active");
})

document.querySelector(".close").addEventListener("click", () => {
  document.querySelector(".overlay").classList.remove("active");
  document.querySelector(".form").classList.remove("active");
})

document.querySelector(".overlay").addEventListener("click", () => {
  document.querySelector(".overlay").classList.remove("active");
  document.querySelector(".form").classList.remove("active");
});

document.querySelector(".select").addEventListener("change", () => {
  if(category.value.replace(" ", "").toLowerCase() === "products"){  
      document.querySelector(".breed-or-productName").innerText = "Enter your Product Name:";
      breedOrProductName.style.display = "block";

      nameOfAnimalInput.style.display = "none";
      descInput.style.display = "none";

      nameOfAnimal.innerText = '';
      desc.innerText = '';


  }
  else{
      document.querySelector(".breed-or-productName").innerText = "Enter the breed:";
      breedOrProductName.style.display = "block";

      nameOfAnimalInput.style.display = "block";
      nameOfAnimal.innerText = `Enter the name of the ${category.value.replace(" ", "").toLowerCase()}`;

      descInput.style.display = "block";
      desc.innerText = `Enter something about the ${category.value.replace(" ", "").toLowerCase()}`;
  }
})

let height = window.innerHeight;
let width = window.innerWidth;

// document.querySelector(".viewport").style.height = height;
// document.querySelector(".viewport").style.width = width;



const dogs = document.getElementById("dogs");

dogs.addEventListener("click", (e) => {

  let idNeeded ;

  // console.log(e.target)

  if(e.target.classList.contains("cart-button")){

      // console.log(e.target.classList)
      
      e.target.classList.forEach((oneClass) => {

          if(oneClass !== "cart-button"){
              console.log(oneClass)
              idNeeded = oneClass.split("-")[2];
          }

          fetch(`http://localhost:3002/dogs/?id=${idNeeded}`)
          .then(res => res.json())
          .then(text => {
              if(text[0]){
                  console.log(text[0])
              }
          })

      })
  }
})


  return (
    <div>
      <div class="admin-main">
      <div class="container">
            <div class="form">
                <span class="close">&times;</span>
                <form class="my-form">
                    <span>
                        Category:
                    </span>
                    <select class="select">
                        <option selected>Select Any</option>
                        <option>Dogs</option>
                        <option>Cats</option>
                        <option>Small Animals</option>
                        <option>Products</option>
                    </select>
                    <span class="breed-or-productName">
                        
                    </span>
                    <input class="breed-or-productName-input" type="text"/>
                    <span class="name">
                        
                    </span>
                    <input class="name-input" type="text"/>
                    About Me:
                    <input class="about-me-input" type="text"/>
                    <span>
                        Price
                    </span>
                    <input class="price" type="number" step="0.01"/>
                    Image URL:
                    <input class="image" type="text"/>
                    <span class="description">
                        
                    </span>
                    <input class="description-input" type="text"/>
                    <button class="submit" type="submit">Submit</button>
                </form>
            </div>
        <div class="admin-logo">
            <h1><span class="paw"><i class="fa-solid paw fa-paw"></i></span>mazon</h1>
            <div class="admin-header-ring"></div>
        </div>
        <div class="admin-title">
            <h1>Welcome <span class="name">Admin</span></h1>
        </div>
        <div class="admin-nav">
            <ul>
                <li class="hoverable"><a href="#dogs">Dogs</a></li>
                <li class="hoverable"><a href="#cats">Cats</a></li>
                <li class="hoverable"><a href="#products">Products</a></li>
                <li class="hoverable"><a href="#">Small Animals</a></li>
                <li class="add"><i class="fa-solid fa-plus"></i></li>
            </ul>
        </div>

        <div class="overlay"></div>

        <div id="dogs">
            <h1>Dogs</h1>
            <div class="rowOne">
               {/* {arr.map((ele) => <AdminCard info={ele} />)} */}
            </div>
            <div class="rowTwo"></div>
        </div>

        <div id="cats">
            <h1>Cats</h1>
            <div class="rowOne"></div>
            <div class="rowTwo"></div>
        </div>

        <div id="products">
            <h1>Products</h1>
            <div class="rowOne"></div>
            <div class="rowTwo"></div>
        </div> 
    </div>  
    </div>       

    </div>
  )
}

export default Admin;