import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Prism from "prismjs";
import '../../prism.css';
import './MatInput.scss';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
  root1: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
  root2: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: 200,
    },
  }
}));

function MatInput() {
  const classes = useStyles();
  const [value, setValue] = useState('Controlled');

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  return (
    <div className='demo-wrapper'>
      <div><strong>Input Fields: standard, filled and outlined</strong></div>
      <form className={classes.root} noValidate autoComplete="off">
        <TextField id="standard-basic" label="Standard" className='inputStandardDiv'/>
        <TextField id="filled-basic" label="Filled" variant="filled" />
        <TextField id="outlined-basic" label="Outlined" variant="outlined" />
      </form>
      <br/>
      <div><strong>Input fields with props <code>required, disabled, type, helperText</code></strong></div>
      <br/>
      <form className={classes.root1} noValidate autoComplete="off" style={{marginRight:'20px'}}>
        <div>
          <TextField required id="standard-required" label="Required" defaultValue="Hello World" />
          <TextField disabled id="standard-disabled" label="Disabled" defaultValue="Hello World" />
          <TextField
            id="standard-password-input"
            label="Password"
            type="password"
            autoComplete="current-password"
            className='inputStandardDiv'
          />
          <TextField
            id="standard-read-only-input"
            label="Read Only"
            defaultValue="Hello World"
            InputProps={{
              readOnly: true,
            }}
          />
          <TextField
            id="standard-number"
            label="Number"
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField id="standard-search" label="Search field" type="search" className='inputStandardDiv' />
          <TextField
            id="standard-helperText"
            label="Helper text"
            defaultValue="Default Value"
            helperText="Some important text"
          />
        </div>
        <div>
          <TextField
            required
            id="filled-required"
            label="Required"
            defaultValue="Hello World"
            variant="filled"
          />
          <TextField
            disabled
            id="filled-disabled"
            label="Disabled"
            defaultValue="Hello World"
            variant="filled"
          />
          <TextField
            id="filled-password-input"
            label="Password"
            type="password"
            autoComplete="current-password"
            variant="filled"
          />
          <TextField
            id="filled-read-only-input"
            label="Read Only"
            defaultValue="Hello World"
            InputProps={{
              readOnly: true,
            }}
            variant="filled"
          />
          <TextField
            id="filled-number"
            label="Number"
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
            variant="filled"
          />
          <TextField id="filled-search" label="Search field" type="search" variant="filled" />
          <TextField
            id="filled-helperText"
            label="Helper text"
            defaultValue="Default Value"
            helperText="Some important text"
            variant="filled"
          />
        </div>
        <div>
          <TextField
            required
            id="outlined-required"
            label="Required"
            defaultValue="Hello World"
            variant="outlined"
          />
          <TextField
            disabled
            id="outlined-disabled"
            label="Disabled"
            defaultValue="Hello World"
            variant="outlined"
          />
          <TextField
            id="outlined-password-input"
            label="Password"
            type="password"
            autoComplete="current-password"
            variant="outlined"
          />
          <TextField
            id="outlined-read-only-input"
            label="Read Only"
            defaultValue="Hello World"
            InputProps={{
              readOnly: true,
            }}
            variant="outlined"
          />
          <TextField
            id="outlined-number"
            label="Number"
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
            variant="outlined"
          />
          <TextField id="outlined-search" label="Search field" type="search" variant="outlined" />
          <TextField
            id="outlined-helperText"
            label="Helper text"
            defaultValue="Default Value"
            helperText="Some important text"
            variant="outlined"
          />
        </div>
    </form>
    <br/>
    <div><strong>Input field with validation: using the props <code>error & helperText</code></strong></div>
    <br/>
    <form className={classes.root2} noValidate autoComplete="off">
      <div>
        <TextField error id="standard-error" label="Error" defaultValue="Hello World" />
        <TextField
          error
          id="standard-error-helper-text"
          label="Error"
          defaultValue="Hello World"
          helperText="Incorrect entry."
        />
      </div>
      <div>
        <TextField
          error
          id="filled-error"
          label="Error"
          defaultValue="Hello World"
          variant="filled"
        />
        <TextField
          error
          id="filled-error-helper-text"
          label="Error"
          defaultValue="Hello World"
          helperText="Incorrect entry."
          variant="filled"
        />
      </div>
      <div>
        <TextField
          error
          id="outlined-error"
          label="Error"
          defaultValue="Hello World"
          variant="outlined"
        />
        <TextField
          error
          id="outlined-error-helper-text"
          label="Error"
          defaultValue="Hello World"
          helperText="Incorrect entry."
          variant="outlined"
        />
      </div>
    </form>
    <br/>
    <div><strong>The <code>multiline</code> prop transforms the text field into a textarea</strong></div>
    <br/>
    <form className={classes.root1} noValidate autoComplete="off">
      <div>
        <TextField
          id="standard-multiline-flexible"
          label="Multiline"
          multiline
          rowsMax={4}
          value={value}
          onChange={handleChange}
        />
        <TextField
          id="standard-textarea"
          label="Multiline Placeholder"
          placeholder="Placeholder"
          multiline
        />
        <TextField
          id="standard-multiline-static"
          label="Multiline"
          multiline
          rows={4}
          defaultValue="Default Value"
        />
      </div>
      <div>
        <TextField
          id="filled-multiline-flexible"
          label="Multiline"
          multiline
          rowsMax={4}
          value={value}
          onChange={handleChange}
          variant="filled"
        />
        <TextField
          id="filled-textarea"
          label="Multiline Placeholder"
          placeholder="Placeholder"
          multiline
          variant="filled"
        />
        <TextField
          id="filled-multiline-static"
          label="Multiline"
          multiline
          rows={4}
          defaultValue="Default Value"
          variant="filled"
        />
      </div>
      <div>
        <TextField
          id="outlined-multiline-flexible"
          label="Multiline"
          multiline
          rowsMax={4}
          value={value}
          onChange={handleChange}
          variant="outlined"
        />
        <TextField
          id="outlined-textarea"
          label="Multiline Placeholder"
          placeholder="Placeholder"
          multiline
          variant="outlined"
        />
        <TextField
          id="outlined-multiline-static"
          label="Multiline"
          multiline
          rows={4}
          defaultValue="Default Value"
          variant="outlined"
        />
      </div>
    </form>
    <div className='compo-description'>
      <h4>Description</h4>
      <p>Input is component is can be used to take user inputs in form fileds, it can be configured based on the data we require. like we shown in the demo fields.</p>
      <h5>Steps</h5>
      <ul>

        <li><strong>Step 1 :</strong> Install Dependency to your project root folder : <code>npm install @material-ui/core --save-dev</code></li>
        <li><strong>Step 2 :</strong> Import component in view where ever its necessary: <code>import TextField from '@material-ui/core/TextField';</code></li>
        <li><strong>Step 4 :</strong> Refer JSX code under the 'Code' tab, to understand the usage of component.</li>
    </ul>

    </div>
    </div>
  );
}

function MatInputCode() {
  useEffect(()=> Prism.highlightAll(), [])
  return (
    <div className='jsx-code-wrapper'>
      <h4>JSX</h4>
      <pre style={{marginRight: '20px', background: '#fff'}}>
        <code className='language-markup'>{`// Standard, Filled and Outlined
<TextField id="standard-basic" label="Standard" />
<TextField id="filled-basic" label="Filled" variant="filled" />
<TextField id="outlined-basic" label="Outlined" variant="outlined" />

// With required, disabled, type, helperText & readOnly props
<TextField required id="standard-required" label="Required" defaultValue="Hello World" />
<TextField disabled id="standard-disabled" label="Disabled" defaultValue="Hello World" />
<TextField id="standard-password-input" label="Password" type="password" autoComplete="current-password" />
<TextField id="standard-read-only-input" label="Read Only" defaultValue="Hello World" InputProps={{ readOnly: true}}/>

// Input Fiels with validation
<TextField error id="standard-error" label="Error" defaultValue="Hello World" />
<TextField error id="standard-error-helper-text" label="Error" defaultValue="Hello World" helperText="Incorrect entry." />

// Input fileds as TextArea
<TextField
  id="standard-multiline-flexible"
  label="Multiline"
  multiline
  rowsMax={4}
  value={value}
  onChange={handleChange}
/>
<TextField
  id="standard-textarea"
  label="Multiline Placeholder"
  placeholder="Placeholder"
  multiline
/>

`}
      </code>
    </pre>
  </div>
  )
}

export { MatInput, MatInputCode };