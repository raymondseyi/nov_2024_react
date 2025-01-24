import React from 'react'
import { useState } from "react";
const ProductComponent = () => {
    const [productName, setproductName] = useState("");
  const [productPrice, setproductPrice] = useState("");
  const [productBrand, setproductBrand] = useState("");
  const [productCategory, setproductCategory] = useState("");
  const [productImage, setproductImage] = useState("")
  const [allProducts, setallProducts] = useState([]);
  const [editedIndex, seteditedIndex] = useState(0)

  const addProducts = () => {
    let products = { productName, productPrice, productBrand, productCategory,productImage };
    setallProducts([...allProducts, products]);
  };

  const deleteProduct = (index)=>{
    let newAllProducts = [...allProducts]
    newAllProducts.splice(index,1)
    setallProducts(newAllProducts)
  }

  const editProduct = (index)=>{
    seteditedIndex(index);
  }
  return (
    <div>
      {/* <h1>{gender==="male" ? "This is a man" : "The gender that gave apple to Adam"}</h1> */}
      <h1>Add Product Page</h1>
      <input
        type="text"
        placeholder="Product Name"
        onChange={(e) => setproductName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Product Price"
        onChange={(e) => setproductPrice(e.target.value)}
      />
      <input
        type="text"
        placeholder="Product Brand"
        onChange={(e) => setproductBrand(e.target.value)}
      />
      <input
        type="text"
        placeholder="Product Category"
        onChange={(e) => setproductCategory(e.target.value)}
      />
      <input
        type="text"
        placeholder="Product Image"
        onChange={(e) => setproductImage(e.target.value)}
      />
      <button onClick={addProducts}>Add Products</button>
      <hr />
      <h1>List of products</h1>

      {/* tenary operators */}

      {allProducts.length === 0 ? (
        <div>No products yet!</div>
      ) : (
        allProducts.map((product, index) => (
          <div key={index}>
            <h1>{index}</h1>
            <h1>{product.productName}</h1>
            <h1>{product.productPrice}</h1>
            <h1>{product.productBrand}</h1>
            <h1>{product.productCategory}</h1>
            <img src={product.productImage} alt="" />
            <button onClick={()=>deleteProduct(index)}>Delete Product</button>
            <button onClick={()=>editProduct(index)}>Edit Product</button>
          </div>
        ))
      )}
    </div>
  )
}

export default ProductComponent