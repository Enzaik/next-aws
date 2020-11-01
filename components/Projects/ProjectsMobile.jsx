import React from 'react';
import ProjectMobile from './Project/ProjectMobile';

import {
  // Configure, Highlight,
  connectHits,
  // connectHitInsights
} from 'react-instantsearch-dom';

function ProjectsMobile({ hits }) {
  return (
    <ul className="mt-3 border-t border-gray-200 divide-y divide-gray-100">
      {hits &&
        hits.map(({ text, color }) => {
          return <ProjectMobile text={text} color={color} />;
        })}

      {/* More project rows... */}
    </ul>
  );
}

export default connectHits(ProjectsMobile);
