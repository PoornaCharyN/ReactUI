import React, { useEffect } from 'react';
import CustomSeparator from './CustomSeparatorBreadcrumb';
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import Prism from "prismjs";
import '../../prism.css';

function handleClick(event) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}

function MatBreadcrumbs() {
  return (
    <div className='demo-wrapper'>
      <div><strong>Simple Breadcrumbs</strong></div>
      <>
        <Breadcrumbs aria-label="breadcrumb" style={{marginTop:'10px'}}>
          <Link color="inherit" href="/" onClick={handleClick}>
            Material-UI
          </Link>
          <Link color="inherit" href="/getting-started/installation/" onClick={handleClick}>
            Core
          </Link>
          <Typography color="textPrimary">Breadcrumb</Typography>
        </Breadcrumbs>
      </>
      <div style={{marginTop:'10px'}}><strong>Active last breadcrumb</strong></div>
      <Breadcrumbs aria-label="breadcrumb" style={{marginTop:'10px'}}>
        <Link color="inherit" href="/" onClick={handleClick}>
          Material-UI
        </Link>
        <Link color="inherit" href="/getting-started/installation/" onClick={handleClick}>
          Core
        </Link>
        <Link
          color="textPrimary"
          href="/components/breadcrumbs/"
          onClick={handleClick}
          aria-current="page"
        >
          Breadcrumb
        </Link>
      </Breadcrumbs>
      <div style={{marginTop:'10px'}}><strong>Custom separator</strong></div>
      <div style={{marginTop:'10px'}} >
        <CustomSeparator />
      </div>
      <div className='compo-description'>
        <h4>Description</h4>
        <p>Indicate the current page’s location within a navigational hierarchy that automatically adds separators via CSS</p>
        <h5>Steps</h5>
        <ul>
          <li><strong>Step 1 :</strong> Install Dependency to your project root folder : <code>npm install @material-ui/core --save-dev</code></li>
          <li><strong>Step 2 :</strong> Import components, Breadcrumbs: <code>import Breadcrumbs from '@material-ui/core/Breadcrumbs';</code><br/>
          For Typography: <code>import Typography from '@material-ui/core/Typography';</code><br/>
          For Link: <code>import Link from '@material-ui/core/Link';</code></li>
          <li><strong>Step 3 :</strong> Refer JSX code under the 'Code' tab, to understand the usage of component.</li>
        </ul>
      </div>
      
    </div>
  );
}

function MatBreadcrumbsCode() {
  useEffect(()=> Prism.highlightAll(), []);

  return (
    <div className='jsx-code-wrapper'>
      <h4>JSX</h4>
      <pre style={{marginRight: '20px', background: '#fff'}}>
        <code className='language-javascript'>{
`function handleClick(event) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}

function SimpleBreadcrumbs() {
  return (`}</code>
  <code className='language-markup'>{`
    <Breadcrumbs aria-label="breadcrumb">
      <Link color="inherit" href="/" onClick={handleClick}>
        Material-UI
      </Link>
      <Link color="inherit" href="/somepath/someotherroute/" onClick={handleClick}>
        Core
      </Link>
      <Typography color="textPrimary">Breadcrumb</Typography>
    </Breadcrumbs>`}</code>
    <code className='language-javascript'>{`
  );
}`}</code>

  </pre>
  </div>
  );
}

export { MatBreadcrumbs, MatBreadcrumbsCode };