/* eslint react/prop-types: 0, react/react-in-jsx-scope: 0 */

import React from 'react';
import Dropdown from '../../Dropdown';

export default function Project() {
  return (
    <tr>
      <td className="px-6 py-3 max-w-0 w-full whitespace-no-wrap text-sm leading-5 font-medium text-gray-900">
        <div className="flex items-center space-x-3 lg:pl-2">
          <div className="flex-shrink-0 w-2.5 h-2.5 rounded-full bg-pink-600"></div>
          <a href="#" className="truncate hover:text-gray-600">
            <span>
              GraphQL API <span className="text-gray-500 font-normal">in Engineering</span>{' '}
            </span>
          </a>
        </div>
      </td>
      <td className="px-6 py-3 text-sm leading-5 text-gray-500 font-medium">
        <div className="flex items-center space-x-2">
          <div className="flex flex-shrink-0 -space-x-1">
            <img
              className="max-w-none h-6 w-6 rounded-full text-white shadow-solid"
              src="https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt=""
            ></img>

            <img
              className="max-w-none h-6 w-6 rounded-full text-white shadow-solid"
              src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt=""
            ></img>

            <img
              className="max-w-none h-6 w-6 rounded-full text-white shadow-solid"
              src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt=""
            ></img>

            <img
              className="max-w-none h-6 w-6 rounded-full text-white shadow-solid"
              src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt=""
            ></img>
          </div>

          <span className="flex-shrink-0 text-xs leading-5 font-medium">+8</span>
        </div>
      </td>
      <td className="hidden md:table-cell px-6 py-3 whitespace-no-wrap text-sm leading-5 text-gray-500 text-right">
        March 17, 2020
      </td>
      <td className="pr-6">
        <Dropdown triggererType="menurow" />
      </td>
    </tr>
  );
}
