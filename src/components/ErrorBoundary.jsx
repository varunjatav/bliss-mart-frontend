import React from 'react'
import { useSelector } from 'react-redux'

const ErrorBoundary = () => {
  const CartState = useSelector(state => state.cart);

  return (
    <div  className='text-center'>
      {
        CartState.error ? <h1>{CartState.error}</h1> : <h1>Error in page</h1>
      }
        
    </div>
  )
}

export default ErrorBoundary