/* eslint react/prop-types: 0, react/react-in-jsx-scope: 0  jsx-a11y/anchor-is-valid:0 */

import MainApp from '../components/MainApp';
import algoliasearch from 'algoliasearch';
import {
  InstantSearch,
  // browseObjects
} from 'react-instantsearch-dom';

export default function IndexPage() {
  const searchClient = algoliasearch(`${process.env.ALGOLIA_ID}`, `${process.env.ALGOLIA_SECRET}`);
  // const housesIndex = searchClient.initIndex('projects');
  return (
    <div>
      <InstantSearch indexName="projects" searchClient={searchClient}>
        <MainApp />
      </InstantSearch>
    </div>
  );
}
