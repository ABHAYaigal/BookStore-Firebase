import React from 'react'
import { PRODUCTS } from '../products'
import "./shop.css"

//import Product from './Product'

export default function Shop() {
  
   
  
    return (
    <div className='shop'>
        <div className='shopTitle'>
            <h1 className="display-2"><strong>BOOK STORE</strong></h1>
        </div>
        <div className='products'>
        {PRODUCTS.map((product,index) => (
                    <div className="product" key={index}>
                    <img src={product.productImage}/>
                    <div className='description'>
                        <p>
                            <b>{product.productName}</b>
                        </p>
                        <p>
                            ${product.price} 
                        </p>
                    </div>
                </div>
                
                
                
                
                ))}
      
        </div>
      
    </div>
  )
}
