import React, { useState, useRef, useEffect } from 'react';

import withS3Data from '../../hoc/withS3Data';
import DropdownItems from './DropdownItems';

function Dropdown({ type = 'iconless', triggererType, getHocS3Data }) {
  const [isOpen, setIsOpen] = useState(false);
  const [s3Data, setS3Data] = useState(['']);
  const ref = useRef();
  useEffect(() => {
    async function getData() {
      const data = await getHocS3Data();
      setS3Data(data[triggererType]);
    }
    getData();
  }, []);

  useEffect(() => {
    const onBodyClick = (event) => {
      if (ref.current.contains(event.target)) {
        return;
      }
      setIsOpen(false);
    };

    document.body.addEventListener('click', onBodyClick);
    return () => {
      document.body.removeEventListener('click', onBodyClick);
    };
  }, []);

  if (triggererType === 'profile') {
    return (
      <div ref={ref} className="flex items-center">
        <div className="ml-3 relative">
          <div>
            <button
              className="max-w-xs flex items-center text-sm rounded-full focus:outline-none focus:shadow-outline"
              id="user-menu"
              aria-label="User menu"
              aria-haspopup="true"
              onClick={() => setIsOpen(!isOpen)}
            >
              <img
                className="h-8 w-8 rounded-full"
                src="https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt=""
              ></img>
            </button>
          </div>
          <DropdownItems triggererType={triggererType} isOpen={isOpen} s3Data={s3Data} type={type} />
        </div>
      </div>
    );
  }

  if (triggererType === 'selector') {
    return (
      <div ref={ref} className="px-3 mt-6 relative inline-block text-left">
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
                  fillRule="evenodd"
                  d="M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </button>
        </div>
        <DropdownItems triggererType={triggererType} isOpen={isOpen} s3Data={s3Data} type={type} />
      </div>
    );
  }

  if (triggererType === 'item') {
    return (
      <div ref={ref} className="flex-shrink-0 pr-2">
        <button
          id="pinned-project-options-menu-0"
          className="w-8 h-8 inline-flex items-center justify-center text-gray-400 rounded-full bg-transparent hover:text-gray-500 focus:outline-none focus:text-gray-500 focus:bg-gray-100 transition ease-in-out duration-150"
          onClick={() => setIsOpen(!isOpen)}
        >
          {/* Heroicon name: dots-vertical */}
          <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
            <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
          </svg>
        </button>
        <DropdownItems triggererType={triggererType} isOpen={isOpen} s3Data={s3Data} type={type} />
      </div>
    );
  }

  if (triggererType === 'menurow') {
    return (
      <div ref={ref} className="relative flex justify-end items-center">
        <button
          id="project-options-menu-0"
          type="button"
          className="w-8 h-8 inline-flex items-center justify-center text-gray-400 rounded-full bg-transparent hover:text-gray-500 focus:outline-none focus:text-gray-500 focus:bg-gray-100 transition ease-in-out duration-150"
          onClick={() => setIsOpen(!isOpen)}
        >
          {/* Heroicon name: dots-vertical */}
          <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
            <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
          </svg>
        </button>
        <DropdownItems triggererType={triggererType} isOpen={isOpen} s3Data={s3Data} type={type} />
      </div>
    );
  }
}

export default withS3Data(Dropdown);
