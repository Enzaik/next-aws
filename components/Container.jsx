import Link from 'next/link';

import Content from './Content';
import Header from './Header';
function Container({ id, content }) {
  return (
    <div className="font-inter">
      <Header id={id} />
      <header className="bg-white shadow pt-15">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold leading-tight text-gray-900">{content}</h1>
        </div>
      </header>
      <main>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          {/* <!-- Replace with your content --> */}
          <div className="px-0 overflow-hidden md:rounded-lg h-96 shadow">
            <Content />
          </div>
          {/* <!-- /End replace --> */}
        </div>
      </main>
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

export default Container;
