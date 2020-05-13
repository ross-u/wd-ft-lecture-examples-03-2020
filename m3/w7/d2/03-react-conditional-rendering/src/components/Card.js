import React from 'react'

function Card(props) {


  console.log('props in card :>> ', props);
  
  return (
    <li>
      <h1>Title: {props.title}</h1>
      <h4>Rating: {props.rating}</h4>
      <p>Director: {props.director} </p>

      {/* Use the ternary operator to check the value if it is truthy or falsy display some content */}
      {
          props.hasOscars 
            ? <p>Got the Oscar Award</p> 
            : <p>Great movie but no Oscars! 😔</p>
      }


      {/*  Short circuit evaluation - THIS IS BONUS */}
      {/*       
      { props.hasOscars &&  <p>Got the Oscar Award</p> 
      { props.hasOscar  && <p>Great movie but no Oscars! 😔</p> } 
      */}

      <button onClick={() => props.removeMovie(props._id)} className="btn-delete"> Delete </button>
    </li>
  )
}

export default Card
