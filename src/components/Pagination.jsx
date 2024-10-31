import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";
import { useDispatch, useSelector } from "react-redux";
import { productActions } from "../store/productSlice";

// const items = [
//   { id: 1, title: 'Back End Developer', department: 'Engineering', type: 'Full-time', location: 'Remote' },
//   { id: 2, title: 'Front End Developer', department: 'Engineering', type: 'Full-time', location: 'Remote' },
//   { id: 3, title: 'User Interface Designer', department: 'Design', type: 'Full-time', location: 'Remote' },
// ]

export default function Pagination() {
  const productState = useSelector((state) => state.products);
  const dispatch = useDispatch();
  let len = Math.round(productState.products.length / productState.limit);

  let totalLength = [];
  for (let i = 1; i <= len; i++) {
    totalLength.push(i);
  }

  const handleSetPage = (page) => {
    dispatch(productActions.handlePage(page));
  };

  const handlePrev = () => {
    dispatch(productActions.handlePageDecrement());
  };
  const handleNext = () => {
    dispatch(productActions.handlePageIncrement());
  };

  return (
    <div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6">
      <div className="flex flex-1 justify-between sm:hidden">
        <button
        
          className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
        >
          Previous
        </button>
        <button
         
          className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
        >
          Next
        </button>
      </div>
      <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
        <div>
          <p className="text-sm text-gray-700">
            Showing <span className="font-medium">{productState.page}</span> to{" "}
            <span className="font-medium">{len}</span> of{" "}
            <span className="font-medium">{productState.products.length}</span> results
          </p>
        </div>
        <div>
          <nav
            aria-label="Pagination"
            className="isolate inline-flex -space-x-px rounded-md shadow-sm"
          >
            <button
               onClick={handlePrev}
              className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
            >
              <span className="sr-only">Previous</span>
              <ChevronLeftIcon aria-hidden="true" className="h-5 w-5" />
            </button>

            {totalLength &&
              totalLength.map((page, i) => {
                return (
                  <button
                    key={i}
                    aria-current="page"
                    className="relative z-10 inline-flex items-center active:bg-indigo-600 px-4 py-2 text-sm font-semibold active:text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    onClick={() => handleSetPage(page)}
                  >
                    {page}
                  </button>
                );
              })}
            <button
              onClick={handleNext}
              className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
            >
              <span className="sr-only">Next</span>
              <ChevronRightIcon aria-hidden="true" className="h-5 w-5" />
            </button>
          </nav>
        </div>
      </div>
    </div>
  );
}
