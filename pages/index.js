/* eslint react/prop-types: 0, react/react-in-jsx-scope: 0  jsx-a11y/anchor-is-valid:0 */

import MainApp from '../components/MainApp';
import { Devtools } from '@ui-devtools/tailwind';
import algoliasearch from 'algoliasearch';
import Head from 'next/head';
import {
  InstantSearch,
  // browseObjects
} from 'react-instantsearch-dom';

export default function IndexPage() {
  const searchClient = algoliasearch(`${process.env.ALGOLIA_ID}`, `${process.env.ALGOLIA_SECRET}`);
  // const housesIndex = searchClient.initIndex('projects');
  return (
    <div>
      <Head>
        <title>Next tailwind</title>
        <link
          rel="preload"
          href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          as="style"
          onLoad="this.onload=null;this.rel='stylesheet'"
        />
        <link
          rel="preload"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@200;300;400;500;600;700;727;800;900&display=swap"
          as="style"
          onLoad="this.onload=null;this.rel='stylesheet'"
        />
      </Head>
      <Devtools>
        <InstantSearch indexName="projects" searchClient={searchClient}>
          <MainApp />
        </InstantSearch>
      </Devtools>
    </div>
  );
}
