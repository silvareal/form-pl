import React from "react";

export default function CategoryDropdowSelect({ title, options }) {
  return (
    <div>
      <div className="pt-2 ml-3">
        <div className="relative max-w-md border-none ">
          <label for={title} class="input-dropdown__label">
            {title}
          </label>
          <select id={title} className="input-dropdown">
            <option className="pt-6">All</option>
            {options.map((option) => (
              <option className="pt-6">{option}</option>
            ))}
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2">
            <svg
              width="14"
              height="8"
              viewBox="0 0 14 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 1L7 7L13 1"
                stroke="#8F8B8B"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
