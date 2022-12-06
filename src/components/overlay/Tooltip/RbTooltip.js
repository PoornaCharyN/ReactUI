import React, { useState, useRef, useEffect } from 'react';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Overlay from 'react-bootstrap/Overlay';
import Tooltip from 'react-bootstrap/Tooltip';
import Button from 'react-bootstrap/Button';
import Prism from "prismjs";
import '../../prism.css';

function renderTooltip(props) {
  return (
    <Tooltip id="button-tooltip" {...props}>
      Simple tooltip
    </Tooltip>
  );
}

function RbTooltip() {
  const [show, setShow] = useState(false);
  const target = useRef(null);
  return (
    <div className='demo-wrapper'>
      <div style={{marginBottom: '10px'}}>Tooltip on Hover of Trigger Control(Button)</div>
      <OverlayTrigger
          placement="right"
          delay={{ show: 250, hide: 400 }}
          overlay={renderTooltip}
        >
          <Button variant="success">Hover me to see</Button>
        </OverlayTrigger>
        <div style={{marginBottom: '10px', marginTop: '10px'}}>Tooltip on Click of Trigger Control(Button)</div>
        <>
          <Button ref={target} onClick={() => setShow(!show)}>
              Click me!
          </Button>
          <Overlay target={target.current} show={show} placement="right">
            {(props) => (
              <Tooltip id="overlay-example" {...props}>
                My Tooltip
              </Tooltip>
            )}
          </Overlay>
        </>
        <div style={{marginBottom: '10px', marginTop: '10px'}}>Tooltip on various positions</div>
        <>
          {['top', 'right', 'bottom', 'left'].map((placement) => (
            <>
            <OverlayTrigger
              key={placement}
              placement={placement}
              style={{marginRight: '10px'}}
              overlay={
                <Tooltip id={`tooltip-${placement}`}>
                  Tooltip on <strong>{placement}</strong>.
                </Tooltip>
              }
            >
              <Button variant="secondary">Tooltip on {placement}</Button>
            </OverlayTrigger>{' '}
            </>
          ))}
        </>

      <div className='compo-description'>
        <h4>Description</h4>
        <p>Tooltips display informative text when users hover over, focus on, or tap an element.</p>
        <h5>Steps</h5>
        <ul>
          <li><strong>Step 1 :</strong> Install Dependency to your project root folder : <code>npm install react-bootstrap --save-dev</code></li>
          <li><strong>Step 2 :</strong> Import components, for Tooltip: <code>import Tooltip from 'react-bootstrap/Tooltip';</code><br/> for Overlay and OverlayTrigger <code>import Overlay from 'react-bootstrap/Overlay';</code><br/><code>
          import OverlayTrigger from 'react-bootstrap/OverlayTrigger';</code></li>
          <li><strong>Step 3 :</strong> Refer JSX code under the 'Code' tab, to understand the usage of component.</li>
        </ul>
      </div>
    </div>
  );
}

function RbTooltipCode() {
  useEffect(()=> Prism.highlightAll(), []);
  return (
    <div className='jsx-code-wrapper'>
      <h4>JSX</h4>
      <pre style={{marginRight: '20px', background: '#fff'}}>
        <code className='language-javascript'> {`/* Tooltip on Hover */
function renderTooltip(props) {
  return (`}
        </code>
        <code className='language-markup'>{`
    <Tooltip id="button-tooltip" {...props}>
      Simple tooltip
    </Tooltip>`}</code>
        <code className='language-javascript'>{`
    );
  }`}</code>
  <code className='language-markup'>{`
const Example = () => (
  <OverlayTrigger
    placement="right"
    delay={{ show: 250, hide: 400 }}
    overlay={renderTooltip}
  >
    <Button variant="success">Hover me to see</Button>
  </OverlayTrigger>
);`}</code>
<code className='language-javascript'>{`

/* Tooltip on Click */
function TooltipOnClick() {
  const [show, setShow] = useState(false);
  const target = useRef(null);
  const handleClick = () => setShow(!show);

  return (`}</code>
  <code className='language-markup'>{`
  <>
    <Button ref={target} onClick={handleClick}>
      Click me!
    </Button>
    <Overlay target={target.current} show={show} placement="right">
      {(props) => (
        <Tooltip id="overlay-example" {...props}>
          My Tooltip
        </Tooltip>
      )}
    </Overlay>
  </>`}</code>
  <code className='language-javascript'>{`
  );
}`}</code>
      </pre>
    </div>
  );
}

export { RbTooltip, RbTooltipCode };