import React from 'react';

function ProjectMobile({ text, color }) {
  return (
    <li>
      <a href="#" className="flex items-center justify-between px-4 py-4 hover:bg-gray-50 sm:px-6">
        <div className="flex items-center truncate space-x-3">
          <div className={`w-2.5 h-2.5 flex-shrink-0 rounded-full ${color}`}></div>
          <p className="font-medium truncate text-sm leading-6">
            {text} <span className="truncate font-normal text-gray-500">in Engineering</span>
          </p>
        </div>
        {/* Heroicon name: chevron-right */}
        <svg
          className="ml-4 h-5 w-5 text-gray-400 group-hover:text-gray-500 group-focus:text-gray-600 transition ease-in-out duration-150"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
            clipRule="evenodd"
          />
        </svg>
      </a>
    </li>
  );
}

export default ProjectMobile;
