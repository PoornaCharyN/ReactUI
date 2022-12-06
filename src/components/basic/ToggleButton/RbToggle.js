import React, { useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';
import Prism from "prismjs";
import '../../prism.css';

function RbToggle() {
  return (
    <div className='demo-wrapper'>
      <div className='toggle-button-wrapper'>
        <div style={{marginBottom: '5px'}}>Switch type Toggle Button</div>
        <Form.Check 
          type="switch"
          id="custom-switch"
          label="Toggle this switch"
          defaultChecked
        />
        <div style={{marginBottom: '5px', marginTop: '5px'}}>Disabled Switch type Toggle Button</div>
        <Form.Check 
          disabled
          type="switch"
          label="Disabled Toggle switch"
          id="disabled-custom-switch"
        />
        <div style={{marginBottom: '5px', marginTop: '5px'}}>Normal Toggle Group Buttons</div>
        <ToggleButtonGroup type="radio" name="options" defaultValue={1} className="mb-2">
          <ToggleButton value={1}> Value 1(pre-selected)</ToggleButton>
          <ToggleButton value={2}> Value 2</ToggleButton>
        </ToggleButtonGroup>
      </div>
      
      <div className='compo-description'>
        <h4>Description</h4>
        <p>Toggle Button is a component, which can be used to make decision i.e., true/false, user can make it turn on or off</p>
        <h5>Steps</h5>
        <ul>
          <li><strong>Step 1 :</strong> Install Dependency to your project root folder : <code>npm install react-bootstrap --save-dev</code></li>
          <li><strong>Step 2 :</strong> Import component, for switch type toggle: <code>import Form from 'react-bootstrap/Form';</code><br/> for Normal Button type toggle group <code>import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';</code><br/><code>
            import ToggleButton from 'react-bootstrap/ToggleButton';</code></li>
          <li><strong>Step 3 :</strong> Refer JSX code under the 'Code' tab, to understand the usage of component.</li>
      </ul>

      </div>
    </div>
  );
}

function RbToggleCode() {
  useEffect(()=> Prism.highlightAll(), []);
  return (
    <div className='jsx-code-wrapper'>
      <h4>JSX</h4>
      <pre style={{marginRight: '20px', background:'#fff'}}>
        <code className='language-markup'>
          {`<Form.Check type="switch" label="Toggle this switch" defaultChecked />
<Form.Check type="switch" label="Disabled Toggle Switch" disabled />

<ToggleButtonGroup type="radio" name="options" defaultValue={1} className="mb-2">
  <ToggleButton value={1}> Value 1(pre-selected)</ToggleButton>
  <ToggleButton value={2}> Value 2</ToggleButton>
</ToggleButtonGroup>`}
        </code>
      </pre>
    </div>
  );
}

export { RbToggle, RbToggleCode };