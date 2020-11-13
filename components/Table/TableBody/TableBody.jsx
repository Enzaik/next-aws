import { useEffect, useState } from 'react';
import withS3Data from '../../../hoc/withS3Data';
import {
  // Configure, Highlight,
  connectHits,
  // connectHitInsights
} from 'react-instantsearch-dom';

// import TableRow from '../TableRow/TableRow';
import ProjectRow from '../../Rows/ProjectRow';
import DashboardRow from '../../Rows/DashboardRow';

const TableBody = ({ hits, getHocS3Data, items }) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    async function getData() {
      const s3Data = await getHocS3Data();
      setData(s3Data[items]['items']);
    }
    getData();
    console.log(items);
  }, []);

  function renderComponent(hit) {
    switch (items) {
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

export default withS3Data(connectHits(TableBody));
