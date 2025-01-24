import React from 'react'

// destructuring
const Button = ({title,color,test}) => {

  return (
    <>
        <Fish/>
        <button onClick={test} className={color}>{title}</button>
    </>
  )
}

export default Button