import React from 'react';

function Header({ content }) {
  return (
    <header className="bg-gray-100 pt-15">
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 ">
        <h1 className="text-3xl font-bold leading-tight text-gray-900">{content}</h1>
      </div>
    </header>
  );
}

export default Header;
