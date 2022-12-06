import React, { useState, useEffect } from 'react';
import ToggleView from '../../util/ToggleView';
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab';
import Spinner from 'react-bootstrap/Spinner';
import MaterialTable from 'material-table';
import Prism from "prismjs";
import '../../prism.css';


function SortableTableComponent(props) {
  const [ data, setData] = useState([]);
  const columns = [
    { title: 'Id', field: 'id'},
    { title: 'Name', field: 'name'},
    { title: 'Year', field: 'year'},
    { title:'PanTone Value', field: 'pantone_value'}
  ];
  useEffect(() => {
    window.scrollTo(0,0);
    Prism.highlightAll();
    if(!data.length)
      fetch('https://reqres.in/api/products')
          .then(response => response.json())
          .then((result) => {
            setData(result.data);
          });
  });
  
  return (
    <div className='btnCompoWrap'>
      <h3 className='btn-title'>Sortable Table</h3>
      <ToggleView rbDisabled={true} isViewResized={props.isViewResized}/>
      <div className='step-tabs-wrapper'>
        <Tabs defaultActiveKey="demo" id="code-demo-tab">
          <Tab eventKey="demo" title="Demo">
            <div className='demo-wrapper'>
            <div style={{marginRight: '20px'}}>
              {
                data.length ? 
                  <MaterialTable
                    title="Sortable Table"
                    columns={columns}
                    data={data}
                    options={{
                      sorting: true
                    }}
                />
                  : <Spinner animation="border" variant="dark" />
              }
            </div>  

              <div className='compo-description'>
                <h4>Description</h4>
                <p>Sortable Table Component, in which we can sort the column data on click of its column header.</p>
                <h5>Steps</h5>
                <ul>
                <li><strong>Step 1 :</strong> Install Dependency to your project root folder : <code>npm install @material-ui/core material-table --save-dev;</code><br/>
                  Add Font Icons Dependency to your root html file <code>{`<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"/>`}</code></li>
                  <li><strong>Step 2 :</strong> Import components, for Table: <code>import MaterialTable from 'material-table';</code></li>
                  <li><strong>Step 3 :</strong> Refer JSX code under the 'Code' tab, to understand the usage of component.</li>
              </ul>
              </div>
            </div>
          </Tab>
          <Tab eventKey="code" title="Code">
            <div className='jsx-code-wrapper'>
              <h4>JSX</h4>
              <pre style={{marginRight: '20px', background: '#fff'}}>
                <code className='language-javascript'>{`function SortableTable() {
   const [ data, setData] = useState([]);
   const columns = [
     { title: 'ID', field: 'id'},
     { title: 'Name', field: 'name'},
     { title: 'Year', field: 'year'},
     { title:'PanTone Value', field: 'pantone_value'}
   ];
   useEffect(() => {
     if(!data.length)
       fetch('https://reqres.in/api/products')
           .then(response => response.json())
           .then((result) => {
             setData(result.data);
           });
   });

  return (`}</code><code className='language-markup'>{`
    <MaterialTable
      title="Sortable Table"
      columns={columns}
      data={data}
      options={{
        sorting: true
      }}
    />`}</code><code className='language-javascript'>{`
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

export default SortableTableComponent;