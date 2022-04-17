import React from 'react'

const AdminCard = (props) => {
  console.log(props)
  return (
    <div>
      <div class="col">
      <img src={props.info.image}/>
             <div class="info">
                 <h3>Hi I'm ${props.info.nameOfAnimal}, a ${props.info.breedOrProductName}</h3>
                 <h4>I will cost you around $${props.info.price}</h4>
                 <p>I'm ${props.info.aboutMe} old.</p>
             </div>
      </div>
    </div>
  )
}

export default AdminCard