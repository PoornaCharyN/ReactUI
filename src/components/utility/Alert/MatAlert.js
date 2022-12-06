import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Alert, AlertTitle } from '@material-ui/lab';
import IconButton from '@material-ui/core/IconButton';
import Collapse from '@material-ui/core/Collapse';
import Button from '@material-ui/core/Button';
import CloseIcon from '@material-ui/icons/Close';
import Prism from "prismjs";
import '../../prism.css';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '90%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));

function MatAlert() {
  const [open, setOpen] = useState(true);
  const classes = useStyles();

  return (
    <div className='demo-wrapper'>
      <div style={{marginBottom: '10px'}}><strong>Alert with Trigger Button</strong></div>
      <div className={classes.root}>
        <Collapse in={open}>
          <Alert
            action={
              <IconButton
                aria-label="close"
                color="inherit"
                size="small"
                onClick={() => {
                  setOpen(false);
                }}
              >
                <CloseIcon fontSize="inherit" />
              </IconButton>
            }
          >
            Close me!
          </Alert>
        </Collapse>
        <Button
          disabled={open}
          variant="outlined"
          onClick={() => {
            setOpen(true);
          }}
        >
          Re-open
        </Button>
      </div>
      <div style={{marginTop: '10px'}}><strong>Simple Alerts with four severity levels </strong></div>
      <div className={classes.root} style={{marginTop: '10px'}}>
        <Alert severity="error">This is an error alert — check it out!</Alert>
        <Alert severity="warning">This is a warning alert — check it out!</Alert>
        <Alert severity="info">This is an info alert — check it out!</Alert>
        <Alert severity="success">This is a success alert — check it out!</Alert>
      </div>
      <div style={{marginTop: '10px'}}><strong>Alert with <code>AlertTitle</code> component </strong></div>
      <div className={classes.root} style={{marginTop: '10px'}}>
        <Alert severity="error">
          <AlertTitle>Error</AlertTitle>
          This is an error alert — <strong>check it out!</strong>
        </Alert>
        <Alert severity="warning">
          <AlertTitle>Warning</AlertTitle>
          This is a warning alert — <strong>check it out!</strong>
        </Alert>
        <Alert severity="info">
          <AlertTitle>Info</AlertTitle>
          This is an info alert — <strong>check it out!</strong>
        </Alert>
        <Alert severity="success">
          <AlertTitle>Success</AlertTitle>
          This is a success alert — <strong>check it out!</strong>
        </Alert>
      </div>
      <div className='compo-description'>
        <h4>Description</h4>
        <p>An alert displays a short, important message in a way that attracts the user's attention without interrupting the user's task.</p>
        <h5>Steps</h5>
        <ul>
          <li><strong>Step 1 :</strong> Install Dependency to your project root folder : <code>npm install @material-ui/core @material-ui/lab --save-dev</code></li>
          <li><strong>Step 2 :</strong> Import components, for Alert & AlertTitle: <code>{`import { Alert, AlertTitle } from '@material-ui/lab';`}</code><br/>
          For IconButton: <code>import IconButton from '@material-ui/core/IconButton';</code><br/>
          For Collapse: <code>import Collapse from '@material-ui/core/Collapse';</code><br/>
          For Button: <code>import Button from '@material-ui/core/Button';</code><br/>
          For CloseIcon: <code>import CloseIcon from '@material-ui/icons/Close';</code></li>
          <li><strong>Step 3 :</strong> Refer JSX code under the 'Code' tab, to understand the usage of component.</li>
        </ul>
      </div>
    </div>
  );
}

function MatAlertCode(){
  useEffect(()=> Prism.highlightAll(), []);
  return (
    <div className='jsx-code-wrapper'>
      <h4>JSX</h4>
      <pre style={{marginRight: '20px', background: '#fff'}}>
        <code className='language-javascript'>{`function TriggerAlert() {
  const [open, setOpen] = React.useState(true);
  const handleClick = () => setOpen(true);
  
  return (`}</code>
  <code className='language-markup'>{`
    <div className={yourOwnClass}>
      <Collapse in={open}>
        <Alert
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                setOpen(false);
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
        >
          Close me!
        </Alert>
      </Collapse>
      <Button
        disabled={open}
        variant="outlined"
        onClick={handleClick}
      >
        Re-open
      </Button>
    </div>`}</code>
    <code>{`
  );
}`}</code>
  </pre>
  </div>
  );
}

export { MatAlert, MatAlertCode};