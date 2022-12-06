import React, { useEffect } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { useAccordionToggle } from 'react-bootstrap/AccordionToggle';
import Prism from "prismjs";
import '../../prism.css';
import './RbAccordion.scss';

function CustomToggle({ children, eventKey }) {
  const decoratedOnClick = useAccordionToggle(eventKey, () =>
    console.log('totally custom!'),
  );

  return (
    <button
      type="button"
      style={{ backgroundColor: 'pink' }}
      onClick={decoratedOnClick}
    >
      {children}
    </button>
  );
}

function RbAccordion(){
  return (
    <div className='demo-wrapper rb-accordion-class'>
      <div style={{marginBottom:'10px'}}>{`Basic Accordion`}</div>
      <div style={{width:'600px'}}>
        <Accordion defaultActiveKey="0">
          <Card>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="0">
                Click me!
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="0">
              <Card.Body>Hello! I'm the body</Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="1">
                Click me!
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="1">
              <Card.Body>Hello! I'm another body</Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
        <div style={{marginTop:'10px', marginBottom: '10px'}}>{`Entire Header Clickable and Fully Colapsed State`}</div>
        <Accordion >
          <Card>
            <Accordion.Toggle as={Card.Header} style={{color: 'black'}} eventKey="0">
              Click me!
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="0">
              <Card.Body>Hello! I'm the body</Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Accordion.Toggle as={Card.Header} style={{color: 'black'}} eventKey="1">
              Click me!
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="1">
              <Card.Body>Hello! I'm another body</Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
        <div style={{marginTop:'10px', marginBottom: '10px'}}>{`Custom Accordion toggle components`}</div>
        <Accordion defaultActiveKey="0">
          <Card>
            <Card.Header>
              <CustomToggle eventKey="0">Click me!</CustomToggle>
            </Card.Header>
            <Accordion.Collapse eventKey="0">
              <Card.Body>Hello! I'm the body</Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Card.Header>
              <CustomToggle eventKey="1">Click me!</CustomToggle>
            </Card.Header>
            <Accordion.Collapse eventKey="1">
              <Card.Body>Hello! I'm another body</Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      </div>
      
      <div className='compo-description'>
        <h4>Description</h4>
        <p>Accordions provide a way to restrict Card components to only open one at a time.</p>
        <h5>Steps</h5>
        <ul>
          <li><strong>Step 1 :</strong> Install Dependency to your project root folder : <code>npm install react-bootstrap --save-dev</code></li>
          <li><strong>Step 2 :</strong> Import components, for Accordion: <code>import Alert from 'react-bootstrap/Accordion';</code> <br/> And to use
          accordion custom toggle <code>{`import { useAccordionToggle } from 'react-bootstrap/AccordionToggle';`}</code></li>
          <li><strong>Step 3 :</strong> Refer JSX code under the 'Code' tab, to understand the usage of component.</li>
      </ul>
      </div>
    </div>
  );
}

function RbAccordionCode(){
  useEffect(()=> Prism.highlightAll(), []);
  return (
   <div className='jsx-code-wrapper'>
      <h4>JSX</h4>
      <pre style={{marginRight: '20px', background: '#fff'}}>
        <code className='language-markup'>{`<Accordion defaultActiveKey="0">
<Card>
  <Card.Header>
    <Accordion.Toggle as={Button} variant="link" eventKey="0">
      Click me!
    </Accordion.Toggle>
  </Card.Header>
  <Accordion.Collapse eventKey="0">
    <Card.Body>Hello! I'm the body</Card.Body>
  </Accordion.Collapse>
</Card>
<Card>
  <Card.Header>
    <Accordion.Toggle as={Button} variant="link" eventKey="1">
      Click me!
    </Accordion.Toggle>
  </Card.Header>
  <Accordion.Collapse eventKey="1">
    <Card.Body>Hello! I'm another body</Card.Body>
  </Accordion.Collapse>
</Card>
</Accordion>`} 
    </code>
  </pre>
</div>
  )
}

export { RbAccordion, RbAccordionCode };