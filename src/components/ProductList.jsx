import React from 'react'
import Product from './Product'

const ProductList = () => {
  
  return (
    <div className='flex-3  grid grid-cols-4 w-[80%] m-auto justify-center'>
       <Product/>
       <Product/>
       <Product/>
       <Product/>
       <Product/>
       <Product/>
    </div>
  )
}

export default ProductList