import React, { useState, useEffect } from 'react';
import PositionedToast from './PositionedToast';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import MuiAlert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';
import Prism from "prismjs";
import '../../prism.css';


function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: '90%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));

function MatToast(){
  const [open, setOpen] = useState(false);
  const [cusopen, setCusopen] = useState(false);
  const classes = useStyles();

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  const handleCusClick = () => {
    setCusopen(true);
  };

  const handleCusClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setCusopen(false);
  };

  return (
    <div className='demo-wrapper'>
      <div><strong>A basic toast that aims to reproduce Google Keep's toast behavior.</strong></div>
      <div style={{marginTop: '10px'}}>
        <Button onClick={handleClick}>Open simple toast</Button>
        <Snackbar
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          open={open}
          autoHideDuration={6000}
          onClose={handleClose}
          message="Note archived"
          action={
            <>
              <Button color="secondary" size="small" onClick={handleClose}>
                UNDO
              </Button>
              <IconButton size="small" aria-label="close" color="inherit" onClick={handleClose}>
                <CloseIcon fontSize="small" />
              </IconButton>
            </>
          }
        />
      </div>
      <div><strong>Customized Toast</strong></div>
      <div className={classes.root} style={{marginTop:'10px'}}>
        <Button variant="outlined" onClick={handleCusClick}>
          Open success Toast
        </Button>
        <Snackbar open={cusopen} autoHideDuration={3000} onClose={handleCusClose}>
          <Alert onClose={handleCusClose} severity="success">
            This is a success message!
          </Alert>
        </Snackbar>
      </div>
      <div style={{margin:'10px 0 10px 0'}}><strong>Positioned Toasts</strong></div>
      <PositionedToast />
      <div className='compo-description'>
        <h4>Description</h4>
        <p>Toasts are lightweight notifications, provides brief messages about app processes</p>
        <h5>Steps</h5>
        <ul>
          <li><strong>Step 1 :</strong> Install Dependency to your project root folder : <code>npm install @material-ui/core @material-ui/lab --save-dev</code></li>
          <li><strong>Step 2 :</strong> Import components, for Toast: <code>import Snackbar from '@material-ui/core/Snackbar';</code> <br/>
          For IconButton : <code>import IconButton from '@material-ui/core/IconButton';</code><br/>
          For CloseIcon: <code>import CloseIcon from '@material-ui/icons/Close';</code><br/>
          For MuiAlert: <code>import MuiAlert from '@material-ui/lab/Alert';</code></li>
          <li><strong>Step 3 :</strong> Refer JSX code under the 'Code' tab, to understand the usage of component.</li>
        </ul>
      </div>
    </div>
  );
}

function MatToastCode(){
  useEffect(() => Prism.highlightAll(), []);
  return (
    <div className='jsx-code-wrapper'>
      <h4>JSX</h4>
      <pre style={{marginRight: '20px', background: '#fff'}}>
        <code className='language-javascript'>{`function SimpleToast() {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  return (`}</code><code className='language-markup'>{`
    <div>
      <Button onClick={handleClick}>Open Simple Toast</Button>
      <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        message="Note archived"
        action={
          <React.Fragment>
            <Button color="secondary" size="small" onClick={handleClose}>
              UNDO
            </Button>
            <IconButton size="small" aria-label="close" color="inherit" onClick={handleClose}>
              <CloseIcon fontSize="small" />
            </IconButton>
          </React.Fragment>
        }
      />`}</code><code className='language-javascript'>{`
    </div>
  );
}`}
    </code>
  </pre>
  </div>
  );
}

export { MatToast, MatToastCode };