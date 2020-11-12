import Content from '../../components/Table/Table';
import NavBar from '../../components/NavBar/NavBar';
import Header from '../../components/Header/Header';

export default function Page({ id, content }) {
  return (
    <div>
      <NavBar currentPageId={id} />
      <Header content={content} />
      <Content />
    </div>
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

  return {
    props: {
      id: params.id,
      content: translate(params.id),
    },
  };
}
