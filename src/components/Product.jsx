import { Link } from "react-router-dom";

export default function Product({product}) {
  if(product){
    return (
      <Link className="bg-white cursor-pointer" to={`/single-product/${product._id}`}>
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-12 lg:max-w-7xl lg:px-8">
          <div className="group">
            <div className=" aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
              <img
                alt={product.product_name}
                src={product.product_image}
                className="h-full w-full object-cover object-center group-hover:opacity-75"
              />
            </div>
            <h3 className="mt-4 text-lg text-gray-700">{product.product_name}</h3>
            <h3 className="text-md text-gray-700">{product.product_brand}</h3>
            <p className="mt-1 text-sm text-gray-900">{product.product_details}</p>
            <p className="mt-1 text-lg font-medium text-gray-900">Rs. {product.product_price}</p>
          </div>
        </div>
      </Link>
    );
  }
  
  
 
}
