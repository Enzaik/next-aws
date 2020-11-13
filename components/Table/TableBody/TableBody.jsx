import { useEffect, useState } from 'react';
import withS3Data from '../../../hoc/withS3Data';
import {
  // Configure, Highlight,
  connectHits,
  // connectHitInsights
} from 'react-instantsearch-dom';

import TableRow from '../TableRow/TableRow';

const TableRows = ({ hits, getHocS3Data, items }) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    async function getData() {
      const s3Data = await getHocS3Data();
      setData(s3Data[items]['items']);
    }
    getData();
  }, []);

  return (
    <tbody className="bg-white divide-y divide-gray-100">
      {hits &&
        hits.map(({ text, helpText, date, color }) => {
          return <TableRow text={text} helpText={helpText} date={date} color={color} />;
        })}
    </tbody>
  );
};

export default withS3Data(connectHits(TableRows));
