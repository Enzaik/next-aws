import React from 'react';
import Card from './Card';
import TableHeader from './Table/TableHeader/TableHeader';
import Table from './Table/Table';
import DashboardRow from './Rows/DashboardRow';

function Dashboard({ pageData }) {
  return (
    <div class=" mx-auto ">
      <h2 class="ml-4 sm:ml-0 text-lg leading-6 font-medium text-cool-gray-900">Overview</h2>
      <div class="mt-2 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        <Card />
        <Card />
        <Card />
      </div>
      <h2 class="ml-4 sm:ml-0 max-w-6xl mx-auto mt-8 text-lg leading-6 font-medium text-cool-gray-900">
        Recent activity
      </h2>

      {/* <!-- Activity list (smallest breakopoint only) --> */}
      <div class="shadow sm:hidden">
        <ul class="mt-2 divide-y divide-cool-gray-200 overflow-hidden shadow sm:hidden">
          <li>
            <a href="#" class="block px-4 py-4 bg-white hover:bg-cool-gray-50">
              <div class="flex items-center space-x-4">
                <div class="flex-1 flex space-x-2 truncate">
                  {/* <!-- Heroicon name: cash --> */}
                  <svg
                    class="flex-shrink-0 h-5 w-5 text-cool-gray-400"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <div class="text-cool-gray-500 text-sm truncate">
                    <p class="truncate">Payment to Molly Sanders</p>
                    <p>
                      <span class="text-cool-gray-900 font-medium">$20,000</span> USD
                    </p>
                    <p>July 11, 2020</p>
                  </div>
                </div>
                <div>
                  {/* <!-- Heroicon name: chevron-right --> */}
                  <svg
                    class="flex-shrink-0 h-5 w-5 text-cool-gray-400"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </div>
              </div>
            </a>
          </li>

          {/* <!-- More items... --> */}
        </ul>
        <nav class="bg-white px-4 py-3 flex items-center justify-between border-t border-cool-gray-200">
          <div class="flex-1 flex justify-between">
            <a
              href="#"
              class="relative inline-flex items-center px-4 py-2 border border-cool-gray-300 text-sm leading-5 font-medium rounded-md text-cool-gray-700 bg-white hover:text-cool-gray-500 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 active:bg-cool-gray-100 active:text-cool-gray-700 transition ease-in-out duration-150"
            >
              Previous
            </a>
            <a
              href="#"
              class="ml-3 relative inline-flex items-center px-4 py-2 border border-cool-gray-300 text-sm leading-5 font-medium rounded-md text-cool-gray-700 bg-white hover:text-cool-gray-500 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 active:bg-cool-gray-100 active:text-cool-gray-700 transition ease-in-out duration-150"
            >
              Next
            </a>
          </div>
        </nav>
      </div>

      {/* <!-- Activity table (small breakopoint and up) --> */}
      <div class="hidden sm:block">
        <div class="flex flex-col mt-2">
          <div class="align-middle min-w-full overflow-x-auto shadow overflow-hidden sm:rounded-lg">
            <Table currentPageId="dashboard" pageData={pageData} />
            {/* <!-- Pagination --> */}
            <nav class="bg-white px-4 py-3 flex items-center justify-between border-t border-cool-gray-200 sm:px-6">
              <div class="hidden sm:block">
                <p class="text-sm leading-5 text-cool-gray-700">
                  Showing
                  <span class="font-medium">1</span>
                  to
                  <span class="font-medium">10</span>
                  of
                  <span class="font-medium">20</span>
                  results
                </p>
              </div>
              <div class="flex-1 flex justify-between sm:justify-end">
                <a
                  href="#"
                  class="relative inline-flex items-center px-4 py-2 border border-cool-gray-300 text-sm leading-5 font-medium rounded-md text-cool-gray-700 bg-white hover:text-cool-gray-500 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 active:bg-cool-gray-100 active:text-cool-gray-700 transition ease-in-out duration-150"
                >
                  Previous
                </a>
                <a
                  href="#"
                  class="ml-3 relative inline-flex items-center px-4 py-2 border border-cool-gray-300 text-sm leading-5 font-medium rounded-md text-cool-gray-700 bg-white hover:text-cool-gray-500 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 active:bg-cool-gray-100 active:text-cool-gray-700 transition ease-in-out duration-150"
                >
                  Next
                </a>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
