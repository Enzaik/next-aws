import React, { useState } from 'react';
import {
  connectAutoComplete,
  // connectHitInsights
} from 'react-instantsearch-dom';

function InputMobile({ hits, currentRefinement, refine }) {
  const [value, setValue] = useState('');
  const inputHandle = (e, hits) => {
    // setAreSearchResults(hits.length, e.target.value.length);
    setValue(e.target.value);
    refine(e.currentTarget.value);
  };
  return (
    <input
      id="search_field"
      autoComplete="off"
      className="block w-full h-full pl-8 pr-3 py-2 rounded-md text-gray-900 placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 sm:text-sm"
      placeholder="Search"
      type="search"
      value={currentRefinement}
      onChange={(e) => inputHandle(e, hits)}
    ></input>
  );
}

export default connectAutoComplete(InputMobile);
