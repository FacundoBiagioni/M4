'use client'
import React from 'react'

const Button = () => {
  return (
    <div>
      <button className="bg-lime-500" onClick={() => console.log("me clickearon")}>Soy el boton</button>
    </div>
  )
}

export default Button
