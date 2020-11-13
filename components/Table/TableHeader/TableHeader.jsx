import React, { useEffect, useState } from 'react';

function TableHeader({ columns }) {
  return (
    <thead>
      <tr className="border-gray-200">
        {columns &&
          columns.map(({ id, text, important }) => {
            return (
              <th
                className={`${
                  important ? '' : 'hidden md:table-cell'
                } px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider`}
              >
                {text}
              </th>
            );
          })}
      </tr>
    </thead>
  );
}

export default TableHeader;
