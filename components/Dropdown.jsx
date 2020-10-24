import React, { useState } from 'react';

import { LazyLoadImage } from 'react-lazy-load-image-component';
import Transition from '../Transition';

function Dropdown({ items, type = 'iconless', triggererType }) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdown = (
    <>
      <button
        onClick={() => setIsOpen(false)}
        className={` ${isOpen ? 'fixed' : 'hidden'} top-0 left-0 bottom-0 right-0 h-full w-full outline-none`}
      ></button>
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
              {items.map(({ text, type }) => {
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
                      {/* Heroicon name: duplicate */}
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
    </>
  );

  if (triggererType === 'selector') {
    return (
      <div className="px-3 mt-6 relative inline-block text-left">
        {/* Dropdown menu toggle, controlling the show/hide state of dropdown menu. */}
        <div>
          <button
            type="button"
            className="group w-full rounded-md px-3.5 py-2 text-sm leading-5 font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-500 focus:outline-none focus:bg-gray-200 focus:border-blue-300 active:bg-gray-50 active:text-gray-800 transition ease-in-out duration-150"
            id="options-menu"
            aria-haspopup="true"
            aria-expanded="true"
            onClick={() => setIsOpen(!isOpen)}
          >
            <div className="flex w-full justify-between items-center">
              <div className="flex min-w-0 items-center justify-between space-x-3">
                <img
                  className="w-10 h-10 bg-gray-300 rounded-full flex-shrink-0"
                  src="https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80"
                  alt=""
                ></img>
                <div className="flex-1 min-w-0">
                  <h2 className="text-gray-900 text-sm leading-5 font-medium truncate">Jessy Schwarz</h2>
                  <p className="text-gray-500 text-sm leading-5 truncate">@jessyschwarz</p>
                </div>
              </div>
              {/* Heroicon name: selector */}
              <svg
                className="flex-shrink-0 h-5 w-5 text-gray-400 group-hover:text-gray-500"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
          </button>
        </div>
        {dropdown}
      </div>
    );
  }

  if (triggererType === 'item') {
    return (
      <div className="flex-shrink-0 pr-2">
        <button
          id="pinned-project-options-menu-0"
          aria-has-popup="true"
          className="w-8 h-8 inline-flex items-center justify-center text-gray-400 rounded-full bg-transparent hover:text-gray-500 focus:outline-none focus:text-gray-500 focus:bg-gray-100 transition ease-in-out duration-150"
          onClick={() => setIsOpen(!isOpen)}
        >
          {/* Heroicon name: dots-vertical */}
          <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
            <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
          </svg>
        </button>
        {dropdown}
      </div>
    );
  }

  if (triggererType === 'menurow') {
    return (
      <div className="relative flex justify-end items-center">
        <button
          id="project-options-menu-0"
          aria-has-popup="true"
          type="button"
          className="w-8 h-8 inline-flex items-center justify-center text-gray-400 rounded-full bg-transparent hover:text-gray-500 focus:outline-none focus:text-gray-500 focus:bg-gray-100 transition ease-in-out duration-150"
          onClick={() => setIsOpen(!isOpen)}
        >
          {/* Heroicon name: dots-vertical */}
          <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
            <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
          </svg>
        </button>
        {dropdown}
      </div>
    );
  }
}

export default Dropdown;
