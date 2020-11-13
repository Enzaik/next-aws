import React from 'react';
import TableBody from './TableBody/TableBody';
import TableHeader from './TableHeader/TableHeader';

function Table({ currentPageId, pageData }) {
  return (
    <div className="px-0 overflow-hidden md:rounded-lg shadow">
      <table className="min-w-full">
        <TableHeader columns={pageData.columns} />
        <TableBody currentPageId={currentPageId} />
      </table>
    </div>
  );
}

export default Table;
