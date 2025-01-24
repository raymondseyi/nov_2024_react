import React from 'react'
import { useParams } from 'react-router-dom'

const ProductPage = () => {
    let {productname} = useParams();
    
  return (
    <div>ProductPage
        <h1>{productname}</h1>
    </div>
  )
}

export default ProductPage