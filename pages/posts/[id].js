import Link from 'next/link';
import Content from '../../components/Content';
import Header from '../../components/Header';

export default function MainContent({ id, content }) {
  return (
    <div className="">
      <Header id={id} />
      <header className="bg-white shadow pt-15">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold leading-tight text-gray-900">{content}</h1>
        </div>
      </header>
      <main>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          {/* <!-- Replace with your content --> */}
          <Content />
          {/* <!-- /End replace --> */}
        </div>
      </main>
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
