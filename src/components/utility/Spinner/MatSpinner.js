import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import Prism from "prismjs";
import '../../prism.css';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > * + *': {
      marginLeft: theme.spacing(2),
    },
  },
}));

function MatSpinner() {
  const classes = useStyles();
  return (
    <div className='demo-wrapper'>
        <div><strong>Default and Secondary Spinners (<code>color='secondary'</code> prop) </strong></div>
        <div className={classes.root} style={{marginTop:'10px'}}>
          <CircularProgress />
          <CircularProgress color="secondary" />
        </div>
        <div className='compo-description'>
        <h4>Description</h4>
        <p>Spinner Component, Spinners can be used to show the loading state in our Applications.</p>
        <h5>Steps</h5>
        <ul>
          <li><strong>Step 1 :</strong> Install Dependency to your project root folder : <code>npm install @material-ui/core</code></li>
          <li><strong>Step 2 :</strong> Import components, for Spinner(CircularProgress): <code>import CircularProgress from '@material-ui/core/CircularProgress';</code></li>
          <li><strong>Step 3 :</strong> Refer JSX code under the 'Code' tab, to understand the usage of component.</li>
        </ul>
      </div>
    </div>
  );
}

function MatSpinnerCode() {
  useEffect(() => Prism.highlightAll(), []);
  return (
    <div className='jsx-code-wrapper'>
      <h4>JSX</h4>
      <pre style={{marginRight: '20px', background: '#fff'}}>
        <code className='language-javascript'>{`function Spinners() {
  return ( `}</code><code className='language-markup'>{`
    <>
      <CircularProgress />
      <CircularProgress color="secondary" />
    </>`}</code><code className='language-javascript'>{`
  );
}`}
    </code>
  </pre>
  </div>
  );
}

export { MatSpinner, MatSpinnerCode };