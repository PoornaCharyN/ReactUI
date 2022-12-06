import React, { useState } from 'react';
import classNames from 'classnames';
import AppBreadcrumbs from '../../AppBreadcrumbs';
import SideBar from '../../SideBar';
import Header from '../../Header';
import Footer from '../../Footer';
import TableComponent from './TableComponent';
import '../../../App.css';

function TableContainer() {
  const [ expandView, setExpandView ] = useState(false);
  const handleToggleSidebar = (value) => setExpandView(!value);
  const classes = classNames('App', { appExpand: expandView});

  return (
    <>
      <Header />
      <AppBreadcrumbs compoName='Basic Table'/>
      <div className={classes}>
        <div className='side-bar'>
          <SideBar onToggleSidebar={handleToggleSidebar} />
        </div>
        <TableComponent isViewResized={expandView} />
      </div>
      <Footer/>
    </>
  );
}

export default TableContainer;