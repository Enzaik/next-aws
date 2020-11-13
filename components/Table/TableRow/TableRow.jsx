/* eslint react/prop-types: 0, react/react-in-jsx-scope: 0 */

import React from 'react';
import ProjectRow from '../../Rows/ProjectRow';
import DashboardRow from '../../Rows/DashboardRow';

export default function TableRow({ component, text, helpText, date, color }) {
  function renderComponent() {
    switch (component) {
      case 'projects':
        return <ProjectRow component={component} text={text} helpText={helpText} date={date} color={color} />;

      default:
        return <DashboardRow component={component} text={text} helpText={helpText} date={date} color={color} />;
    }
  }
  return renderComponent();
}
