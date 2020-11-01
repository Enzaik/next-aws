import { useEffect, useState } from 'react';
import { Configure, Highlight, connectHits, connectHitInsights } from 'react-instantsearch-dom';

import Project from './Project/Project';
import { getS3Data } from '../../utils/getS3Data';

const Projects = ({ hits }) => {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    async function getData() {
      const projectsData = await getS3Data('projects');
      setProjects(projectsData);
    }
    getData();
  }, []);

  return (
    <tbody className="bg-white divide-y divide-gray-100">
      {hits &&
        hits.map(({ text, helpText, date, color }) => {
          return <Project text={text} helpText={helpText} date={date} color={color} />;
        })}
    </tbody>
  );
};

export default connectHits(Projects);
