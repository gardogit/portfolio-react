import React from 'react'

function Details( {item} ) {
  return (
    <>
      <img src={item.image} alt={item.name} /><h3 className="name">{item.name}</h3>
      <p className="description">{item.description}</p>
      <p className="category">{item.category}</p>
      <p className="year">{item.year}</p>
      <p className="price">{item.price}</p>
    </>
  )
}

export default Details