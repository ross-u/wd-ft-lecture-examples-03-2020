import React from 'react'

function Card(props) {


  console.log('props in card :>> ', props);
  
  return (
    <li>
      <h1>Title: {props.title}</h1>
      <h4>Rating: {props.rating}</h4>
      <p>Director: {props.director} </p>

      <button onClick={() => props.removeMovie(props._id)} className="btn-delete"> Delete </button>
    </li>
  )
}

export default Card
