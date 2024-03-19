import React from "react";

function MotherList(props) {
  return (
    <>
       <div>
        <p classNameName="mx-[5%] text-3xl my-10">Mother List</p>
<div className="overflow-x-auto bg-white dark:bg-neutral-700">

  <div className="relative m-[2px] mb-3 mr-5 float-left">
    <label for="inputSearch" className="sr-only">Search </label>
    <input id="inputSearch" type="text" placeholder="Search..." className="block w-64 rounded-lg border dark:border-none dark:bg-neutral-600 py-2 pl-10 pr-4 text-sm focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-400" />
    <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 transform">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="h-4 w-4 text-neutral-500 dark:text-neutral-200">
        <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
      </svg>
    </span>
  </div>

  <div className="relative m-[2px] mb-3 float-right hidden sm:block">
    <label for="inputFilter" className="sr-only">Filter</label>
    <select id="inputFilter" className="block w-40 rounded-lg border dark:border-none dark:bg-neutral-600 p-2 text-sm focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-400">
      <option value="1" selected>Last week</option>
      <option value="2">Last month</option>
      <option value="3">Yesterday</option>
      <option value="4">Last 7 days</option>
      <option value="5">Last 30 days</option>
    </select>
  </div>

  <table className="min-w-full text-left text-xs whitespace-nowrap">

    <thead className="uppercase tracking-wider border-b-2 dark:border-neutral-600">
      <tr>
        <th scope="col" className="px-6 py-4">
          Mother Name
        </th>
        <th scope="col" className="px-6 py-4">
          User name
        </th>
        <th scope="col" className="px-6 py-4">
          List Child
        </th>
        <th scope="col" className="px-6 py-4">
          Add Child
        </th>
      </tr>
    </thead>

    <tbody>

      <tr className="border-b dark:border-neutral-600">
        <th scope="row" className="px-6 py-4">
          Handbag
        </th>
        <td className="px-6 py-4">$129.99</td>
        <td className="px-6 py-4">30</td>
        <td className="px-6 py-4">In Stock</td>
      </tr>

      <tr className="border-b dark:border-neutral-600">
        <th scope="row" className="px-6 py-4">
          Shoes
        </th>
        <td className="px-6 py-4">$89.50</td>
        <td className="px-6 py-4">25</td>
        <td className="px-6 py-4">In Stock</td>
      </tr>

      <tr className="border-b dark:border-neutral-600">
        <th scope="row" className="px-6 py-4">
          Bedding Set
        </th>
        <td className="px-6 py-4">$69.99</td>
        <td className="px-6 py-4">40</td>
        <td className="px-6 py-4">In Stock</td>
      </tr>

      <tr className="border-b dark:border-neutral-600">
        <th scope="row" className="px-6 py-4">
          Dining Table
        </th>
        <td className="px-6 py-4">$449.99</td>
        <td className="px-6 py-4">5</td>
        <td className="px-6 py-4">In Stock</td>
      </tr>

      <tr className="border-b dark:border-neutral-600">
        <th scope="row" className="px-6 py-4">
          Soap Set
        </th>
        <td className="px-6 py-4">$24.95</td>
        <td className="px-6 py-4">50</td>
        <td className="px-6 py-4">In Stock</td>
      </tr>

    </tbody>

  </table>

</div>
        
      </div>
    </>
  );
}

export default MotherList;
