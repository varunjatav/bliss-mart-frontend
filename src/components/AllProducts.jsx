import React from 'react'
import Filteration from './Filteration'
import ProductList from './ProductList'

const AllProducts = () => {
  return (
     <div className="flex flex-row w-[90%] m-auto pt-24">
        <Filteration />
        <ProductList />
      </div> 
  )
}

export default AllProducts