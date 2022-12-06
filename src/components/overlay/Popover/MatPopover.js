import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Popover from '@material-ui/core/Popover';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Prism from "prismjs";
import '../../prism.css';

const useStyles = makeStyles((theme) => ({
  typography: {
    padding: theme.spacing(2),
  },
  popover: {
    pointerEvents: 'none',
  },
  paper: {
    padding: theme.spacing(1),
  },
}));

function MatPopover(){
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [anchorEl1, setAnchorEl1] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handlePopoverOpen = (event) => {
    setAnchorEl1(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl1(null);
  };

  const open1 = Boolean(anchorEl1);
  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <div className='demo-wrapper'>
      <div><strong>Simple Popover</strong></div><br/>
      <div style={{marginLeft: '25px'}}>
        <Button aria-describedby={id} variant="contained" color="primary" onClick={handleClick}>
          Open Popover
        </Button>
        <Popover
          id={id}
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'center',
          }}
        >
          <Typography className={classes.typography}>The content of the Popover.</Typography>
        </Popover>
      </div><br/>
      <div><strong>Mouse over interaction</strong></div><br/>
      <div style={{marginLeft: '25px'}}>
        <Typography
          aria-owns={open1 ? 'mouse-over-popover' : undefined}
          aria-haspopup="true"
          onMouseEnter={handlePopoverOpen}
          onMouseLeave={handlePopoverClose}
        >
          Hover with a Popover.
        </Typography>
        <Popover
          id="mouse-over-popover"
          className={classes.popover}
          classes={{
            paper: classes.paper,
          }}
          open={open1}
          anchorEl={anchorEl1}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
          onClose={handlePopoverClose}
          disableRestoreFocus
        >
          <Typography>I use Popover.</Typography>
        </Popover>
      </div>
      <div className='compo-description'>
        <h4>Description</h4>
        <p>Popover Component, which can be associated with any control to show info, which will be triggred by an action. i.e., click/hover</p>
        <h5>Steps</h5>
        <ul>
          <li><strong>Step 1 :</strong> Install Dependency to your project root folder : <code>npm install @material-ui/core --save-dev</code></li>
          <li><strong>Step 2 :</strong> Import components, for Popover: <code>import Popover from '@material-ui/core/Popover';</code><br/> 
          For Trigger: <code>import Button from '@material-ui/core/Button';</code><br/> For Popup Content: 
          <code>import Typography from '@material-ui/core/Typography';</code><br/> For Material's way Styling: <code>
          {`import { makeStyles } from '@material-ui/core/styles';`}</code></li>
          <li><strong>Step 3 :</strong> Refer JSX code under the 'Code' tab, to understand the usage of component.</li>
        </ul>
      </div>
    </div>
  );
}

function MatPopoverCode() {
  useEffect(()=> Prism.highlightAll(), []);
  return (
    <div className='jsx-code-wrapper'>
      <h4>JSX</h4>
      <pre style={{marginRight: '20px', background: '#fff'}}>
        <code className='language-javascript'>{`function Popover() {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  
  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (`}</code>
  <code className='language-markup'>{`
    <div>
      <Button aria-describedby={id} variant="contained" color="primary" onClick={handleClick}>
        Open Popover
      </Button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        <div>The content of the Popover.</div>
      </Popover>
    </div>`}</code>
  <code className='language-javascript'>{`
   );
  }`}</code>
      </pre>
    </div>
  );
}

export { MatPopover, MatPopoverCode };