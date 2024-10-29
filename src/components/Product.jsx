export default function Product() {
  return (
    <div className="bg-white cursor-pointer">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-12 lg:max-w-7xl lg:px-8">
        <a className="group">
          <div className=" aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
            <img
              alt={"Front of men's Basic Tee in black."}
              src={
                "https://nobero.com/cdn/shop/files/black_8f2f0bb4-9293-4d6f-a179-c918d7602384.jpg?v=1712232992"
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
