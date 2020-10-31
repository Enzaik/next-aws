import { useEffect, useState } from 'react';

import Project from './Project/Project';
import { getS3Data } from '../../utils/getS3Data';
export default function Projects() {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    async function getData() {
      const projectsData = await getS3Data('projects');

      setProjects(projectsData);
    }
    getData();
    // console.log(projects);
  }, []);

  return (
    <tbody className="bg-white divide-y divide-gray-100">
      {projects &&
        projects.map(({ id, text, helpText, date, color }) => {
          return <Project id={id} text={text} helpText={helpText} date={date} color={color} />;
        })}
    </tbody>
  );
}
