import React from 'react'
import { Link } from 'react-router-dom'

const Success = () => {
  return (
    <section className='py-24 text-center'>
        <h1 className='text-center font-semibold text-xl text-green-500 pb-4'>Payment Successfull </h1>
        <Link to="/product-list" className='bg-yellow-500 p-2 text-white font-semibold rounded-md'>Go back to home</Link>
    </section>
  )
}

export default Success