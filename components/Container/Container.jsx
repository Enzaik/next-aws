import algoliasearch from 'algoliasearch';
import { InstantSearch } from 'react-instantsearch-dom';

import NavBar from '../NavBar/NavBar';
import Header from '../Header/Header';
import Content from '../Content/Content';

export default function Container({ id, content }) {
  const searchClient = algoliasearch(`${process.env.ALGOLIA_ID}`, `${process.env.ALGOLIA_SECRET}`);
  return (
    <InstantSearch indexName="projects" searchClient={searchClient}>
      {' '}
      <div className="font-inter">
        <NavBar currentPageId={id} />
        <Header content={content} />
        <Content />
      </div>
    </InstantSearch>
  );
}

export async function getStaticProps({ params }) {
  const translate = (id) => {
    const translations = { dashboard: 'Dashboard', team: 'Team', projects: 'Projects' };
    return translations[id];
  };
  return {
    props: {
      id: 'Base',
      content: translate(params.id),
    },
  };
}
