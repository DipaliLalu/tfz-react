import React from 'react'
import demo from '../image/demo.jpg'

const Card = ({ person }) => {
  return (
    <div>
      <div className="card w-25 mx-auto mt-4">
        <img src={demo} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{person.name}</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <button className="">{person.btnText}</button>
        </div>
      </div>
    </div>
  )
}

export default Card;
