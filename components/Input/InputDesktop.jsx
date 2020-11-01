import React, { useState } from 'react';
import {
  connectAutoComplete,
  // connectHitInsights
} from 'react-instantsearch-dom';

function InputDesktop({ hits, currentRefinement, refine }) {
  const [value, setValue] = useState('');
  const inputHandle = (e, hits) => {
    console.log(hits, e.target.value.length);
    // setAreSearchResults(hits.length, e.target.value.length);
    setValue(e.target.value);
    refine(e.currentTarget.value);
  };
  return (
    <input
      id="search"
      autoComplete="off"
      className="form-input block w-full pl-9 sm:text-sm sm:leading-5"
      placeholder="Search"
      value={currentRefinement}
      onChange={(e) => inputHandle(e, hits)}
    ></input>
  );
}

export default connectAutoComplete(InputDesktop);
