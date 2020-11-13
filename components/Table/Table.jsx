import React from 'react';
import Projects from '../Projects/Projects';
import TableHeader from './TableHeader';

function Table({ items }) {
  return (
    <div className="px-0 overflow-hidden md:rounded-lg shadow">
      <table className="min-w-full">
        <TableHeader items={items} />
        <Projects />
      </table>
    </div>
  );
}

export default Table;
