import React from 'react';
import Table from '../Table/Table';

function Content() {
  return (
    <main className="h-screen bg-gray-100">
      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        {/* <!-- Replace with your content --> */}
        <div className="px-0 overflow-hidden md:rounded-lg shadow">
          <Table />
        </div>
        {/* <!-- /End replace --> */}
      </div>
    </main>
  );
}

export default Content;
