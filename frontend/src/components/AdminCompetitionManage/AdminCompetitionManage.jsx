import React from 'react';
import { AdminSeasonList, AdminSeasonAdd } from '../../containers';

const AdminCompetitionManage = () => (
  <div className="wrapper wrapper-content animated fadeInRight">
    <div className="row">
      <div className="col-lg-6">
        <AdminSeasonList />
      </div>
      <div className="col-lg-6">
        <AdminSeasonAdd />
      </div>
    </div>
  </div>
);

export default AdminCompetitionManage;
