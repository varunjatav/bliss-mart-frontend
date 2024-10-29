import React from "react";

const Filteration = () => {
  return (
    <div className="flex-1 w-[20%] py-10">
      <h1 className="font-bold">Category</h1>
      <div className="py-5 flex flex-col gap-5">
        <div>
          <input type="checkbox" name="t-shirt" id="t-shirt" />
          <span className="pl-2">T-shirts</span>
        </div>

        <div>
          <input type="checkbox" name="t-shirt" id="t-shirt" />
          <span className="pl-2">Jeans</span>
        </div>
        <div>
          <input type="checkbox" name="t-shirt" id="t-shirt" />
          <span className="pl-2">Shirts</span>
        </div>
        <div>
          <input type="checkbox" name="t-shirt" id="t-shirt" />
          <span className="pl-2">Jackets</span>
        </div>
        <div>
          <input type="checkbox" name="t-shirt" id="t-shirt" />
          <span className="pl-2">Active wear</span>
        </div>
      </div>
    </div>
  );
};

export default Filteration;
