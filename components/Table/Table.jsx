import React from 'react';
import TableBody from './TableBody/TableBody';
import TableHeader from './TableHeader/TableHeader';

function Table({ items }) {
  return (
    <div className="px-0 overflow-hidden md:rounded-lg shadow">
      <table className="min-w-full">
        <TableHeader items={items} />
        <TableBody items={items} />
      </table>
    </div>
  );
}

export default Table;
