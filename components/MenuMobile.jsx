import React, { useState } from 'react';

import Transition from '../Transition';

import Dropdown from './Dropdown';
import Projects from './Projects';

function MenuMobile() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="h-screen flex overflow-hidden bg-white">
      {/* Off-canvas menu for mobile, show/hide based on off-canvas menu state. */}
      <div className={`lg:hidden ${isOpen ? 'block' : 'hidden'}`}>
        <div className="fixed inset-0 flex z-40">
          {/*
          Off-canvas menu overlay, show/hide based on off-canvas menu state.
  
          Entering: "transition-opacity ease-linear duration-300"
            From: "opacity-0"
            To: "opacity-100"
          Leaving: "transition-opacity ease-linear duration-300"
            From: "opacity-100"
            To: "opacity-0"
        */}
          <Transition
            show={isOpen}
            enter="transition-opacity ease-linear duration-200"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0">
              <div className="absolute inset-0 bg-gray-600 opacity-75"></div>
            </div>
          </Transition>
          {/*
          Off-canvas menu, show/hide based on off-canvas menu state.
  
          Entering: "transition ease-in-out duration-300 transform"
            From: "-translate-x-full"
            To: "translate-x-0"
          Leaving: "transition ease-in-out duration-300 transform"
            From: "translate-x-0"
            To: "-translate-x-full"
        */}
          <Transition
            show={isOpen}
            enter="transition ease-in-out duration-300 transform"
            enterFrom="-translate-x-full"
            enterTo="translate-x-0"
            leave="transition ease-in-out duration-300 transform"
            leaveFrom="translate-x-0"
            leaveTo="-translate-x-full"
          >
            <div className="relative flex-1 flex flex-col max-w-xs w-full pt-5 pb-4 bg-white">
              <div className="absolute top-0 right-0 -mr-14 p-1">
                <button
                  //   closing button
                  className="flex items-center justify-center h-12 w-12 rounded-full focus:outline-none focus:bg-gray-600"
                  aria-label="Close sidebar"
                  tabIndex="0"
                  onClick={() => setIsOpen(false)}
                >
                  <svg className="h-6 w-6 text-white" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <div className="flex-shrink-0 flex items-center px-4">
                <img
                  className="h-8 w-auto"
                  src="https://tailwindui.com/img/logos/workflow-logo-purple-on-white.svg"
                  alt="Workflow"
                ></img>
              </div>
              <div className="mt-5 flex-1 h-0 overflow-y-auto">
                <nav className="px-2">
                  <div className="space-y-1">
                    <a
                      href="#"
                      className="group flex items-center px-2 py-2 text-base leading-5 font-medium rounded-md text-gray-900 bg-gray-100 hover:text-gray-900 hover:bg-gray-100 focus:bg-gray-200 focus:outline-none transition ease-in-out duration-150"
                    >
                      {/* Heroicon name: home */}
                      <svg
                        className="mr-3 h-6 w-6 text-gray-500 group-hover:text-gray-500 group-focus:text-gray-600 transition ease-in-out duration-150"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                        />
                      </svg>
                      Home
                    </a>

                    <a
                      href="#"
                      className="group flex items-center px-2 py-2 text-base leading-5 font-medium rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-50 focus:bg-gray-50 focus:outline-none transition ease-in-out duration-150"
                    >
                      {/* Heroicon name: view-list */}
                      <svg
                        className="mr-3 h-6 w-6 text-gray-400 group-hover:text-gray-500 group-focus:text-gray-600 transition ease-in-out duration-150"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M4 6h16M4 10h16M4 14h16M4 18h16"
                        />
                      </svg>
                      My tasks
                    </a>

                    <a
                      href="#"
                      className="group flex items-center px-2 py-2 text-base leading-5 font-medium rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-50 focus:bg-gray-50 focus:outline-none transition ease-in-out duration-150"
                    >
                      {/* Heroicon name: clock */}
                      <svg
                        className="mr-3 h-6 w-6 text-gray-400 group-hover:text-gray-500 group-focus:text-gray-600 transition ease-in-out duration-150"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      Recent
                    </a>
                  </div>
                  <div className="mt-8">
                    <h3
                      className="px-3 text-xs leading-4 font-semibold text-gray-500 uppercase tracking-wider"
                      id="teams-headline"
                    >
                      Teams
                    </h3>
                    <div className="mt-1 space-y-1" role="group" aria-labelledby="teams-headline">
                      <a
                        href="#"
                        className="group flex items-center px-3 py-2 text-base leading-5 font-medium text-gray-600 rounded-md hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:bg-gray-50 transition ease-in-out duration-150"
                      >
                        <span className="w-2.5 h-2.5 mr-4 bg-indigo-500 rounded-full"></span>
                        <span className="truncate">Engineering</span>
                      </a>

                      <a
                        href="#"
                        className="group flex items-center px-3 py-2 text-base leading-5 font-medium text-gray-600 rounded-md hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:bg-gray-50 transition ease-in-out duration-150"
                      >
                        <span className="w-2.5 h-2.5 mr-4 bg-teal-400 rounded-full"></span>
                        <span className="truncate">Human Resources</span>
                      </a>

                      <a
                        href="#"
                        className="group flex items-center px-3 py-2 text-base leading-5 font-medium text-gray-600 rounded-md hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:bg-gray-50 transition ease-in-out duration-150"
                      >
                        <span className="w-2.5 h-2.5 mr-4 bg-orange-500 rounded-full"></span>
                        <span className="truncate">Customer Success</span>
                      </a>
                    </div>
                  </div>
                </nav>
              </div>
            </div>
          </Transition>
          <div className="flex-shrink-0 w-14">{/* Dummy element to force sidebar to shrink to fit close icon */}</div>
        </div>
      </div>
      {/* Static sidebar for desktop */}
      <div className="hidden lg:flex lg:flex-shrink-0">
        <div className="flex flex-col w-64 border-r border-gray-200 pt-5 pb-4 bg-gray-100">
          <div className="flex items-center flex-shrink-0 px-6">
            <img
              className="h-8 w-auto"
              src="https://tailwindui.com/img/logos/workflow-logo-purple-on-white.svg"
              alt="Workflow"
            ></img>
          </div>
          {/* Sidebar component, swap this element with another sidebar if you like */}
          <div className="h-0 flex-1 flex flex-col overflow-y-auto">
            {/* User account dropdown */}
            <Dropdown triggererType="selector" />

            {/* Sidebar Search */}
            <div className="px-3 mt-5">
              <label htmlFor="search" className="sr-only">
                Search
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  {/* Heroicon name: search */}
                  <svg
                    className="mr-3 h-4 w-4 text-gray-400"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <input
                  id="search"
                  className="form-input block w-full pl-9 sm:text-sm sm:leading-5"
                  placeholder="Search"
                ></input>
              </div>
            </div>
            {/* Navigation */}
            <nav className="px-3 mt-6">
              <div className="space-y-1">
                <a
                  href="#"
                  className="group flex items-center px-2 py-2 text-sm leading-5 font-medium rounded-md text-gray-900 bg-gray-200 focus:outline-none focus:bg-gray-50 transition ease-in-out duration-150"
                >
                  {/* Heroicon name: home */}
                  <svg
                    className="mr-3 h-6 w-6 text-gray-500 group-hover:text-gray-500 group-focus:text-gray-600 transition ease-in-out duration-150"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                    />
                  </svg>
                  Home
                </a>

                <a
                  href="#"
                  className="group flex items-center px-2 py-2 text-sm leading-5 font-medium rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:bg-gray-50 transition ease-in-out duration-150"
                >
                  {/* Heroicon name: view-list */}
                  <svg
                    className="mr-3 h-6 w-6 text-gray-400 group-hover:text-gray-500 group-focus:text-gray-600 transition ease-in-out duration-150"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 10h16M4 14h16M4 18h16"
                    />
                  </svg>
                  My tasks
                </a>

                <a
                  href="#"
                  className="group flex items-center px-2 py-2 text-sm leading-5 font-medium rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:bg-gray-50 transition ease-in-out duration-150"
                >
                  {/* Heroicon name: clock */}
                  <svg
                    className="mr-3 h-6 w-6 text-gray-400 group-hover:text-gray-500 group-focus:text-gray-600 transition ease-in-out duration-150"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  Recent
                </a>
              </div>
              <div className="mt-8">
                {/* Secondary navigation */}
                <h3
                  className="px-3 text-xs leading-4 font-semibold text-gray-500 uppercase tracking-wider"
                  id="teams-headline"
                >
                  Teams
                </h3>
                <div className="mt-1 space-y-1" role="group" aria-labelledby="teams-headline">
                  <a
                    href="#"
                    className="group flex items-center px-3 py-2 text-sm leading-5 font-medium text-gray-700 rounded-md hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:bg-gray-50 transition ease-in-out duration-150"
                  >
                    <span className="w-2.5 h-2.5 mr-4 bg-indigo-500 rounded-full"></span>
                    <span className="truncate">Engineering</span>
                  </a>

                  <a
                    href="#"
                    className="group flex items-center px-3 py-2 text-sm leading-5 font-medium text-gray-700 rounded-md hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:bg-gray-50 transition ease-in-out duration-150"
                  >
                    <span className="w-2.5 h-2.5 mr-4 bg-teal-400 rounded-full"></span>
                    <span className="truncate">Human Resources</span>
                  </a>

                  <a
                    href="#"
                    className="group flex items-center px-3 py-2 text-sm leading-5 font-medium text-gray-700 rounded-md hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:bg-gray-50 transition ease-in-out duration-150"
                  >
                    <span className="w-2.5 h-2.5 mr-4 bg-orange-500 rounded-full"></span>
                    <span className="truncate">Customer Success</span>
                  </a>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
      {/* Main column */}
      <div className="flex flex-col w-0 flex-1 overflow-hidden">
        {/* Search header */}
        <div className="relative z-10 flex-shrink-0 flex h-16 bg-white border-b border-gray-200 lg:hidden">
          {/* Sidebar toggle, controls the 'sidebarOpen' sidebar state. */}
          <button
            //   opening button
            className="px-4 border-r border-gray-200 text-gray-500 focus:outline-none focus:bg-gray-100 focus:text-gray-600 lg:hidden"
            aria-label="Open sidebar"
            onClick={() => setIsOpen(true)}
          >
            <svg
              className="h-6 w-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </button>
          <div className="flex-1 flex justify-between px-4 sm:px-6 lg:px-8">
            <div className="flex-1 flex">
              <form className="w-full flex md:ml-0" action="#" method="GET">
                <label htmlFor="search_field" className="sr-only">
                  Search
                </label>
                <div className="relative w-full text-gray-400 focus-within:text-gray-600">
                  <div className="absolute inset-y-0 left-0 flex items-center pointer-events-none">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                      />
                    </svg>
                  </div>
                  <input
                    id="search_field"
                    className="block w-full h-full pl-8 pr-3 py-2 rounded-md text-gray-900 placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 sm:text-sm"
                    placeholder="Search"
                    type="search"
                  ></input>
                </div>
              </form>
            </div>
            <div className="flex items-center">
              <Dropdown triggererType="profile" />
            </div>
          </div>
        </div>
        <main className="flex-1 relative z-0 overflow-y-auto focus:outline-none">
          {/* Page title & actions */}
          <div className="border-b border-gray-200 px-4 py-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8">
            <div className="flex-1 min-w-0">
              <h1 className="text-lg font-medium leading-6 text-gray-900 sm:truncate">Home</h1>
            </div>
            <div className="mt-4 flex sm:mt-0 sm:ml-4">
              <span className="order-1 ml-3 shadow-sm rounded-md sm:order-0 sm:ml-0">
                <button
                  type="button"
                  className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm leading-5 font-medium rounded-md text-gray-700 bg-white hover:text-gray-500 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 active:text-gray-800 active:bg-gray-50 transition duration-150 ease-in-out"
                >
                  Share
                </button>
              </span>
              <span className="order-0 sm:order-1 sm:ml-3 shadow-sm rounded-md">
                <button
                  type="button"
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-purple-600 hover:bg-purple-500 focus:outline-none focus:shadow-outline-purple focus:border-purple-700 active:bg-indigo-700 transition duration-150 ease-in-out"
                >
                  Create
                </button>
              </span>
            </div>
          </div>
          {/* Pinned projects */}
          <div className="px-4 mt-6 sm:px-6 lg:px-8">
            <h2 className="text-gray-500 text-xs font-medium uppercase tracking-wide">Pinned Projects</h2>
            <ul className="grid grid-cols-1 gap-4 sm:gap-6 sm:grid-cols-2 xl:grid-cols-4 mt-3">
              <li className="relative col-span-1 flex shadow-sm rounded-md">
                <div className="flex-shrink-0 flex items-center justify-center w-16 bg-pink-600 text-white text-sm leading-5 font-medium rounded-l-md">
                  GA
                </div>
                <div className="flex-1 flex items-center justify-between border-t border-r border-b border-gray-200 bg-white rounded-r-md truncate">
                  <div className="flex-1 px-4 py-2 text-sm leading-5 truncate">
                    <a
                      href="#"
                      className="text-gray-900 font-medium hover:text-gray-600 transition ease-in-out duration-150"
                    >
                      GraphQL API
                    </a>
                    <p className="text-gray-500">12 Members</p>
                  </div>

                  <Dropdown
                    triggererType="item"
                    items={[
                      //change
                      { text: 'View Profile', type: 'link' },
                      { text: 'Settings', type: 'link' },
                      { text: 'Notifications', type: 'link' },
                      { text: undefined, type: 'divider' },
                      { text: 'Get Desktop app', type: 'link' },
                      { text: 'Notifications', type: 'link' },
                    ]}
                  />
                </div>
              </li>

              {/* More project cards... */}
            </ul>
          </div>
          {/* Projects list (only on smallest breakpoint) */}
          <div className="mt-10 sm:hidden">
            <div className="px-4 sm:px-6">
              <h2 className="text-gray-500 text-xs font-medium uppercase tracking-wide">Projects</h2>
            </div>
            <ul className="mt-3 border-t border-gray-200 divide-y divide-gray-100">
              <li>
                <a href="#" className="flex items-center justify-between px-4 py-4 hover:bg-gray-50 sm:px-6">
                  <div className="flex items-center truncate space-x-3">
                    <div className="w-2.5 h-2.5 flex-shrink-0 rounded-full bg-pink-600"></div>
                    <p className="font-medium truncate text-sm leading-6">
                      GraphQL API <span className="truncate font-normal text-gray-500">in Engineering</span>
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

              {/* More project rows... */}
            </ul>
          </div>
          {/* Projects table (small breakpoint and up) */}
          <div className="hidden mt-8 sm:block">
            <div className="align-middle inline-block min-w-full border-b border-gray-200">
              <table className="min-w-full">
                <thead>
                  <tr className="border-t border-gray-200">
                    <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                      <span className="lg:pl-2">Project</span>
                    </th>
                    <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                      Members
                    </th>
                    <th className="hidden md:table-cell px-6 py-3 border-b border-gray-200 bg-gray-50 text-right text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                      Last updated
                    </th>
                    <th className="pr-6 py-3 border-b border-gray-200 bg-gray-50 text-right text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider"></th>
                  </tr>
                </thead>
                <Projects />
              </table>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default MenuMobile;
