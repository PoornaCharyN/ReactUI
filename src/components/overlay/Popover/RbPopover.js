import React, { useEffect } from 'react';
import Popover from 'react-bootstrap/Popover';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Button from 'react-bootstrap/Button';
import Prism from "prismjs";
import '../../prism.css';

function RbPopover() {
  const popover = (
    <Popover id="popover-basic">
      <Popover.Title as="h3">Popover right</Popover.Title>
      <Popover.Content>
        And here's some <strong>amazing</strong> content. It's very engaging.
        right?
      </Popover.Content>
    </Popover>
  );

  return (
    <div className='demo-wrapper'>
      <div style={{marginBottom: '30px'}}>Popover on click of trigger button</div>
      <OverlayTrigger rootClose trigger="click" placement="right" overlay={popover}>
        <Button variant="success">Click me to see</Button>
      </OverlayTrigger>
      <div style={{marginBottom: '30px', marginTop:'10px'}}>Popover on hover of trigger button</div>
      <OverlayTrigger rootClose trigger={['hover', 'focus']} placement="right" overlay={popover}>
        <Button variant="warning">hover me to see</Button>
      </OverlayTrigger>
      <div style={{marginBottom: '30px', marginTop:'10px'}}>Popover at various positions(onClick).</div>
     
        {['top', 'right', 'bottom', 'left'].map((placement, idx) => (
          <>
            <OverlayTrigger
              trigger="click"
              key={placement}
              placement={placement}
              rootClose
              style={{marginRight: '10px'}}
              overlay={
                <Popover id={`popover-positioned-${placement}`}>
                  <Popover.Title as="h3">{`Popover ${placement}`}</Popover.Title>
                  <Popover.Content>
                    <strong>Holy guacamole!</strong> Check this info.
                  </Popover.Content>
                </Popover>
              }
            >
              <Button variant="secondary">Popover on {placement}</Button>
            </OverlayTrigger>{' '}
          </>
        ))}
      <div className='compo-description'>
        <h4>Description</h4>
        <p>Popover Component, which can be associated with any control to show info, which will be triggred by an action. i.e., click/hover</p>
        <h5>Steps</h5>
        <ul>
          <li><strong>Step 1 :</strong> Install Dependency to your project root folder : <code>npm install react-bootstrap --save-dev</code></li>
          <li><strong>Step 2 :</strong> Import components, for Popover: <code>import Popover from 'react-bootstrap/Popover';</code><br/> for OverlayTrigger <code>
          import OverlayTrigger from 'react-bootstrap/OverlayTrigger';</code></li>
          <li><strong>Step 3 :</strong> Refer JSX code under the 'Code' tab, to understand the usage of component.</li>
        </ul>
      </div>
    </div>
  );
}

function RbPopoverCode(){
  useEffect(() => Prism.highlightAll(),[]);
  return (
    <div className='jsx-code-wrapper'>
      <h4>JSX</h4>
      <pre style={{marginRight: '20px', background: '#fff'}}>
        <code className='language-markup'>
            {`/* Trigger On onClick trigger="click", onHover trigger="hover" */

const popover = (
  <Popover id="popover-basic">
    <Popover.Title as="h3">Popover right</Popover.Title>
    <Popover.Content>
      And here's some <strong>amazing</strong> content. It's very engaging.
      right?
    </Popover.Content>
  </Popover>
);

const PopoverExample = () => (
  <OverlayTrigger trigger="click" placement="right" overlay={popover}>
    <Button variant="success">Click me to see</Button>
  </OverlayTrigger>
);
`}
                  
      </code>
    </pre>
  </div>
  );
}

export { RbPopover, RbPopoverCode };

