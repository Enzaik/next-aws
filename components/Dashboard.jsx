import React from 'react';
import Card from './Card';

function Dashboard() {
  return (
    <div class="mt-2 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
      <Card />
      <Card />
      <Card />
    </div>
  );
}

export default Dashboard;
