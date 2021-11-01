import React from "react";
import Sidebar from "./Sidebar";
import './admin.css'
import './sidebar.css'
const Admin = () => {
  return (
    <div className="admin">
      <div className="container-fluid">
        <div className="row">
          <div className="sidebar col-md-2"><Sidebar/></div>
          <div className="col-md-10">
              AddProduct
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
