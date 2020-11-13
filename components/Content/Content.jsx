import React from 'react';
import dynamic from 'next/dynamic';

const Dashboard = dynamic(() => import('../Dashboard'), { loading: () => <div>loading</div> });
const Table = dynamic(() => import('../Table/Table'), { loading: () => <div>loading</div> });

function Content({ currentPageId }) {
  function renderContent(currentPageId) {
    switch (currentPageId) {
      case 'dashboard':
        return <Dashboard />;
      default:
        return <Table items="projects" />;
    }
  }

  return (
    <main className="h-screen bg-gray-100">
      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        {/* <!-- Replace with your content --> */}
        {renderContent(currentPageId)}
        {/* <!-- /End replace --> */}
      </div>
    </main>
  );
}

export default Content;
