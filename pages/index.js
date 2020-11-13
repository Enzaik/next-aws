import algoliasearch from 'algoliasearch';
import { InstantSearch } from 'react-instantsearch-dom';

import NavBar from '../components/NavBar/NavBar';
import Header from '../components/Header/Header';
import Content from '../components/Content/Content';
import { getS3Data } from '../utils/getS3Data';

export default function Container({ id, content, s3Data }) {
  // console.log(s3Data);
  const searchClient = algoliasearch(`${process.env.ALGOLIA_ID}`, `${process.env.ALGOLIA_SECRET}`);
  return (
    <InstantSearch indexName="dashboard" searchClient={searchClient}>
      <div className="font-inter">
        <NavBar currentPageId={id} headerItems={s3Data.headerItems} />
        <Header content={content} />
        <Content currentPageId={id} pageData={s3Data[id]} />
      </div>
    </InstantSearch>
  );
}

export async function getStaticProps({ params }) {
  const translate = (id) => {
    const translations = { dashboard: 'Dashboard', team: 'Team', projects: 'Projects' };
    return translations[id];
  };

  const s3Data = await getS3Data();

  return {
    props: {
      id: 'dashboard',
      content: translate('dashboard'),
      s3Data,
    },
  };
}
