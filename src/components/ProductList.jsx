/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/
const products = [
  {
    id: 1,
    name: "Basic Tee",
    href: "#",
    imageSrc:
      "https://tailwindui.com/plus/img/ecommerce-images/product-page-01-related-product-01.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$35",
    color: "Black",
  },
  // {
  //     id: 2,
  //     name: 'Basic Tee',
  //     href: '#',
  //     imageSrc: 'https://tailwindui.com/plus/img/ecommerce-images/product-page-01-related-product-01.jpg',
  //     imageAlt: "Front of men's Basic Tee in black.",
  //     price: '$35',
  //     color: 'Black',
  //   },
  //   {
  //     id: 3,
  //     name: 'Basic Tee',
  //     href: '#',
  //     imageSrc: 'https://tailwindui.com/plus/img/ecommerce-images/product-page-01-related-product-01.jpg',
  //     imageAlt: "Front of men's Basic Tee in black.",
  //     price: '$35',
  //     color: 'Black',
  //   },
  //   {
  //     id: 4,
  //     name: 'Basic Tee',
  //     href: '#',
  //     imageSrc: 'https://tailwindui.com/plus/img/ecommerce-images/product-page-01-related-product-01.jpg',
  //     imageAlt: "Front of men's Basic Tee in black.",
  //     price: '$35',
  //     color: 'Black',
  //   },
  //   {
  //     id: 5,
  //     name: 'Basic Tee',
  //     href: '#',
  //     imageSrc: 'https://tailwindui.com/plus/img/ecommerce-images/product-page-01-related-product-01.jpg',
  //     imageAlt: "Front of men's Basic Tee in black.",
  //     price: '$35',
  //     color: 'Black',
  //   },
  // More products...
];

export default function ProductList() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-12 lg:max-w-7xl lg:px-8">
        <a className="group">
          <div className=" aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
            <img
              alt={"Front of men's Basic Tee in black."}
              src={
                "https://tailwindui.com/plus/img/ecommerce-images/product-page-01-related-product-01.jpg"
              }
              className="h-full w-full object-cover object-center group-hover:opacity-75"
            />
          </div>
          <h3 className="mt-4 text-sm text-gray-700">Basic Tee</h3>
          <p className="mt-1 text-lg font-medium text-gray-900">rs. 500</p>
        </a>
      </div>
    </div>
  );
}
