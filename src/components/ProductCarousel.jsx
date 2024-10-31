import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import Product from './Product';

const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 5 },
};


const items = [1,1,1,1,1].map((item) => <Product/>);

const ProductCarousel = () => (
    
    <div className="bg-white py-10">
    <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
      <h2 className="text-2xl font-bold tracking-tight text-gray-900">Customers also purchased</h2>
     <AliceCarousel
        mouseTracking
        disableButtonsControls
        items={items}
        responsive={responsive}
        controlsStrategy="alternate"
        autoPlay
        autoPlayInterval={1000}
        infinite
        disableDotsControls
    />
    </div>
    </div>
    
);

export default ProductCarousel;