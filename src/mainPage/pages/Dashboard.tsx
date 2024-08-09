import React from 'react';
import SelectView from '../components/SelectView';
import { VIEW } from '../components/SelectView';

const Dashboard = () => {
  return (
    <div>
      <SelectView view={VIEW.DASHBOARD} />
    </div>
  );
};

export default Dashboard;
