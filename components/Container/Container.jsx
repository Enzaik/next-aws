import NavBar from '../NavBar/NavBar';
import Header from '../Header/Header';
import Content from '../Content/Content';

export default function Container({ id, content }) {
  return (
    <div className="font-inter">
      <NavBar currentPageId={id} />
      <Header content={content} />
      <Content />
    </div>
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
