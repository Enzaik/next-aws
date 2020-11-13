import {
  // Configure, Highlight,
  connectHits,
  // connectHitInsights
} from 'react-instantsearch-dom';

import ProjectRow from '../../Rows/ProjectRow';
import DashboardRow from '../../Rows/DashboardRow';

const TableBody = ({ hits, currentPageId }) => {
  function renderComponent(hit) {
    switch (currentPageId) {
      case 'projects':
        return <ProjectRow hit={hit} />;

      default:
        return <DashboardRow hit={hit} />;
    }
  }

  return (
    <tbody className="bg-white divide-y divide-gray-100">
      {hits &&
        hits.map((hit) => {
          return renderComponent(hit);
        })}
    </tbody>
  );
};

export default connectHits(TableBody);
