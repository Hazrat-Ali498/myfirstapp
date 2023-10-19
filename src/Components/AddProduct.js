import React, { useState } from 'react';


const AddProduct=() =>{

    const [product, setProduct]=useState({
        BrandName:"",
        Price:"",
        Size:"",
        Specification:"",
    });

  
        const handleChange = (e) => {
      const updatedProduct = { ...product };
      updatedProduct[e.target.name] = e.target.value;
      setProduct(updatedProduct);
    };
    
      
    
      const handleSubmit = (e) => {
        e.preventDefault();
        // Here, you can send the 'product' state to your Node.js backend for storing in MongoDB 
      };


    return(
        <div>
        <h2>Add Product</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Brand Name:</label>
            <input
              type="text"
              name="brandName"
              value={product.brandName}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Price:</label>
            <input
              type="number"
              name="price"
              value={product.price}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Size:</label>
            <input
              type="text"
              name="size"
              value={product.size}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Specification:</label>
            <textarea
              name="specification"
              value={product.specification}
              onChange={handleChange}
            />
          </div>
          <button type="submit">Add Product</button>
        </form>
      </div>
    )
}
export default AddProduct;