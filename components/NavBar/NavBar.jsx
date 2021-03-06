import React, { useEffect, useState } from 'react';
import Input from '../Input/Input';

import withS3Data from '../../hoc/withS3Data';

import Link from 'next/link';
import Dropdown from '../Dropdown/Dropdown';

function NavBar({ currentPageId, headerItems }) {
  const [isOpen, setIsOpen] = useState(false);
  const handleMobileMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    // <nav className={`indigo-mac md:fixed w-full ${isOpen ? 'block' : 'fixed'}`}>
    <nav className={`z-10 bg-indigo-700 md:fixed w-full ${isOpen ? 'block' : 'fixed'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <img
                className="h-8 w-8"
                src="https://tailwindui.com/img/logos/v1/workflow-mark-on-brand.svg"
                alt="Workflow logo"
              />
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {headerItems &&
                  headerItems.map(({ href, as, headerId, text }) => {
                    return (
                      <Link href={href} as={as}>
                        <a
                          className={`px-3 py-2 rounded-md text-sm font-medium ${
                            currentPageId === headerId
                              ? 'text-white bg-indigo-800 focus:outline-none focus:text-white focus:bg-indigo-600'
                              : 'text-indigo-200 hover:text-white hover:bg-indigo-600 focus:outline-none'
                          }`}
                        >
                          {text}
                        </a>
                      </Link>
                    );
                  })}
              </div>
            </div>
          </div>
          <div className="flex flex-1 justify-center md:justify-end">
            <Input />
          </div>
          <div className="hidden md:block">
            <div className="ml-4 flex items-center md:ml-6">
              <button
                className="p-1 border-2 border-transparent text-indigo-300 rounded-full hover:text-white focus:outline-none focus:text-white focus:bg-indigo-600"
                aria-label="Notifications"
              >
                <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                  />
                </svg>
              </button>

              <Dropdown triggererType="profile" />
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            {/* <!-- Mobile menu button --> */}
            <button
              onClick={handleMobileMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-indigo-300 hover:text-white hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600 focus:text-white"
            >
              {/* <!-- Menu open: "hidden", Menu closed: "block" --> */}
              <svg
                className={`${isOpen ? 'hidden' : 'block'} h-6 w-6`}
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              {/* <!-- Menu open: "block", Menu closed: "hidden" --> */}
              <svg
                className={`${isOpen ? 'block' : 'hidden'} h-6 w-6`}
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      {/* <!--
          Mobile menu, toggle classes based on menu state.

          Open: "block", closed: "hidden"
      -->*/}
      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden`}>
        <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {headerItems &&
            headerItems.map(({ href, as, headerId, text }) => (
              <Link href={href} as={as}>
                <a
                  className={` block px-3 py-2 rounded-md text-base font-medium text-white focus:outline-none focus:text-white focus:bg-gray-700 ${
                    currentPageId === headerId ? 'bg-indigo-800' : ''
                  }`}
                >
                  {text}
                </a>
              </Link>
            ))}
        </div>
        <div class="pt-4 pb-3 border-t border-indigo-800">
          <div class="flex items-center px-5 space-x-3">
            <div class="flex-shrink-0">
              <img
                class="h-10 w-10 rounded-full"
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt=""
              />
            </div>
            <div class="space-y-1">
              <div class="text-base font-medium leading-none text-white">Tom Cook</div>
              <div class="text-sm font-medium leading-none text-indigo-300">tom@example.com</div>
            </div>
          </div>
          <div class="mt-3 px-2 space-y-1">
            <a
              href="#"
              class="block px-3 py-2 rounded-md text-base font-medium text-indigo-300 hover:text-white hover:bg-indigo-600 focus:outline-none focus:text-white focus:bg-indigo-600"
            >
              Your Profile
            </a>

            <a
              href="#"
              class="block px-3 py-2 rounded-md text-base font-medium text-indigo-300 hover:text-white hover:bg-indigo-600 focus:outline-none focus:text-white focus:bg-indigo-600"
            >
              Settings
            </a>

            <a
              href="#"
              class="block px-3 py-2 rounded-md text-base font-medium text-indigo-300 hover:text-white hover:bg-indigo-600 focus:outline-none focus:text-white focus:bg-indigo-600"
            >
              Sign out
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
