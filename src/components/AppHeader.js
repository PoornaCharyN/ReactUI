import React from 'react';
import ComponentsGrid from './ComponentsGrid';
import logo from '../logo.svg';
import './AppHeader.css';

function AppHeader(){
  return (
    <div className='app-header'>
      <div className='app-title' style={{marginTop: '-10px'}}>
        <img src={logo} className='react-logo' alt='react logo' />
        <h1 className='react-components-title'>React Components</h1>
      </div>
      <div className='app-desc'>
        On this page you'll find a collection of components of react used in out projects, which we thought might be 
        helpful and ease your work. To use this components you just need to refer to the steps to setup the component
        and refer code section for usage of the component. If you are facing any issues or want to provide feedback 
        please contact our team.
      </div>
      <ComponentsGrid />
    </div>
  );
}

export default AppHeader;