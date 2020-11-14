import React from 'react';

function Card() {
  return (
    <div class="bg-white overflow-hidden shadow sm:rounded-lg">
      <div class="p-5">
        <div class="flex items-center">
          <div class="flex-shrink-0">
            {/* <!-- Heroicon name: scale --> */}
            <svg
              class="h-6 w-6 text-cool-gray-400"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"
              />
            </svg>
          </div>
          <div class="ml-5 w-0 flex-1">
            <dl>
              <dt class="text-sm leading-5 font-medium text-cool-gray-500 truncate">Account balance</dt>
              <dd>
                <div class="text-lg leading-7 font-medium text-cool-gray-900">$30,659.45</div>
              </dd>
            </dl>
          </div>
        </div>
      </div>
      <div class="bg-cool-gray-50 px-5 py-3">
        <div class="text-sm leading-5">
          <a href="#" class="font-medium text-teal-600 hover:text-teal-900 transition ease-in-out duration-150">
            View all
          </a>
        </div>
      </div>
    </div>
  );
}

export default Card;
