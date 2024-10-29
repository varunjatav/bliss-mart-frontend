import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import ProductList from './ProductList';

const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 5 },
};

const items = [1,1,1,1,1].map((item) => <ProductList/>);
const ProductCarousel = () => (
    <div  className='px-10'>
     <h1 className='font-bold text-lg'>Basic Products</h1>
     <AliceCarousel
        mouseTracking
        items={items}
        responsive={responsive}
        controlsStrategy="alternate"
    />
    </div>
    
);

export default ProductCarousel;