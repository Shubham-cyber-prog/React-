import React from 'react'

const Card = (props) => {
  console.log(props.user)

  return (
    <div className="card">
      <img src={props.img} alt="Profile" />
      <h1>{props.user}, {props.age}</h1>
      <p>{props.description}</p>
      <button>View Profile</button>
    </div>
  )
}   

export default Card