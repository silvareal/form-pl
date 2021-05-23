import React from "react";
import CategoryDropdowSelect from "../components/dropdownSelect/CategoryDropdowSelect";
const categories = ["Health", "E-commerce", "Education"];
export default function Navbar() {
  return (
    <div className="py-5">
      <div className="flex flex-col lg:flex-row lg:justify-between justify-center">
        <div className="max-w-md mt-2">
          {/* This is an example component */}
          <div className="pt-2 relative mx-auto text-gray-600">
            <input
              className="input-search "
              type="search"
              name="search"
              placeholder="Search Templates"
            />
            <button type="submit" className="absolute right-0 top-0 mt-5 mr-4">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9 17C13.4183 17 17 13.4183 17 9C17 4.58172 13.4183 1 9 1C4.58172 1 1 4.58172 1 9C1 13.4183 4.58172 17 9 17Z"
                  stroke="#8F8B8B"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M18.9999 19L14.6499 14.65"
                  stroke="#8F8B8B"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>

        <div className="mt-2">
          <div className="flex items-center flex-col lg:flex-row">
            <p className="text-help-sub">Sort By:</p>
            <div className="flex mt-0 lg:mt-2">
              <CategoryDropdowSelect title="Category" options={categories} />
              <CategoryDropdowSelect title="Category" options={categories} />

              <CategoryDropdowSelect title="Category" options={categories} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
