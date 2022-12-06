import React, { useState, useEffect } from 'react';
import ToggleView from '../../util/ToggleView';
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab';
import MaterialTable from 'material-table';
import Prism from "prismjs";
import '../../prism.css';

function EditableTableComponent(props) {
  const [state, setState] = useState({
    columns: [
      { title: 'Name', field: 'name' },
      { title: 'Surname', field: 'surname' },
      { title: 'Birth Year', field: 'birthYear', type: 'numeric' },
      {
        title: 'Birth Place',
        field: 'birthCity',
        lookup: { 34: 'Bangalore', 63: 'Hyderabd', 22: 'Goa' },
      },
    ],
    data: [
      { name: 'Jesse', 
        surname: 'Jackson', 
        birthYear: 1987, 
        birthCity: 63 
      },
      {
        name: 'Alex',
        surname: 'Mahone',
        birthYear: 2017,
        birthCity: 34,
      },
      {
        name: 'Walter',
        surname: 'White',
        birthYear: 2017,
        birthCity: 22,
      },
    ],
  });

  useEffect(() => {
    window.scrollTo(0,0);
    Prism.highlightAll();
  },[]);
  
  return (
    <div className='btnCompoWrap'>
      <h3 className='btn-title'>CRUD Table</h3>
      <ToggleView rbDisabled={true} isViewResized={props.isViewResized}/>
      <div className='step-tabs-wrapper'>
        <Tabs defaultActiveKey="demo" id="code-demo-tab">
          <Tab eventKey="demo" title="Demo">
            <div className='demo-wrapper'>
            <MaterialTable
              title="CURD Table"
              columns={state.columns}
              data={state.data}
              editable={{
                onRowAdd: (newData) =>
                  new Promise((resolve) => {
                    setTimeout(() => {
                      resolve();
                      setState((prevState) => {
                        const data = [...prevState.data];
                        data.push(newData);
                        return { ...prevState, data };
                      });
                    }, 600);
                  }),
                onRowUpdate: (newData, oldData) =>
                  new Promise((resolve) => {
                    setTimeout(() => {
                      resolve();
                      if (oldData) {
                        setState((prevState) => {
                          const data = [...prevState.data];
                          data[data.indexOf(oldData)] = newData;
                          return { ...prevState, data };
                        });
                      }
                    }, 600);
                  }),
                onRowDelete: (oldData) =>
                  new Promise((resolve) => {
                    setTimeout(() => {
                      resolve();
                      setState((prevState) => {
                        const data = [...prevState.data];
                        data.splice(data.indexOf(oldData), 1);
                        return { ...prevState, data };
                      });
                    }, 600);
                  }),
              }}
            />

              <div className='compo-description'>
                <h4>Description</h4>
                <p>Editable Table Component, in which we can perform CRUD, Sort, Search & Filter, also provides pagination.</p>
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
                <code className='language-javascript'>{`function MaterialTableDemo() {
  const [state, setState] = React.useState({
    columns: [
      { title: 'Name', field: 'name' },
      { title: 'Surname', field: 'surname' },
      { title: 'Birth Year', field: 'birthYear', type: 'numeric' },
      { title: 'Birth Place', field: 'birthCity', lookup: { 34: 'İstanbul', 63: 'Şanlıurfa' }},
    ],
    data: [
      { name: 'Mehmet', surname: 'Baran', birthYear: 1987, birthCity: 63 },
      { name: 'Zerya Betül', surname: 'Baran', birthYear: 2017, birthCity: 34 },
    ],
  });

  return (`}</code><code className='language-markup'>{`
    <MaterialTable
      title="CURD Table Example"
      columns={state.columns}
      data={state.data}
      editable={{
        onRowAdd: (newData) =>
          new Promise((resolve) => {
            setTimeout(() => {
              resolve();
              setState((prevState) => {
                const data = [...prevState.data];
                data.push(newData);
                return { ...prevState, data };
              });
            }, 600);
          }),
        onRowUpdate: (newData, oldData) =>
          new Promise((resolve) => {
            setTimeout(() => {
              resolve();
              if (oldData) {
                setState((prevState) => {
                  const data = [...prevState.data];
                  data[data.indexOf(oldData)] = newData;
                  return { ...prevState, data };
                });
              }
            }, 600);
          }),
        onRowDelete: (oldData) =>
          new Promise((resolve) => {
            setTimeout(() => {
              resolve();
              setState((prevState) => {
                const data = [...prevState.data];
                data.splice(data.indexOf(oldData), 1);
                return { ...prevState, data };
              });
            }, 600);
          }),
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

export default EditableTableComponent;