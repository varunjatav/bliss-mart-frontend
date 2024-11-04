import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { productActions } from "../store/productSlice";


const products = [
  {
    id: 1,
    imageSrc:
      "https://www.urbanofashion.com/cdn/shop/files/jeanlscargo-mgrey.png?v=1725767196&width=360",
    imageAlt: "jeans",
    name: "Men's Jeans",
    category: "jeans",
  },
  {
    id: 2,
    imageSrc:
      "https://assets.ajio.com/medias/sys_master/root/20240909/IZf5/66debbc36f60443f3163a9d6/-473Wx593H-700393193-brown-MODEL.jpg",
    imageAlt: "t-shirt",
    name: "Men's T-shirt",
    category: "t-shirts"
  },
  {
    id: 3,
    imageSrc:
      "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTvpHdT1Nke3peZraJ6RBfZz83t4bjcBpXFVJZZHE4HAa-sNTBEejE77fSvUyrPUdegWS3r6u7K4w-rPoqglMNW4tYl7UiQqH58q5FwsTrCb6uoa5DmvhmDTu_e",
    imageAlt: "shirts",
    name: "Men's Shirts",
    category: "shirts"
  },
  {
    id: 4,
    imageSrc:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTC2Lgxek-B_vxYBZoFqXjvu_IQltMuY7Qmzw&s",
    imageAlt: "accessories",
    name: "Men's Accessories",
    category: "accessories"
  },
  {
    id: 5,
    imageSrc:
      "https://mirchi-fashion-bucket.s3.ap-south-1.amazonaws.com/Saree/37214I.jpg",
    imageAlt: "Saree",
    name: "Sarees",
    category: "sarees"
  },
  {
    id: 6,
    imageSrc:
      "https://m.media-amazon.com/images/I/91TgHf0qI+L._AC_UY1100_.jpg",
    imageAlt: "Kurti",
    name: "Kurti's",
    category: "kurti"
  },
  {
    id: 7,
    imageSrc:
      "https://jilmil.co.in/cdn/shop/files/1_3bb4ce73-7c64-4fb1-a7ee-c75933dc259f.jpg?v=1683954535",
    imageAlt: "Tops",
    name: "Tops",
    category: "tops"
  },
  {
    id: 8,
    imageSrc:
      "https://accessorizelondon.in/cdn/shop/products/MA-59301750001_1.jpg?crop=center&height=2000&v=1683285204&width=2000",
    imageAlt: "accessories",
    name: "Women's Accessories",
    category: "women's accessories"
  },
];
const HomeCategory = () => {

  const productState = useSelector  ((state) => state.products);
  console.log(productState.category);
  const dispatch = useDispatch();

  const handleCategory = (category) => {
    dispatch(productActions.handleCategory(category))
  }
  
  return (
    <>
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            Shop By Category
          </h2>

          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {products.map((product) => (
              <Link to={"/product-list"} onClick={() =>handleCategory(product.category)}>
              <div key={product.id} className="group relative cursor-pointer">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                  <img
                    alt={product.imageAlt}
                    src={product.imageSrc}
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                  />
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-lg text-gray-700 font-semibold">
                    
                        <span aria-hidden="true" className="absolute inset-0" />
                        {product.name}
                     
                    </h3>
                  </div>
                </div>
              </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeCategory;
