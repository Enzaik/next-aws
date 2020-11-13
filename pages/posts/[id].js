import algoliasearch from 'algoliasearch';
import { InstantSearch } from 'react-instantsearch-dom';

import Content from '../../components/Content/Content';
import NavBar from '../../components/NavBar/NavBar';
import Header from '../../components/Header/Header';
import { getS3Data } from '../../utils/getS3Data';

export default function Page({ id, content, s3Data }) {
  const searchClient = algoliasearch(`${process.env.ALGOLIA_ID}`, `${process.env.ALGOLIA_SECRET}`);
  return (
    <InstantSearch indexName={id} searchClient={searchClient}>
      <div>
        <NavBar currentPageId={id} headerItems={s3Data.headerItems} />
        <Header content={content} />
        <Content currentPageId={id} />
      </div>
    </InstantSearch>
  );
}

export async function getStaticPaths() {
  const paths = [{ params: { id: 'dashboard' } }, { params: { id: 'team' } }, { params: { id: 'projects' } }];
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const translate = (id) => {
    const translations = { dashboard: 'Dashboard', team: 'Team', projects: 'Projects' };
    return translations[id];
  };

  const s3Data = await getS3Data();

  return {
    props: {
      id: params.id,
      content: translate(params.id),
      s3Data,
    },
  };
}
