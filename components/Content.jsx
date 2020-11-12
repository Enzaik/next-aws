import React from 'react';
import Projects from './Projects/Projects';

function Content() {
  return (
    <div className="px-4 sm:px-0 overflow-hidden rounded-lg h-96 shadow">
      <table className="min-w-full">
        <thead>
          <tr className="border-gray-200">
            <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
              <span className="lg:pl-2">Project</span>
            </th>
            <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
              Members
            </th>
            <th className="hidden md:table-cell px-6 py-3 border-b border-gray-200 bg-gray-50 text-right text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
              Last updated
            </th>
            <th className="pr-6 py-3 border-b border-gray-200 bg-gray-50 text-right text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider"></th>
          </tr>
        </thead>
        <Projects />
      </table>
    </div>
  );
}

export default Content;
