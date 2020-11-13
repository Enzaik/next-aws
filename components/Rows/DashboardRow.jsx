import React from 'react';

function DashboardRow({ hit }) {
  const { text, amount, currency, status } = hit;
  return (
    <tr class="bg-white">
      <td class="max-w-0 w-full px-6 py-4 whitespace-no-wrap text-sm leading-5 text-cool-gray-900">
        <div class="flex">
          <a href="#" class="group inline-flex space-x-2 truncate text-sm leading-5">
            {/* <!-- Heroicon name: cash --> */}
            <svg
              class="flex-shrink-0 h-5 w-5 text-cool-gray-400 group-hover:text-cool-gray-500 transition ease-in-out duration-150"
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
            <p class="text-cool-gray-500 truncate group-hover:text-cool-gray-900 transition ease-in-out duration-150">
              {text}
            </p>
          </a>
        </div>
      </td>
      <td class="px-6 py-4 text-right whitespace-no-wrap text-sm leading-5 text-cool-gray-500">
        <span class="text-cool-gray-900 font-medium">{amount} </span>
        {currency}
      </td>
      <td class="hidden px-6 py-4 whitespace-no-wrap text-sm leading-5 text-cool-gray-500 md:block">
        <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium leading-4 bg-green-100 text-green-800 capitalize">
          {status}
        </span>
      </td>
      <td class="px-6 py-4 text-right whitespace-no-wrap text-sm leading-5 text-cool-gray-500">July 11, 2020</td>
    </tr>
  );
}

export default DashboardRow;
