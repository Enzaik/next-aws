import React from 'react';
import Table from '../Table/Table';
import Dashboard from '../Dashboard';

function Content({ currentPageId }) {
  function renderContent(currentPageId) {
    switch (currentPageId) {
      case 'dashboard':
        return <Dashboard />;

      default:
        return <Table />;
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
