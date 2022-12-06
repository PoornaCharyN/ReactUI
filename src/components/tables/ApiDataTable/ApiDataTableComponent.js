import React, { useState, useEffect } from 'react';
import ToggleView from '../../util/ToggleView';
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab';
import Table from 'react-bootstrap/Table';
import Spinner from 'react-bootstrap/Spinner';
import Prism from "prismjs";
import '../../prism.css';


function ApiDataTableComponent(props) {
  const [ data, setData] = useState([]);

  useEffect(() => {
    window.scrollTo(0,0);
    Prism.highlightAll();
    if(!data.length)
      fetch('https://jsonplaceholder.typicode.com/users')
          .then(response => response.json())
          .then((result) => {
            setData(result);
          });
  });
  
  return (
    <div className='btnCompoWrap'>
      <h3 className='btn-title'>Dynamic Data Table(API Data)</h3>
      <ToggleView  materialDisabled={true} isViewResized={props.isViewResized}/>
      <div className='step-tabs-wrapper'>
        <Tabs defaultActiveKey="demo" id="code-demo-tab">
          <Tab eventKey="demo" title="Demo">
            <div className='demo-wrapper'>
            <div style={{marginBottom:'10px'}}>Table with Dynamically fetched data from 3rd party API</div>
            <div style={{marginRight: '20px'}}>
              {
                data.length ?
                <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Username</th>
                    <th>Email</th>
                  </tr>
                </thead>
                <tbody>
                  {data && data.map(result => {
                    return (
                      <tr key={result.id}>
                        <td>{result.id}</td>
                        <td>{result.name}</td>
                        <td>{result.username}</td>
                        <td>{result.email}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </Table>  : <Spinner animation="border" variant="dark" />
              }
            </div>  

              <div className='compo-description'>
                <h4>Description</h4>
                <p>API Data Table, with the dynamically fetched data from 3rd party API</p>
                <h5>Steps</h5>
                <ul>
                  <li><strong>Step 1 :</strong> Install Dependency to your project root folder : <code>npm install react-bootstrap --save-dev</code></li>
                  <li><strong>Step 2 :</strong> Import components, for Table: <code>import Table from 'react-bootstrap/Table';</code></li>
                  <li><strong>Step 3 :</strong> Refer JSX code under the 'Code' tab, to understand the usage of component.</li>
              </ul>
              </div>
            </div>
          </Tab>
          <Tab eventKey="code" title="Code">
            <div className='jsx-code-wrapper'>
              <h4>JSX</h4>
              <pre style={{marginRight: '20px', background: '#fff'}}>
                <code className='language-javascript'>{`function ApiDataTableComponent() {
  const [ data, setData] = useState([]);

  useEffect(() => {
    if(!data.length)
      fetch('https://jsonplaceholder.typicode.com/users')
          .then(response => response.json())
          .then((result) => {
            setData(result);
          });
  });

  return (`}</code> <code className='language-markup'>{`
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Username</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        {data && data.map(result => {
          return (
            <tr key={result.id}>
              <td>{result.id}</td>
              <td>{result.name}</td>
              <td>{result.username}</td>
              <td>{result.email}</td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
}`}</code>
              </pre>
            </div>
          </Tab>
        </Tabs>
      </div>
    </div>
  );
}

export default ApiDataTableComponent;