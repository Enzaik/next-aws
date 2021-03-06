import React, { useState } from 'react';
import {
  connectAutoComplete,
  // connectHitInsights
} from 'react-instantsearch-dom';

function Input({ hits, currentRefinement, refine }) {
  const [value, setValue] = useState('');
  const inputHandle = (e, hits) => {
    // setAreSearchResults(hits.length, e.target.value.length);
    setValue(e.target.value);
    refine(e.currentTarget.value);
  };
  return (
    <div class="max-w-lg w-full mx-4 md:mr-0 md:max-w-xs">
      <label for="search" class="sr-only">
        Search
      </label>
      <div class="relative">
        <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <svg class="h-5 w-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
            <path
              fill-rule="evenodd"
              d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
              clip-rule="evenodd"
            />
          </svg>
        </div>
        <input
          id="search"
          class="block w-full pl-10 pr-3 py-2 border border-transparent rounded-md leading-5 bg-indigo-800 text-gray-300 placeholder-gray-400 focus:outline-none focus:bg-indigo-600 focus:text-white sm:text-sm transition duration-150 ease-in-out"
          placeholder="Search"
          type="search"
          autoComplete="off"
          value={currentRefinement}
          onChange={(e) => inputHandle(e, hits)}
        />
      </div>
    </div>
  );
}

export default connectAutoComplete(Input);
