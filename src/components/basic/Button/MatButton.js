import React, { useEffect } from 'react';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import DeleteIcon from '@material-ui/icons/Delete';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import KeyboardVoiceIcon from '@material-ui/icons/KeyboardVoice';
import Icon from '@material-ui/core/Icon';
import SaveIcon from '@material-ui/icons/Save';
import IconButton from '@material-ui/core/IconButton';
import AlarmIcon from '@material-ui/icons/Alarm';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import Prism from "prismjs";
import '../../prism.css';


const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  }
}));

function MatButton() {
  const classes = useStyles();
  return (  
    <div className='demo-wrapper'>
      <div>Styled Buttons with different values for variant prop.  i.e., <code>variant="primary"</code></div>
      <br/>
      <div>
        <Button variant="contained">Default</Button> {' '}
        <Button variant="contained" color="primary">
          Primary
        </Button>{' '}
        <Button variant="contained" color="secondary">
          Secondary
        </Button>{' '}
        <Button variant="contained" disabled>
          Disabled
        </Button>{' '}
        <Button variant="contained" color="primary" href="#contained-buttons">
          Link
        </Button>{' '}
      </div>
      <br/>
      <div>Outline Buttons with no background color, with different values for variant prop. i.e., <code>variant="outlined" color="primary"</code></div>
      <br/>
      <Button variant="outlined">Default</Button>{' '}
      <Button variant="outlined" color="primary">
        Primary
      </Button>{' '}
      <Button variant="outlined" color="secondary">
        Secondary
      </Button>{' '}
      <Button variant="outlined" disabled>
        Disabled
      </Button>{' '}
      <Button variant="outlined" color="primary" href="#outlined-buttons">
        Link
      </Button>
      <br/>
      <br/>
      <div>Text Buttons, typically used for less-pronounced actions, such as in dialogs, cards</div>
      <br/>
      <Button>Default</Button>{' '}
      <Button color="primary">Primary</Button>{' '}
      <Button color="secondary">Secondary</Button>{' '}
      <Button disabled>Disabled</Button>{' '}
      <Button href="#text-buttons" color="primary">
        Link
      </Button>
      <br/>
      <br/>
      <div>Buttons with Icon and Label</div>
      <Button
        variant="contained"
        color="secondary"
        className={classes.button}
        startIcon={<DeleteIcon />}
      >
        Delete
      </Button>
      {/* This Button uses a Font Icon, see the installation instructions in the Icon component docs. */}
      <Button
        variant="contained"
        color="primary"
        className={classes.button}
        endIcon={<Icon>send</Icon>}
      >
        Send
      </Button>
      <Button
        variant="contained"
        color="default"
        className={classes.button}
        startIcon={<CloudUploadIcon />}
      >
        Upload
      </Button>
      <Button
        variant="contained"
        disabled
        color="secondary"
        className={classes.button}
        startIcon={<KeyboardVoiceIcon />}
      >
        Talk
      </Button>
      <Button
        variant="contained"
        color="primary"
        size="small"
        className={classes.button}
        startIcon={<SaveIcon />}
      >
        Save
      </Button>
      <Button
        variant="contained"
        color="primary"
        size="large"
        className={classes.button}
        startIcon={<SaveIcon />}
      >
        Save
      </Button>
      <br/>
      <br/>
      <div>Icon Buttons</div>
      <br/>
      <div className={classes.root}>
        <IconButton aria-label="delete">
          <DeleteIcon />
        </IconButton>
        <IconButton aria-label="delete" disabled color="primary">
          <DeleteIcon />
        </IconButton>
        <IconButton color="secondary" aria-label="add an alarm">
          <AlarmIcon />
        </IconButton>
        <IconButton color="primary" aria-label="add to shopping cart">
          <AddShoppingCartIcon />
        </IconButton>
      </div>
      <div className='compo-description'>
        <h4>Description</h4>
        <p>Button is a Component which can be used in various use cases, above are the custom buttons for actions in forms, dialogs, and more with support for multiple sizes, states, and more.</p>
        <h5>Steps</h5>
        <ul>

          <li><strong>Step 1 :</strong> Install Dependency in your project root folder : <code>npm install @material-ui/core --save-dev</code></li>
          <li><strong>Step 2 :</strong> Import component in view where ever its necessary: <code>{`import { Button } from '@material-ui/core';`}</code><br/>
          And for Icons:<code>{`import Icon from '@material-ui/core/Icon';';`}</code> <br/>
          And for Icon Button : <code>{`import IconButton from '@material-ui/core/IconButton';`}</code> </li>
          <li><strong>Step 3 :</strong> Refer JSX code under the 'Code' tab, to understand the usage of different variations of the Button.</li>
      </ul>

      </div>
    </div>
  )
}

function MatButtonCode() {
  useEffect(() => Prism.highlightAll(), []);
  return (
    <div className='jsx-code-wrapper'>
      <h4>JSX</h4>
      <pre style={{marginRight: '20px', background: '#fff'}}>
        <code className='language-javascript'>{`import { Button } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';


function MaterialButtons() {
  return (`}</code>
  <code className='language-markup'>
  {`
  <>
    <Button variant="contained">Default</Button>
    <Button variant="outlined">Default</Button>
    <Button color="primary">Primary</Button>
    <Button
      variant="contained"
      color="secondary"
      className="some-class"
      startIcon={<DeleteIcon />}
    > Delete
    </Button>
    <IconButton aria-label="delete">
      <DeleteIcon />
    </IconButton>
  </>`}
  </code>
  <code className='language-javascript'>
    {`
  );
}`}
  </code>
    </pre>
  </div>
  );
}
export { MatButton, MatButtonCode };