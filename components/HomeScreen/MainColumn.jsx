import React from 'react';
import InputMobile from '../Input/InputMobile';
import Dropdown from './Dropdown';
import Projects from '../Projects';
import ProjectsMobile from '../Projects/ProjectsMobile';
import PinnedProjects from '../Projects/PinnedProjects/PinnedProjectsContainer';

import {
  // Configure, Highlight,
  connectHits,
  // connectHitInsights
} from 'react-instantsearch-dom';

function MainColumn({ setIsOpen }) {
  return (
    <div className="font-inter flex flex-col w-0 flex-1 overflow-hidden">
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
                <InputMobile />
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
        <div className="border-b sm:justify-between sm:items-center px-4 sm:px-6 lg:px-8 py-4 border-gray-200 flex">
          <div className="flex-1 min-w-0">
            <h1 className="sm:truncate text-gray-900 font-medium text-lg leading-6 flex">Home</h1>
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
        <PinnedProjects />
        {/* Projects list (only on smallest breakpoint) */}
        <div className="mt-10 sm:hidden">
          <div className="px-4 sm:px-6">
            <h2 className="text-gray-500 text-xs font-medium uppercase tracking-wide">Projects</h2>
          </div>
          <ProjectsMobile />
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
  );
}

export default connectHits(MainColumn);
