import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { singleProduct } from '../store/productSlice';

const ProductDetails = () => {
    const {productId} = useParams();

    const dispatch = useDispatch();

    const productState = useSelector(state => state.products);

    console.log(productState.singleProduct);
    
    useEffect(() => {
        dispatch(singleProduct(productId));
    },[productId])
    
  return (
    <section className='pt-24 flex flex-cols-3 h-[100vh] px-5'>
        <div className='flex flex-1 flex-col gap-2'>
            <img src="https://m.media-amazon.com/images/I/712fWYf5PpL._SY879_.jpg" alt="saree" loading='lazy' className='w-20 h-24 cursor-pointer border-2 border-black rounded-md'/>
            <img src="https://m.media-amazon.com/images/I/71q9rOA23fL._SY741_.jpg" alt="saree" loading='lazy' className='w-20 h-24 cursor-pointer border-2 border-black rounded-md'/>
            <img src="https://m.media-amazon.com/images/I/71z6peC37iL._SY741_.jpg" alt="saree" loading='lazy' className='w-20 h-24 cursor-pointer border-2 border-black rounded-md'/>
            <img src="https://m.media-amazon.com/images/I/61vk2l2upeL._SX679_.jpg" alt="saree" loading='lazy' className='w-20 h-24 cursor-pointer border-2 border-black rounded-md'/>
        </div>
        <div className='flex-1'>
            <img src="https://m.media-amazon.com/images/I/712fWYf5PpL._SY879_.jpg" className='h-[100%]' alt="saree" loading='lazy' />
        </div>
        <div className='flex-1'> 
            <h1 className='font-bold text-xl'>Silk Saree</h1>
            <h2 className='font-semibold text-lg text-gray-700'>Elegance Silk</h2>
            <p className="text-xs text-gray-500 line-through">MRP: &#x20b9; 3499</p>
        </div>
    </section>
  )
}

export default ProductDetails