import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';
import Prism from "prismjs";
import '../../prism.css';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      marginTop: theme.spacing(2),
    },
  },
}));

function MatPagination() {
  const classes = useStyles();
  return(
    <div className='demo-wrapper'>
      <div><strong>Basic pagination with variations</strong></div>
      <div className={classes.root}>
        <Pagination count={10} />
        <Pagination count={10} color="primary" />
        <Pagination count={10} color="secondary" />
        <Pagination count={10} disabled />
      </div>
      <div style={{marginTop: '10px'}}><strong>Outlined pagination with variations</strong></div>
      <div className={classes.root}>
        <Pagination count={10} variant="outlined" />
        <Pagination count={10} variant="outlined" color="primary" />
        <Pagination count={10} variant="outlined" color="secondary" />
        <Pagination count={10} variant="outlined" disabled />
      </div>
      <div style={{marginTop: '10px'}}><strong>Rounded pagination</strong></div>
      <div className={classes.root}>
        <Pagination count={10} shape="rounded" />
        <Pagination count={10} variant="outlined" shape="rounded" />
      </div>
      <div style={{marginTop: '10px'}}><strong>Pagination Sizes</strong></div>
      <div className={classes.root}>
        <Pagination count={10} size="small" />
        <Pagination count={10} />
        <Pagination count={10} size="large" />
      </div>
      <div className='compo-description'>
        <h4>Description</h4>
        <p>A set of presentational components for building pagination UI,enables the user to select a specific page from a range of pages.</p>
        <h5>Steps</h5>
        <ul>
          <li><strong>Step 1 :</strong> Install Dependency to your project root folder : <code>npm install @material-ui/core --save-dev</code></li>
          <li><strong>Step 2 :</strong> Import components, Pagination: <code>import Pagination from '@material-ui/lab/Pagination';</code></li>
          <li><strong>Step 3 :</strong> Refer JSX code under the 'Code' tab, to understand the usage of component.</li>
        </ul>
      </div>
    </div>
  );
}

function MatPaginationCode() {
  useEffect(()=> Prism.highlightAll(), []);
  return (
    <div className='jsx-code-wrapper'>
      <h4>JSX</h4>
      <pre style={{marginRight: '20px', background: '#fff'}}>
        <code className='language-markup'>{
`<>
  <label>Basic pagination with variations</label>
  <Pagination count={10} />
  <Pagination count={10} color="primary" />
  <Pagination count={10} color="secondary" />
  <Pagination count={10} disabled />

  <label>Outlined pagination with variations</label>
  <Pagination count={10} variant="outlined" />
  <Pagination count={10} variant="outlined" color="primary" />
  <Pagination count={10} variant="outlined" color="secondary" />
  <Pagination count={10} variant="outlined" disabled />

  <label>Rounded Pagination</label>
  <Pagination count={10} shape="rounded" />
  <Pagination count={10} variant="outlined" shape="rounded" />

  <label>Pagination Sizes</label>
  <Pagination count={10} size="small" />
  <Pagination count={10} />
  <Pagination count={10} size="large" />
</>`}
    </code>
  </pre>
  </div>
  );
}

export { MatPagination, MatPaginationCode };