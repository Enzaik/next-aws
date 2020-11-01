import React from 'react';
import Dropdown from '../../../Dropdown';

function PinnedProject({ color, icon, text }) {
  return (
    <li className="relative col-span-1 flex shadow-sm rounded-md">
      <div
        className={`flex-shrink-0 flex items-center justify-center w-16 ${color} text-white text-sm leading-5 font-medium rounded-l-md`}
      >
        {icon}
      </div>
      <div className="flex-1 flex items-center justify-between border-t border-r border-b border-gray-200 bg-white rounded-r-md truncate">
        <div className="flex-1 px-4 py-2 text-sm leading-5 truncate">
          <a href="#" className="text-gray-900 font-medium hover:text-gray-600 transition ease-in-out duration-150">
            {text}
          </a>
          <p className="text-gray-500">12 Members</p>
        </div>

        <Dropdown triggererType="item" />
      </div>
    </li>
  );
}

export default PinnedProject;
