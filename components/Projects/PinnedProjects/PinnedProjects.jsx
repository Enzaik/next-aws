import React from 'react';
import PinnedProject from './PinnedProject/PinnedProject';
import {
  // Configure, Highlight,
  connectHits,
  // connectHitInsights
} from 'react-instantsearch-dom';

function PinnedProjects({ hits }) {
  return (
    <ul className="grid grid-cols-1 gap-4 sm:gap-6 sm:grid-cols-2 xl:grid-cols-4 mt-3">
      {hits &&
        hits.map(({ color, icon, text }) => {
          return <PinnedProject color={color} icon={icon} text={text} />;
        })}

      {/* More project cards... */}
    </ul>
  );
}

export default connectHits(PinnedProjects);
