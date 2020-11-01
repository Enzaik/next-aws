import React from 'react';
import PinnedProject from './PinnedProject/PinnedProject';

import algoliasearch from 'algoliasearch';
import {
  InstantSearch,
  // browseObjects
} from 'react-instantsearch-dom';
import PinnedProjects from './PinnedProjects';

function PinnedProjectsContainer() {
  const searchClient = algoliasearch(`${process.env.ALGOLIA_ID}`, `${process.env.ALGOLIA_SECRET}`);

  return (
    <InstantSearch indexName="pinnedProjects" searchClient={searchClient}>
      <div className="px-4 mt-6 sm:px-6 lg:px-8">
        <h2 className="text-gray-500 text-xs font-medium uppercase tracking-wide">Pinned Projects</h2>
        <PinnedProjects />
      </div>
    </InstantSearch>
  );
}

export default PinnedProjectsContainer;
