import React from 'react';
import Transition from '../../Transition';

function DropdownItems({ isOpen, s3Data, type }) {
  return (
    <Transition
      show={isOpen}
      enter="transition ease-out duration-100 transform"
      enterFrom="opacity-0 scale-95"
      enterTo="opacity-100 scale-100"
      leave="transition ease-in duration-75 transform"
      leaveFrom="opacity-100 scale-100"
      leaveTo="opacity-0 scale-95"
    >
      <div
        className={`${
          type === 'icon'
            ? 'z-10 mx-3 origin-top absolute right-0 left-0 mt-1 rounded-md shadow-lg'
            : 'z-10 mx-3 origin-top-right absolute right-7 top-0 w-48 mt-1 rounded-md shadow-lg'
        }`}
      >
        <div
          className="rounded-md bg-white shadow-xs"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="options-menu"
        >
          <div className="py-1">
            {s3Data &&
              s3Data.map(({ text, type }) => {
                if (type === 'link') {
                  return (
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900"
                      role="menuitem"
                    >
                      {text}
                    </a>
                  );
                }
                if (type === 'icon-link') {
                  return (
                    <a
                      href="#"
                      className="group flex items-center px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900"
                      role="menuitem"
                    >
                      <svg
                        className="mr-3 h-5 w-5 text-gray-400 group-hover:text-gray-500 group-focus:text-gray-500"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M7 9a2 2 0 012-2h6a2 2 0 012 2v6a2 2 0 01-2 2H9a2 2 0 01-2-2V9z" />
                        <path d="M5 3a2 2 0 00-2 2v6a2 2 0 002 2V5h8a2 2 0 00-2-2H5z" />
                      </svg>
                      {text}
                    </a>
                  );
                } else {
                  return <div className="border-t border-gray-100"></div>;
                }
              })}
          </div>
        </div>
      </div>
    </Transition>
  );
}

export default DropdownItems;
