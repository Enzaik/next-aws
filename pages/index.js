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
      {/*
    Tailwind UI components require Tailwind CSS v1.8 and the @tailwindcss/ui plugin.
    Read the documentation to get started: https://tailwindui.com/documentation
  */}{' '}
      <InstantSearch indexName="projects" searchClient={searchClient}>
        <MainApp />
      </InstantSearch>
    </div>
  );
}
